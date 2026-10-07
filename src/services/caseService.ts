import { apiClient } from './apiClient';
import { CaseList, CanvasSnapshot, NarrativeProcessingResult, TextNarrativeRequest } from '../types/api.types';

// Utilidad para generar el Idempotency-Key
function generateIdempotencyKey(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export const caseService = {
  /**
   * Obtiene la lista de expedientes.
   */
  getCases: async (): Promise<CaseList> => {
    try {
      const response = await apiClient.get<CaseList>('/cases');
      return response.data;
    } catch (error) {
      console.error('[caseService] Error fetching cases:', error);
      throw error;
    }
  },

  /**
   * Obtiene el canvas (grafo) de un expediente específico.
   */
  getCanvas: async (caseId: string): Promise<CanvasSnapshot> => {
    try {
      const response = await apiClient.get<CanvasSnapshot>(`/cases/${caseId}/canvas`);
      return response.data;
    } catch (error) {
      console.error(`[caseService] Error fetching canvas for case ${caseId}:`, error);
      throw error;
    }
  },

  /**
   * Envía una narrativa (texto) para un expediente.
   */
  postNarrativeText: async (
    caseId: string, 
    text: string, 
    language?: string
  ): Promise<NarrativeProcessingResult> => {
    try {
      const payload: TextNarrativeRequest = {
        inputType: 'TEXT',
        text,
      };
      
      if (language) {
        payload.language = language;
      }

      const response = await apiClient.post<NarrativeProcessingResult>(
        `/cases/${caseId}/narrative`,
        payload,
        {
          headers: {
            'Idempotency-Key': generateIdempotencyKey(),
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error(`[caseService] Error posting narrative for case ${caseId}:`, error);
      throw error;
    }
  }
};
