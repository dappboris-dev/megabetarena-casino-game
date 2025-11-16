import { Button } from "@/components/ui/button"
import { TrophyIcon, UserIcon, WalletIcon } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <TrophyIcon className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-balance">Megabetarena</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Live Games
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Tournaments
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Leaderboard
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2">
              <WalletIcon className="h-4 w-4" />
              <span className="font-mono">$1,250.00</span>
            </Button>
            <Button variant="outline" size="sm">
              <UserIcon className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
