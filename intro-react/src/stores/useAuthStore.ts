import {create} from 'zustand';

type AuthStore = {
    email: string; 
    setEmail: (_email: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    email: '', 
    setEmail: (_email) => set((state) => ({
        email: _email
    }))
}))