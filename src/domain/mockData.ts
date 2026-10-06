import { Expediente } from './models';

export const mockExpediente: Partial<Expediente> = {
  titulo: 'State v. Sterling Industries',
  estado: 'En_Auditoria',
};

export const recentActivities = [
  {
    id: '1',
    type: 'document',
    title: 'Summary Judgment Brief v2.4',
    status: 'Sealed',
    time: '10:45 AM',
    action: 'Ready',
    icon: 'history-edu' as const,
  },
  {
    id: '2',
    type: 'node',
    title: 'Witness Deposition: Dr. Aris Thorne',
    status: 'Witness',
    time: 'Yesterday',
    action: '4:20 PM',
    icon: 'device-hub' as const,
  }
];
