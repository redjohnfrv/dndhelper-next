import {useCallback, useMemo, useState} from 'react'

export type UseSwitcherType = {
    isOn: boolean
    on: () => void
    off: () => void
    toggle: () => void
}

export const useSwitcher = (init = false) => {
    const [isOn, setIsOn] = useState(init)
    const on = useCallback(() => setIsOn(true), [])
    const off = useCallback(() => setIsOn(false), [])
    const toggle = useCallback(() => setIsOn(prev => !prev), [])

    return useMemo(
        () => ({
            isOn,
            on,
            off,
            toggle,
        }),
        [isOn, off, on, toggle,]
    )
}
