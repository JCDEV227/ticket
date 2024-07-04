"use client"
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="p-6 md:py-12 min-w-full bg-background text-slate-50">
      <div className="container max-w-7xl flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">&copy; 2024 TICKET.</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
           Sobre Nós
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
           Política de privacidade
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contactos
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <FacebookLogo size={32} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <InstagramLogo size={32} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            <LinkedinLogo size={32} />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}