'use client'

import { User, Lock, Settings, CreditCard, ArrowRight, Gift, DollarSign, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ProfilePage() {
  return (
    <div className="flex gap-6">
      {/* Left Sidebar */}
      <div className="w-80 flex-shrink-0 space-y-4">
        {/* User Card */}
        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <div className="flex items-center gap-3 mb-6">
            <img src="/diverse-user-avatars.png" alt="Avatar" className="w-12 h-12 rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">springers230...</p>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-700/50 text-white hover:bg-slate-700 transition-colors">
              <User className="w-5 h-5 text-slate-400" />
              <span>Profile</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700/50 text-slate-300 hover:text-white transition-colors">
              <CreditCard className="w-5 h-5 text-slate-400" />
              <span>Deposit</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700/50 text-slate-300 hover:text-white transition-colors">
              <CreditCard className="w-5 h-5 text-slate-400" />
              <span>Withdraw</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700/50 text-slate-300 hover:text-white transition-colors">
              <Gift className="w-5 h-5 text-slate-400" />
              <span>Bonuses</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700/50 text-slate-300 hover:text-white transition-colors">
              <Lock className="w-5 h-5 text-slate-400" />
              <span>Verification</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700/50 text-slate-300 hover:text-white transition-colors">
              <Settings className="w-5 h-5 text-slate-400" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700/50 text-slate-300 hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5 text-slate-400" />
              <span>Transactions</span>
            </button>
          </div>
        </Card>

        {/* Support Card */}
        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <h3 className="text-white font-semibold mb-2">Have a Question?</h3>
          <p className="text-slate-400 text-sm mb-4">Write us and our support team will help you</p>
          <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
            Support
          </Button>
        </Card>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl font-bold text-white">PROFILE</h1>

        {/* Top Section with Email, Balance, and Info Cards */}
        <div className="grid grid-cols-3 gap-6">
          {/* Email and Balance Card */}
          <Card className="col-span-2 bg-slate-800/50 border-slate-700/50 p-6">
            <div className="flex items-center gap-3 mb-6">
              <img src="/diverse-user-avatars.png" alt="Avatar" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-white font-medium">springers230@gmail.com</p>
              </div>
              <button className="ml-auto w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center">
                <Settings className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-slate-400 text-sm mb-1">Your Balance</p>
              <p className="text-white text-3xl font-bold">$306<span className="text-slate-500">.40</span></p>
            </div>

            <div className="flex gap-3">
              <Button className="bg-slate-700 hover:bg-slate-600 text-white">
                <CreditCard className="w-4 h-4 mr-2" />
                Deposit
              </Button>
              <Button className="bg-slate-700 hover:bg-slate-600 text-white">
                <CreditCard className="w-4 h-4 mr-2" />
                Withdraw
              </Button>
            </div>
          </Card>

          {/* KYC and Rakeback Cards */}
          <div className="space-y-4">
            <Card className="bg-slate-800/50 border-slate-700/50 p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-white font-medium mb-1 flex items-center gap-2">
                    KYC Verification <ChevronRight className="w-4 h-4" />
                  </p>
                  <p className="text-red-400 text-sm">Unverified</p>
                </div>
                <Lock className="w-12 h-12 text-slate-600" />
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-white font-medium mb-1 flex items-center gap-2">
                    Available Rakeback <ChevronRight className="w-4 h-4" />
                  </p>
                  <p className="text-emerald-400 text-lg font-bold">$0.01</p>
                </div>
                <DollarSign className="w-12 h-12 text-slate-600" />
              </div>
            </Card>
          </div>
        </div>

        {/* Active Bonuses */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Gift className="w-6 h-6 text-purple-400" />
            Active Bonuses
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Bonus Card */}
            <Card className="bg-slate-800/50 border-slate-700/50 p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <img src="/colorful-gift-box.png" alt="Bonus" className="w-20 h-20" />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-white font-bold text-sm">SPECIAL</p>
                    <p className="text-purple-400 font-bold text-xs">PROMOCODE</p>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">$300 Special Promocode</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Wager $300 on original games or slots to claim your reward. Once done, you can withdraw the promotional code amount and any winnings. <span className="text-teal-400 cursor-pointer">Read More</span>
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Bets Placed</span>
                      <span className="text-white font-medium">$10</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-[3%] bg-emerald-500 rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Need for Wagering</span>
                      <span className="text-white font-medium">$300</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* No Other Bonuses Card */}
            <Card className="bg-slate-800/50 border-slate-700/50 p-6 flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-white font-bold text-lg mb-2">You don't have any other active bonuses</h3>
              <p className="text-slate-400 text-sm mb-4">
                Explore other available promotions for you on the <span className="text-teal-400 cursor-pointer">Promotions page</span>
              </p>
              <Button className="bg-slate-700 hover:bg-slate-600 text-white">
                <Gift className="w-4 h-4 mr-2" />
                Check Promotions
              </Button>
            </Card>
          </div>
        </div>

        {/* Your Last Games */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 9a1 1 0 112 0v4a1 1 0 11-2 0V9zm2-3a1 1 0 110 2 1 1 0 010-2z" />
            </svg>
            Your Last Games
          </h2>

          <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left text-slate-400 font-medium px-6 py-4">Games</th>
                    <th className="text-left text-slate-400 font-medium px-6 py-4">Username</th>
                    <th className="text-left text-slate-400 font-medium px-6 py-4">Bet</th>
                    <th className="text-left text-slate-400 font-medium px-6 py-4">Winning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center text-white font-bold">C</div>
                        <span className="text-white">Crash</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">🏆</span>
                        <span className="text-white">sprin...</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white">$10<span className="text-slate-500">.00</span></td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">$15<span className="text-emerald-500/60">.40</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
