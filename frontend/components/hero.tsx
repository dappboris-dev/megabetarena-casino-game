import { Button } from "@/components/ui/button"
import { PlayIcon, TrendingUpIcon } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">250+ Active Games Live Now</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            The Ultimate
            <br />
            <span className="text-primary">Betting Arena</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Join thousands of players in real-time competitive betting. Experience the thrill of live gaming with instant payouts and transparent odds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <PlayIcon className="h-5 w-5 mr-2" />
              Start Playing Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <TrendingUpIcon className="h-5 w-5 mr-2" />
              View Live Games
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
