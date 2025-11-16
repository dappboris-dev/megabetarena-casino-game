import { ChevronRight } from 'lucide-react'

export function WelcomeHero() {
  return (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-card via-card/95 to-teal-900/40 p-8 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-foreground mb-6">Welcome back, champion!</h1>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 max-w-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🥉</div>
                <div className="text-lg font-semibold">Bronze</div>
              </div>
              <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                VIP-Club <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">600 XP to next level</span>
              <span className="text-muted-foreground">$50 next level bonus</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="/three-soccer-players-in-teal-jerseys.jpg"
            alt="Team"
            className="h-80 object-contain"
          />
          <div className="absolute top-4 right-4 text-right">
            <div className="text-teal-400/60 text-sm font-medium mb-1">Official partner</div>
            <div className="text-teal-400/60 text-sm font-medium">Official partner</div>
          </div>
        </div>
      </div>
    </div>
  )
}
