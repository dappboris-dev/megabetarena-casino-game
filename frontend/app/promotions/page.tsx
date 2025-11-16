import { Gift, Clock, TrendingUp, Users, Zap, Star, Calendar, Trophy } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function PromotionsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-orange-900/40 rounded-lg p-8 border border-purple-500/30">
        <h1 className="text-3xl font-bold text-white mb-2">Promotions & Bonuses</h1>
        <p className="text-slate-300">Exclusive offers and rewards to boost your gaming experience.</p>
      </div>

      {/* Featured Promotion */}
      <Card className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-emerald-500/30 p-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-bold uppercase">
                Featured
              </span>
              <span className="text-slate-400 text-sm">Ends in 5 days</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Welcome Bonus</h2>
            <p className="text-2xl font-bold text-emerald-400 mb-4">Get 150% up to $1,500 + 150 Free Spins</p>
            <p className="text-slate-300 mb-6 max-w-2xl">
              New players get an incredible welcome package! Make your first deposit and receive 150% bonus up to $1,500 
              plus 150 free spins on our most popular slots.
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-6">
              Claim Now
            </Button>
          </div>
          <div className="w-32 h-32 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Gift className="w-16 h-16 text-emerald-400" />
          </div>
        </div>
      </Card>

      {/* Active Promotions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: TrendingUp,
            color: 'blue',
            badge: 'Daily',
            title: 'Daily Cashback',
            bonus: '10% Cashback',
            description: 'Get 10% of your losses back every day. No questions asked, automatic credit to your account.',
            terms: 'Min. $100 wagered • Max $500 cashback',
          },
          {
            icon: Users,
            color: 'purple',
            badge: 'Referral',
            title: 'Refer a Friend',
            bonus: '$100 Each',
            description: 'Invite your friends and you both get $100 bonus when they make their first deposit of $50+.',
            terms: 'Unlimited referrals • Both get bonus',
          },
          {
            icon: Zap,
            color: 'orange',
            badge: 'Weekend',
            title: 'Weekend Reload',
            bonus: '50% Bonus',
            description: 'Boost your weekend gaming with a 50% deposit bonus every Saturday and Sunday.',
            terms: 'Up to $500 • Code: WEEKEND50',
          },
          {
            icon: Star,
            color: 'yellow',
            badge: 'VIP',
            title: 'VIP Rakeback',
            bonus: 'Up to 20%',
            description: 'Earn rakeback on every bet based on your VIP level. The more you play, the more you earn.',
            terms: 'Paid weekly • All games eligible',
          },
        ].map((promo, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50 p-6 hover:border-emerald-500/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-${promo.color}-500/20 flex items-center justify-center`}>
                <promo.icon className={`w-6 h-6 text-${promo.color}-400`} />
              </div>
              <span className={`px-3 py-1 bg-${promo.color}-500/20 text-${promo.color}-400 rounded-full text-xs font-bold uppercase`}>
                {promo.badge}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
            <p className={`text-2xl font-bold text-${promo.color}-400 mb-3`}>{promo.bonus}</p>
            <p className="text-slate-300 text-sm mb-4">{promo.description}</p>
            <p className="text-slate-500 text-xs mb-4">{promo.terms}</p>
            <Button className={`w-full bg-${promo.color}-500 hover:bg-${promo.color}-600 text-white`}>
              Claim Bonus
            </Button>
          </Card>
        ))}
      </div>

      {/* Tournaments */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Active Tournaments</h2>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Mega Slots Tournament',
              prize: '$50,000',
              players: '1,247',
              ending: '3 days',
              progress: 65,
            },
            {
              name: 'Blackjack Championship',
              prize: '$25,000',
              players: '856',
              ending: '1 week',
              progress: 40,
            },
            {
              name: 'Roulette Rush',
              prize: '$10,000',
              players: '532',
              ending: '2 days',
              progress: 80,
            },
          ].map((tournament, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg">{tournament.name}</h3>
                  <p className="text-emerald-400 font-bold">{tournament.prize} Prize Pool</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Players</span>
                  <span className="text-white font-bold">{tournament.players}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Ends in</span>
                  <span className="text-white font-bold">{tournament.ending}</span>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-white font-bold">{tournament.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${tournament.progress}%` }}
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white">
                Join Tournament
              </Button>
            </Card>
          ))}
        </div>
      </Card>

      {/* Loyalty Program */}
      <Card className="bg-gradient-to-r from-orange-900/30 to-amber-900/30 border-orange-500/30 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
            <Star className="w-8 h-8 text-orange-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Loyalty Rewards</h2>
            <p className="text-slate-300">Earn points on every bet and redeem for cash or prizes</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {[
            { points: '1,000', reward: '$10 Cash' },
            { points: '5,000', reward: '$50 + Free Spins' },
            { points: '10,000', reward: '$120 + VIP Boost' },
            { points: '50,000', reward: '$500 + Exclusive Perks' },
          ].map((tier, index) => (
            <div key={index} className="bg-slate-900/50 rounded-lg p-4 text-center">
              <p className="text-orange-400 font-bold text-2xl mb-2">{tier.points}</p>
              <p className="text-slate-300 text-sm">{tier.reward}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Terms & Conditions */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4">Important Information</h3>
        <ul className="space-y-2 text-slate-400 text-sm">
          <li>• All bonuses are subject to wagering requirements unless stated otherwise</li>
          <li>• Promotions cannot be combined unless explicitly mentioned</li>
          <li>• MegaBetArena reserves the right to modify or cancel promotions at any time</li>
          <li>• Players must be 18+ and comply with local gambling laws</li>
          <li>• Full terms and conditions apply to all offers</li>
        </ul>
      </Card>
    </div>
  )
}
