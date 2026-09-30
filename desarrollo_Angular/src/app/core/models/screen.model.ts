export type RoleId =
  | 'portal'
  | 'cliente'
  | 'mecanico'
  | 'jefe-sede'
  | 'logistica'
  | 'administrador';

export type ScreenKind =
  | 'portal'
  | 'dashboard'
  | 'form'
  | 'table'
  | 'detail'
  | 'timeline'
  | 'report'
  | 'checklist'
  | 'upload'
  | 'approval';

export type FieldType =
  | 'text'
  | 'email'
  | 'select'
  | 'date'
  | 'time'
  | 'number'
  | 'textarea'
  | 'file';

export interface ScreenField {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  min?: number;
}

export interface ScreenMetric {
  label: string;
  value: string;
  caption: string;
  tone?: 'primary' | 'success' | 'warning' | 'neutral';
}

export interface ScreenRecord {
  id: string;
  primary: string;
  secondary: string;
  detail: string;
  status: string;
  date: string;
}

export interface AppointmentDemo {
  id: string;
  service: string;
  branch: string;
  bay: string;
  vehicle?: string;
  date: string;
  time: string;
  status: string;
}

export interface ScreenAction {
  label: string;
  target?: string;
  effect?: 'advance' | 'approve' | 'export' | 'generic';
  variant?: 'primary' | 'secondary' | 'quiet' | 'danger';
}

export interface ScreenDefinition {
  id: string;
  role: RoleId;
  roleLabel: string;
  order: number;
  name: string;
  title: string;
  description: string;
  kind: ScreenKind;
  fields?: ScreenField[];
  metrics?: ScreenMetric[];
  records?: ScreenRecord[];
  actions?: ScreenAction[];
  timeline?: { title: string; description: string; date: string; complete: boolean }[];
}
