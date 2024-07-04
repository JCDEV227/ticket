"use client"
import {
    Card,
    CardContent,
  } from "@/components/ui/card"

export function CardSimples() {
    return (
        <Card className="min-w-[100%] bg-white border rounded-md border-zinc-950 text-zinc-950 max-h-[150px] text-sm py-2">
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    )
}