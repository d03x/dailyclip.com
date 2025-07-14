"use client"

import { ReactNode } from "react"
import { ToastContainer } from "react-toastify"

export default function ClientProvider({
    children
} : {children : ReactNode}){
    return <>
        {children}
        <ToastContainer/>
    </>
}