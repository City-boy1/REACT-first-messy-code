import { createContext, useContext, useState } from "react"
import Toast from "../components/Toast"

const ToastContext = createContext()

export function ToastProvider({ children }) {

    const [toast, setToast] = useState(null)

    function showToast(message, status = "success") {

        setToast({
            message,
            status
        })

        if (status === "success") {

            setTimeout(() => {
                setToast(null)
            }, 8000)

        }
    }

    function closeToast() {
        setToast(null)
    }

    return (
        <ToastContext.Provider value={{ showToast }}>

            {children}

            {toast && (
                <Toast
                    message={toast.message}
                    status={toast.status}
                    onClose={closeToast}
                />
            )}

        </ToastContext.Provider>
    )
}

export function useToast() {
    return useContext(ToastContext)
}