'use client'

import React, { useEffect } from 'react'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import Sidebar from './sidebar'
import { usePathname } from 'next/navigation'

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Sheet
      modal={false}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="secondary"
          className="lg:hidden"
        >
          <MenuIcon className="size-4 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar