"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlayIcon, UsersIcon, TrendingUpIcon } from 'lucide-react'

export function LiveGames() {
  const games = [
    {
      id: 1,
      title: "Crash Royale",
      players: 1250,
      multiplier: "2.45x",
      status: "live",
      pot: "$12,450",
      timeLeft: "2:34",
    },
    {
      id: 2,
      title: "Dice Master Pro",
      players: 890,
      multiplier: "1.82x",
      status: "live",
      pot: "$8,920",
      timeLeft: "5:12",
    },
    {
      id: 3,
      title: "Roulette Rush",
      players: 2100,
      multiplier: "3.10x",
      status: "live",
      pot: "$21,000",
      timeLeft: "1:05",
    },
    {
      id: 4,
      title: "Coin Flip Arena",
      players: 640,
      multiplier: "1.95x",
      status: "live",
      pot: "$6,400",
      timeLeft: "3:45",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">Live Games</h2>
            <p className="text-muted-foreground text-pretty">Join the action happening right now</p>
          </div>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Card key={game.id} className="p-6 bg-card hover:bg-card/80 transition-colors border-border group">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse mr-2" />
                  LIVE
                </Badge>
                <span className="text-sm text-muted-foreground font-mono">{game.timeLeft}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-balance">{game.title}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Prize Pool</span>
                  <span className="font-bold text-accent">{game.pot}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <UsersIcon className="h-3 w-3" />
                    Players
                  </span>
                  <span className="font-mono">{game.players.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <TrendingUpIcon className="h-3 w-3" />
                    Multiplier
                  </span>
                  <span className="font-bold text-primary">{game.multiplier}</span>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                <PlayIcon className="h-4 w-4 mr-2" />
                Join Game
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
