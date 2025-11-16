import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react'

export function FeaturedBets() {
  const bets = [
    {
      id: 1,
      event: "Champions League Finals",
      team1: "Real Madrid",
      team2: "Bayern Munich",
      odds1: 2.1,
      odds2: 3.4,
      trend: "up",
      total: "$45,200",
    },
    {
      id: 2,
      event: "NBA Playoffs",
      team1: "Lakers",
      team2: "Celtics",
      odds1: 1.8,
      odds2: 2.2,
      trend: "down",
      total: "$38,900",
    },
    {
      id: 3,
      event: "Premier League",
      team1: "Manchester City",
      team2: "Arsenal",
      odds1: 1.95,
      odds2: 3.1,
      trend: "up",
      total: "$52,100",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Featured Bets</h2>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Top trending bets with the best odds in the arena
            </p>
          </div>
          <div className="space-y-4">
            {bets.map((bet) => (
              <Card key={bet.id} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-muted-foreground">{bet.event}</span>
                      {bet.trend === "up" ? (
                        <TrendingUpIcon className="h-4 w-4 text-accent" />
                      ) : (
                        <TrendingDownIcon className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{bet.team1}</div>
                        <div className="text-2xl font-bold text-primary">{bet.odds1.toFixed(2)}x</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{bet.team2}</div>
                        <div className="text-2xl font-bold text-accent">{bet.odds2.toFixed(2)}x</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-sm text-muted-foreground">Total Pool</div>
                    <div className="text-xl font-bold mb-2">{bet.total}</div>
                    <Button className="bg-primary hover:bg-primary/90">Place Bet</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
