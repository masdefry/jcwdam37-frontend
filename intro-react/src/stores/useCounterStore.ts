import { create } from 'zustand';

type CounterStore = {
  count: number;
  increment: (number: number) => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: (number) => set((state) => ({ count: state.count + number })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
