export type Uuid = string;
export type Timestamp = string;
export type CanvasVersion = number;
export type LanguageTag = string;

// -- Cases
export type CaseStatus = 'ACTIVE' | 'ARCHIVED';

export interface Case {
  id: Uuid;
  title: string;
  description?: string;
  clientReference?: string;
  status: CaseStatus;
  canvasVersion: CanvasVersion;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface PageInfo {
  hasMore: boolean;
  nextCursor?: string;
}

export interface CaseList {
  items: Case[];
  page: PageInfo;
}

// -- Canvas
export type NodeType = 'FACT' | 'EVIDENCE' | 'LAW' | 'JURISPRUDENCE';
export type Origin = 'AI_GENERATED' | 'USER_CREATED';

export interface Position {
  x: number;
  y: number;
}

export interface CanvasNode {
  id: Uuid;
  type: NodeType;
  title: string;
  content: string;
  position: Position;
  origin: Origin;
  userModified: boolean;
}

export type RelationshipType = 'SUPPORTS' | 'CONTRADICTS' | 'DERIVES_FROM' | 'APPLIES_TO' | 'INTERPRETS';

export interface CanvasEdge {
  id: Uuid;
  source: Uuid;
  target: Uuid;
  relationshipType: RelationshipType;
  origin: Origin;
  userModified: boolean;
}

export interface CanvasGraph {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
}

export interface CanvasSnapshot {
  caseId: Uuid;
  version: CanvasVersion;
  updatedAt: Timestamp;
  canvas: CanvasGraph;
}

// -- Narrative
export type NarrativeInputType = 'TEXT' | 'VOICE';

export interface TextNarrativeRequest {
  inputType: 'TEXT';
  text: string;
  language?: LanguageTag;
}

export interface VoiceNarrativeRequest {
  inputType: 'VOICE';
  audio: string;
  language?: LanguageTag;
}

export interface NarrativeProcessingResult {
  narrativeId: Uuid;
  inputType: NarrativeInputType;
  transcript?: string;
  generatedNodeIds?: Uuid[];
  generatedEdgeIds?: Uuid[];
  canvas: CanvasSnapshot;
}
