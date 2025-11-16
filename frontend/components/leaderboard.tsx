import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrophyIcon, MedalIcon, CrownIcon } from 'lucide-react'

export function Leaderboard() {
  const leaders = [
    {
      rank: 1,
      username: "CryptoKing",
      winnings: "$125,400",
      wins: 342,
      icon: CrownIcon,
      color: "text-yellow-500",
    },
    {
      rank: 2,
      username: "BetMaster",
      winnings: "$98,200",
      wins: 289,
      icon: TrophyIcon,
      color: "text-gray-400",
    },
    {
      rank: 3,
      username: "LuckyAce",
      winnings: "$87,600",
      wins: 256,
      icon: MedalIcon,
      color: "text-orange-600",
    },
    {
      rank: 4,
      username: "ProGamer",
      winnings: "$76,300",
      wins: 234,
      icon: null,
      color: "text-muted-foreground",
    },
    {
      rank: 5,
      username: "HighRoller",
      winnings: "$69,800",
      wins: 221,
      icon: null,
      color: "text-muted-foreground",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Top Players</h2>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              This week's highest earners in the arena
            </p>
          </div>
          <Card className="p-6 bg-card border-border">
            <div className="space-y-4">
              {leaders.map((leader, index) => (
                <div
                  key={leader.rank}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    index < 3 ? "bg-primary/5 border border-primary/10" : "hover:bg-muted/50"
                  } transition-colors`}
                >
                  <div className="flex items-center justify-center w-10 h-10">
                    {leader.icon ? (
                      <leader.icon className={`h-6 w-6 ${leader.color}`} />
                    ) : (
                      <span className="text-xl font-bold text-muted-foreground">{leader.rank}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold mb-1">{leader.username}</div>
                    <div className="text-sm text-muted-foreground">{leader.wins} wins</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-accent">{leader.winnings}</div>
                    <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary border-primary/20">
                      #{leader.rank}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
