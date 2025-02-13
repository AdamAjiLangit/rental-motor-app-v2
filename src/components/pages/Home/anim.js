export const slideUp = {
    initial: {
        y: "100%",
        opacity: 1
    },
    open: (i) => ({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.5, delay: 0.08 * i }
    }),
    closed: {
        y: "100%",
        opacity: 1,
        transition: { duration: 0.5 }
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.5 }
    }
}