export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

export type FormMode = 'view' | 'edit' | 'create' | 'delete';
