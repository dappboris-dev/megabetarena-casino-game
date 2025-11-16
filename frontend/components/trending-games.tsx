import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Link from "next/link"

const games = [
  {
    name: "COINFLIP",
    gradient: "from-orange-400 to-yellow-500",
    icon: "🎯"
  },
  {
    name: "DICE",
    gradient: "from-emerald-400 to-teal-500",
    icon: "🎲"
  },
  {
    name: "MINES",
    gradient: "from-blue-400 to-cyan-500",
    icon: "💎"
  },
  {
    name: "CRASH",
    gradient: "from-purple-400 to-violet-500",
    icon: "🚀"
  },
  {
    name: "PLINKO",
    gradient: "from-fuchsia-400 to-purple-500",
    icon: "⚪"
  },
  {
    name: "LIMBO",
    gradient: "from-pink-400 to-rose-500",
    icon: "💫"
  },
  {
    name: "TOWER",
    gradient: "from-red-400 to-pink-500",
    icon: "🗼"
  }
]

export function TrendingGames() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <h2 className="text-xl font-bold text-white">Trending Now</h2>
        </div>
        <Button variant="outline" size="sm" className="text-sm">
          View all
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {games.map((game) => (
          <Link
            key={game.name}
            href="#"
            className={`flex-shrink-0 w-32 bg-gradient-to-br ${game.gradient} rounded-2xl p-4 aspect-[4/5] flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform`}
          >
            <div className="text-5xl">{game.icon}</div>
            <div className="text-center">
              <div className="font-bold text-white text-sm">{game.name}</div>
              <div className="text-white/80 text-xs">ORIGINALS</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
