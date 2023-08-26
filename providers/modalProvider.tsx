"use client"

import { AuthModal } from "@/components/AuthModal"
import { UploadModal } from "@/components/UploadModal"

export const ModalProvider = () => {

    return(
        <>
           <AuthModal />
           <UploadModal />
        </>
    )
}