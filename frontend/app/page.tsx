import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { WelcomeHero } from "@/components/welcome-hero"
import { PromoCards } from "@/components/promo-cards"
import { GameCategories } from "@/components/game-categories"
import { TrendingGames } from "@/components/trending-games"
import { SlotsSection } from "@/components/slots-section"
import { RecentBigWins } from "@/components/recent-big-wins"
import { ChatWidget } from "@/components/chat-widget"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6 overflow-auto space-y-8">
          <WelcomeHero />
          <PromoCards />
          <GameCategories />
          <TrendingGames />
          <SlotsSection />
          <RecentBigWins />
        </main>
      </div>
      <ChatWidget />
    </div>
  )
}
