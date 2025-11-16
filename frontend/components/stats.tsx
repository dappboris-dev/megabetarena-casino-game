import { DollarSignIcon, UsersIcon, TrendingUpIcon, AwardIcon } from 'lucide-react'

export function Stats() {
  const stats = [
    {
      icon: UsersIcon,
      value: "50K+",
      label: "Active Players",
      subtext: "Online now",
    },
    {
      icon: DollarSignIcon,
      value: "$2.5M",
      label: "Total Winnings",
      subtext: "Paid today",
    },
    {
      icon: TrendingUpIcon,
      value: "98%",
      label: "Payout Rate",
      subtext: "Instant settlements",
    },
    {
      icon: AwardIcon,
      value: "1,200+",
      label: "Daily Tournaments",
      subtext: "Join anytime",
    },
  ]

  return (
    <section className="py-12 border-y border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
