import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from './ui/button'

interface NavButtonProps {
  href: string
  label: string
  isActive?: boolean
}

export function NavButton({ href, label, isActive = false }: NavButtonProps) {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        'w-full lg:auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transaction',
        isActive ? 'bg-white/10 text-white' : 'bg-transparent',
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  )
}
