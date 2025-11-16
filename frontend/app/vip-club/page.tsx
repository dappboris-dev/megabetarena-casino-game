import { Crown, Star, Gift, Zap, TrendingUp, Shield, CheckCircle2, Lock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export default function VIPClubPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-orange-900/40 rounded-lg p-8 border border-purple-500/30">
        <div className="flex items-center gap-3 mb-3">
          <Crown className="w-10 h-10 text-yellow-400" />
          <h1 className="text-3xl font-bold text-white">VIP Club</h1>
        </div>
        <p className="text-slate-300">Unlock exclusive rewards, bonuses, and personalized service as you level up.</p>
      </div>

      {/* Current Status */}
      <Card className="bg-gradient-to-r from-orange-900/30 to-amber-900/30 border-orange-500/30 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-slate-300 mb-1">Your Current Level</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-orange-400">Bronze</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">Level 2</span>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
            <Star className="w-8 h-8 text-orange-400" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-300">Progress to Silver</span>
            <span className="text-white font-bold">600 / 2000 XP</span>
          </div>
          <Progress value={30} className="h-3" />
          <p className="text-slate-400 text-sm">1,400 XP more needed to reach Silver level</p>
        </div>
      </Card>

      {/* VIP Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            name: 'Bronze',
            level: '1-2',
            color: 'orange',
            icon: Star,
            benefits: ['5% Rakeback', '$50 Level Bonus', 'Basic Support'],
            active: true,
          },
          {
            name: 'Silver',
            level: '3-5',
            color: 'slate',
            icon: Shield,
            benefits: ['10% Rakeback', '$200 Level Bonus', 'Priority Support'],
            active: false,
          },
          {
            name: 'Gold',
            level: '6-8',
            color: 'yellow',
            icon: Crown,
            benefits: ['15% Rakeback', '$1000 Level Bonus', 'VIP Manager'],
            active: false,
          },
          {
            name: 'Diamond',
            level: '9-10',
            color: 'blue',
            icon: Zap,
            benefits: ['20% Rakeback', '$5000 Level Bonus', 'Personal Host'],
            active: false,
          },
        ].map((tier, index) => (
          <Card
            key={index}
            className={`${
              tier.active
                ? 'bg-gradient-to-br from-orange-900/40 to-amber-900/40 border-orange-500/50'
                : 'bg-slate-800/50 border-slate-700/50'
            } p-6 relative overflow-hidden`}
          >
            {!tier.active && (
              <div className="absolute top-3 right-3">
                <Lock className="w-5 h-5 text-slate-500" />
              </div>
            )}
            <div className={`w-12 h-12 rounded-lg bg-${tier.color}-500/20 flex items-center justify-center mb-4`}>
              <tier.icon className={`w-6 h-6 text-${tier.color}-400`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
            <p className="text-slate-400 text-sm mb-4">Level {tier.level}</p>
            <div className="space-y-2">
              {tier.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className={`w-4 h-4 text-${tier.color}-400`} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Benefits Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Increased Rakeback</h3>
          <p className="text-slate-400 text-sm">
            Earn up to 20% rakeback on every bet you place. The higher your level, the more you earn back.
          </p>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
            <Gift className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Exclusive Bonuses</h3>
          <p className="text-slate-400 text-sm">
            Receive special level-up bonuses, birthday rewards, and exclusive promotional offers.
          </p>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Priority Support</h3>
          <p className="text-slate-400 text-sm">
            Get faster response times and dedicated VIP managers to assist you 24/7.
          </p>
        </Card>
      </div>

      {/* How to Level Up */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">How to Level Up</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Play Games', description: 'Earn XP by playing any game', xp: '1 XP per $10 wagered' },
            { title: 'Make Deposits', description: 'Get bonus XP on deposits', xp: '50 XP per deposit' },
            { title: 'Complete Challenges', description: 'Special XP boost events', xp: 'Up to 500 XP' },
            { title: 'Refer Friends', description: 'Invite friends to join', xp: '200 XP per referral' },
          ].map((method, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="font-bold text-white mb-1">{method.title}</h3>
              <p className="text-slate-400 text-sm mb-2">{method.description}</p>
              <p className="text-emerald-400 text-sm font-bold">{method.xp}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* VIP Perks Table */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Complete Benefits Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-300 font-medium py-3 px-4">Benefit</th>
                <th className="text-center text-orange-400 font-bold py-3 px-4">Bronze</th>
                <th className="text-center text-slate-300 font-bold py-3 px-4">Silver</th>
                <th className="text-center text-yellow-400 font-bold py-3 px-4">Gold</th>
                <th className="text-center text-blue-400 font-bold py-3 px-4">Diamond</th>
              </tr>
            </thead>
            <tbody>
              {[
                { benefit: 'Rakeback', bronze: '5%', silver: '10%', gold: '15%', diamond: '20%' },
                { benefit: 'Level Bonus', bronze: '$50', silver: '$200', gold: '$1,000', diamond: '$5,000' },
                { benefit: 'Weekly Cashback', bronze: '-', silver: '5%', gold: '10%', diamond: '15%' },
                { benefit: 'Withdrawal Speed', bronze: 'Standard', silver: 'Fast', gold: 'Priority', diamond: 'Instant' },
                { benefit: 'Support', bronze: 'Basic', silver: 'Priority', gold: 'VIP Manager', diamond: 'Personal Host' },
                { benefit: 'Monthly Bonus', bronze: '-', silver: '$50', gold: '$250', diamond: '$1,000' },
              ].map((row, index) => (
                <tr key={index} className="border-b border-slate-700/50 last:border-0">
                  <td className="text-slate-300 py-3 px-4">{row.benefit}</td>
                  <td className="text-center text-white py-3 px-4">{row.bronze}</td>
                  <td className="text-center text-white py-3 px-4">{row.silver}</td>
                  <td className="text-center text-white py-3 px-4">{row.gold}</td>
                  <td className="text-center text-white py-3 px-4">{row.diamond}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
