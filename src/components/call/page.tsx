"use client"

import { Headset } from "@phosphor-icons/react"

export function Call() {
    return (
        <div className="fixed bottom-5 right-5 drop-shadow-lg w-[30px] h-[30px] flex justify-center rounded-full items-center bg-yellow-500 text-zin-950 hover:animate-pulse">
            <Headset size={24} />
        </div>
    )
}