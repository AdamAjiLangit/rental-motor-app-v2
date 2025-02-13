import { create } from "zustand";

const useAppStore = create((set) => ({
    isLoaded: false, // Tracks if preloader has been shown
    setIsLoaded: () => set({ isLoaded: true }),

    showCurveTransition: false, // Tracks if curve animation should play
    setShowCurveTransition: (value) => set({ showCurveTransition: value }),
}));

export default useAppStore;
