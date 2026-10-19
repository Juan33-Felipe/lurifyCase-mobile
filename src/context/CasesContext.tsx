import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { caseService } from '../services/caseService';
import { AuditReport, Case, CanvasSnapshot, CreateCaseRequest } from '../types/api.types';

interface Remote<T> {
  data: T | null;
  loading: boolean;
  error: boolean;
}

interface CasesContextValue {
  cases: Remote<Case[]>;
  refreshCases: () => Promise<void>;
  createCase: (payload: CreateCaseRequest) => Promise<Case>;
  selectedCase: Case | null;
  selectCase: (id: string) => void;
  canvas: Remote<CanvasSnapshot>;
  reloadCanvas: () => void;
  applyCanvas: (snapshot: CanvasSnapshot) => void;
  audit: Remote<AuditReport>;
  runAudit: () => Promise<void>;
}

const CasesContext = createContext<CasesContextValue | null>(null);

/**
 * Mounted only while a session is active (see App.tsx), so all state starts
 * clean on every sign-in and is discarded on sign-out.
 *
 * Canvas/audit results are stored together with the case they belong to and
 * the loading flag is derived, which avoids resetting state inside effects.
 */
export function CasesProvider({ children }: { children: React.ReactNode }) {
  const [cases, setCases] = useState<Remote<Case[]>>({ data: null, loading: true, error: false });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [canvasState, setCanvasState] = useState<{ caseId: string; snapshot: CanvasSnapshot | null; error: boolean } | null>(null);
  const [reloadTick, setReloadTick] = useState(0);
  const [auditState, setAuditState] = useState<{ caseId: string; report: AuditReport | null; loading: boolean; error: boolean } | null>(null);

  const loadCases = useCallback(async () => {
    try {
      const res = await caseService.getCases();
      setCases({ data: res.items, loading: false, error: false });
      setSelectedId((cur) => (cur && res.items.some((c) => c.id === cur) ? cur : res.items[0]?.id ?? null));
    } catch {
      setCases((p) => ({ ...p, loading: false, error: true }));
    }
  }, []);

  const refreshCases = useCallback(async () => {
    setCases((p) => ({ ...p, loading: true, error: false }));
    await loadCases();
  }, [loadCases]);

  useEffect(() => {
    let active = true;
    caseService
      .getCases()
      .then((res) => {
        if (!active) return;
        setCases({ data: res.items, loading: false, error: false });
        setSelectedId(res.items[0]?.id ?? null);
      })
      .catch(() => active && setCases((p) => ({ ...p, loading: false, error: true })));
    return () => {
      active = false;
    };
  }, []);

  // Fetch the canvas of the selected case.
  useEffect(() => {
    if (!selectedId) return;
    let active = true;
    caseService
      .getCanvas(selectedId)
      .then((snapshot) => active && setCanvasState({ caseId: selectedId, snapshot, error: false }))
      .catch(() => active && setCanvasState({ caseId: selectedId, snapshot: null, error: true }));
    return () => {
      active = false;
    };
  }, [selectedId, reloadTick]);

  const reloadCanvas = useCallback(() => {
    setCanvasState(null);
    setReloadTick((n) => n + 1);
  }, []);

  const canvasCurrent = canvasState && canvasState.caseId === selectedId ? canvasState : null;
  const canvas: Remote<CanvasSnapshot> = {
    data: canvasCurrent?.snapshot ?? null,
    loading: !!selectedId && !canvasCurrent,
    error: canvasCurrent?.error ?? false,
  };

  const createCase = useCallback(async (payload: CreateCaseRequest) => {
    const created = await caseService.createCase(payload);
    setCases((p) => ({ ...p, data: [created, ...(p.data ?? [])] }));
    setSelectedId(created.id);
    return created;
  }, []);

  const applyCanvas = useCallback((snapshot: CanvasSnapshot) => {
    setCanvasState({ caseId: snapshot.caseId, snapshot, error: false });
    setAuditState(null);
  }, []);

  const runAudit = useCallback(async () => {
    if (!selectedId || !canvas.data) return;
    const caseId = selectedId;
    setAuditState({ caseId, report: null, loading: true, error: false });
    try {
      const report = await caseService.auditCase(caseId, canvas.data.version);
      setAuditState({ caseId, report, loading: false, error: false });
    } catch {
      setAuditState({ caseId, report: null, loading: false, error: true });
    }
  }, [selectedId, canvas.data]);

  const auditCurrent = auditState && auditState.caseId === selectedId ? auditState : null;
  const audit: Remote<AuditReport> = {
    data: auditCurrent?.report ?? null,
    loading: auditCurrent?.loading ?? false,
    error: auditCurrent?.error ?? false,
  };

  const selectedCase = useMemo(() => cases.data?.find((c) => c.id === selectedId) ?? null, [cases.data, selectedId]);

  const value: CasesContextValue = {
    cases,
    refreshCases,
    createCase,
    selectedCase,
    selectCase: setSelectedId,
    canvas,
    reloadCanvas,
    applyCanvas,
    audit,
    runAudit,
  };

  return <CasesContext.Provider value={value}>{children}</CasesContext.Provider>;
}

export function useCases(): CasesContextValue {
  const ctx = useContext(CasesContext);
  if (!ctx) throw new Error('useCases must be used within CasesProvider');
  return ctx;
}
