import React from 'react'
import { useMedia } from 'react-use'
import {
  Dialog,
  DialogContent
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'

interface ResponsiveModalProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  className?: string
}

export const ResponsiveModal = ({
  children,
  open,
  onOpenChange,
  className
}: ResponsiveModalProps) => {
  const isDesktop = useMedia('(min-width: 1024px)', true)

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className={cn(`w-full sm:max-w-lg p-2 border-none overflow-y-auto hide-scrollbar max-h-[85vh]`, className)}>
          {children}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="w-full sm:max-w-lg p-0 mx-auto border-none overflow-y-auto hide-scrollbar max-h-[85vh]">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  )
}