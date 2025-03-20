// State is defined outside the function to be shared
const dontlook = ref(false)

export const useCat = () => {
    const setDontLook = (value: boolean): void => {
        dontlook.value = value
    }

    return {
        dontlook,
        setDontLook
    }
} 