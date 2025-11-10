import { create } from "zustand";

const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    toggleTask: (index) =>
        set((state) => {
            const updatedTasks = [...state.tasks];
            updatedTasks[index].completed = !updatedTasks[index].completed;
            return { tasks: updatedTasks };
        }),
}));

export default useTaskStore;