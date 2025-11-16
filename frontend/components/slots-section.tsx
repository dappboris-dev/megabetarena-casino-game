import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Link from "next/link"

const slots = [
  {
    name: "SWEET BONANZA 1000",
    provider: "PRAGMATIC PLAY",
    image: "/sweet-candy-slot-game-colorful.jpg"
  },
  {
    name: "SUGAR RUSH 1000",
    provider: "PRAGMATIC PLAY",
    image: "/sugar-candy-gumball-machine-slot.jpg"
  },
  {
    name: "ZEUS VS HADES GODS OF WAR",
    provider: "PRAGMATIC PLAY",
    image: "/zeus-vs-hades-mythology-slot-game.jpg"
  },
  {
    name: "PRAY FOR THREE",
    provider: "HACKSAW GAMING",
    image: "/dark-creepy-slot-game-character.jpg"
  },
  {
    name: "FRUIT PARTY 2",
    provider: "PRAGMATIC PLAY",
    image: "/colorful-fruit-slot-game-grapes-strawberry.jpg"
  },
  {
    name: "FRKN BANANAS",
    provider: "HACKSAW GAMING",
    image: "/crazy-banana-character-slot-game.jpg"
  },
  {
    name: "THE DOG HOUSE",
    provider: "PRAGMATIC PLAY",
    image: "/dog-house-slot-game-brown-dog.jpg"
  }
]

export function SlotsSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎰</span>
          <h2 className="text-xl font-bold text-white">Slots</h2>
        </div>
        <Button variant="outline" size="sm" className="text-sm">
          View all
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {slots.map((slot) => (
          <Link
            key={slot.name}
            href="#"
            className="flex-shrink-0 w-32 group relative rounded-xl overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
              <img
                src={slot.image || "/placeholder.svg"}
                alt={slot.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
              <div className="font-bold text-white text-xs leading-tight">{slot.name}</div>
              <div className="text-white/60 text-[10px]">{slot.provider}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
