"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DotsThreeOutlineVertical } from "@phosphor-icons/react"


export function MenuHome() {
  const [position, setPosition] = React.useState<string>("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center lg:hidden">
          <DotsThreeOutlineVertical size={32} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-transparent">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup value={position} onValueChange={setPosition} {...{ value: position, onValueChange: setPosition } as any}>
          <DropdownMenuItem>
            m
          </DropdownMenuItem>
          <DropdownMenuItem>
            m
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between items-center">
            <Button variant="secondary">Entrar</Button>
            <Button>Criar conta</Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
