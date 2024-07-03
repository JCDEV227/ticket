"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Button } from "@/components/ui/button"

export function MenuHomeLine() {
    return (
        <Breadcrumb className="hidden lg:block">
            <BreadcrumbList className="text-primary-foreground">
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <BreadcrumbLink href="/components">Entrar</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="flex justify-between items-center">
                    <Button variant="secondary">Criar conta</Button>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}