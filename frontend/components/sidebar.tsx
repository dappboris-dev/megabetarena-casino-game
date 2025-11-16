import { Home, User, MessageCircle, CreditCard, Wallet, Star, BookOpen, Gift, Users, Shield, MessageSquare, Newspaper } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()
  
  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: MessageCircle, label: "Live Support", href: "/live-support" },
    { icon: CreditCard, label: "Deposit", href: "/deposit" },
    { icon: Wallet, label: "Withdraw", href: "/withdraw" },
    { icon: Star, label: "VIP-Club", href: "/vip-club" },
    { icon: BookOpen, label: "About Us", href: "/about" },
    { icon: Gift, label: "Promotions", href: "/promotions" },
    { icon: Users, label: "Sponsorships", href: "/sponsorships" },
    { icon: Shield, label: "Licenses & Security", href: "/licenses" },
    { icon: MessageSquare, label: "Feedback About Us", href: "/feedback" },
    { icon: Newspaper, label: "News", href: "/news" },
  ]

  return (
    <aside className="w-60 bg-sidebar border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        </div>
      </div>

      {/* Game Type Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-2">
          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
            GAMES
          </Button>
          <Button variant="secondary" className="flex-1">
            SLOTS
          </Button>
        </div>
      </div>

      {/* Rakeback Card */}
      <div className="mx-4 mb-6 p-4 rounded-lg bg-gradient-to-br from-accent to-accent/60">
        <div className="text-xs font-semibold text-accent-foreground mb-2">AVAILABLE RAKEBACK</div>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-accent-foreground">$0.01</div>
          <div className="text-4xl opacity-50">%</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 overflow-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              pathname === item.href
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
