"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
  } from "@/components/ui/breadcrumb"
  import { Button } from "@/components/ui/button"

export function MenuHomeLine() {
    return (
        <Breadcrumb className="hidden lg:block">
            <BreadcrumbList className="text-primary-foreground">
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <BreadcrumbLink href="/components">Entrar</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className="flex justify-between items-center">
                    <Button variant="secondary">Criar conta</Button>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}