'use client'

import stores from "./store"
import { Provider } from "react-redux"

export function Providers({ children }) {
    return (
        <Provider store={stores}>
            {children}
        </Provider>
    )
}