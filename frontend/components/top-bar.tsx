import { Home, User, Gift, Star, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function TopBar() {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-card">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <nav className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Home className="w-4 h-4" />
            Home
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <User className="w-4 h-4" />
            Profile
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Gift className="w-4 h-4" />
            Bonuses
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Star className="w-4 h-4" />
            VIP-Club
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-xs text-muted-foreground">Your Balance</div>
          <div className="text-lg font-bold text-foreground">$306.40</div>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
          Deposit
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center relative">
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] flex items-center justify-center">3</div>
          </div>
        </div>
      </div>
    </header>
  )
}
