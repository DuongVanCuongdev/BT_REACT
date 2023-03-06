import { create } from "zustand";

const cartStore = create(set => ({
    count: 0,
    addCount: () => set(state => ({ count: state.count + 1 })),
    subtractCount: () => set(state => ({ count: state.count - 1 })),
    list: 0,
    listProducCart: (list) => set(state => ({list}))
}));


export default cartStore;