import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {

        //This time use a delay 500milliseconds after user stop typing. this is a hook for improve a performance
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay || 500)

        //prevent overflow here
        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}