import { Banknote, Clock, CheckCircle2, AlertCircle, TrendingDown } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function WithdrawPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 rounded-lg p-8 border border-slate-700/50">
        <h1 className="text-3xl font-bold text-white mb-2">Withdraw Funds</h1>
        <p className="text-slate-300">Request a withdrawal of your winnings to your preferred payment method.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Withdrawal Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Available Balance */}
          <Card className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border-emerald-500/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 mb-1">Available Balance</p>
                <p className="text-4xl font-bold text-white">$306.40</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Banknote className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
          </Card>

          {/* Withdrawal Amount */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Withdrawal Amount</h2>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {['$50', '$100', '$200', 'All'].map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                >
                  {amount}
                </Button>
              ))}
            </div>
            <div>
              <label className="text-slate-400 text-sm mb-2 block">Enter Amount</label>
              <Input
                type="number"
                placeholder="0.00"
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 text-lg"
              />
              <p className="text-slate-500 text-sm mt-2">Minimum: $20 • Maximum: $10,000 per transaction</p>
            </div>
          </Card>

          {/* Withdrawal Methods */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h2 className="text-xl font-bold text-white mb-6">Select Withdrawal Method</h2>
            <div className="space-y-4">
              {/* Bank Account */}
              <button className="w-full p-4 bg-slate-900/50 border-2 border-slate-700 hover:border-blue-500 rounded-lg transition-colors text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Banknote className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Bank Account</p>
                      <p className="text-slate-400 text-sm">****1234 • Chase Bank</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold">1-3 days</p>
                    <p className="text-slate-400 text-sm">No fees</p>
                  </div>
                </div>
              </button>

              {/* Crypto Wallet */}
              <button className="w-full p-4 bg-slate-900/50 border-2 border-slate-700 hover:border-blue-500 rounded-lg transition-colors text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Cryptocurrency</p>
                      <p className="text-slate-400 text-sm">Bitcoin • 0x123...abc</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold">30-60 min</p>
                    <p className="text-slate-400 text-sm">Network fees</p>
                  </div>
                </div>
              </button>

              {/* E-Wallet */}
              <button className="w-full p-4 bg-slate-900/50 border-2 border-slate-700 hover:border-blue-500 rounded-lg transition-colors text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold">PayPal</p>
                      <p className="text-slate-400 text-sm">user@email.com</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold">Instant</p>
                    <p className="text-slate-400 text-sm">2% fee</p>
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-blue-300 text-sm font-medium mb-1">Verification Required</p>
                  <p className="text-slate-400 text-sm">
                    For withdrawals over $1,000, identity verification is required. This usually takes 24-48 hours.
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white text-lg py-6">
              Request Withdrawal
            </Button>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Processing Time */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Processing Times</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Crypto</span>
                <span className="text-emerald-400 font-bold">30-60 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">E-Wallet</span>
                <span className="text-emerald-400 font-bold">Instant</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Bank Transfer</span>
                <span className="text-blue-400 font-bold">1-3 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Credit Card</span>
                <span className="text-blue-400 font-bold">3-5 days</span>
              </div>
            </div>
          </Card>

          {/* Limits */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Withdrawal Limits</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Minimum</span>
                <span className="text-white font-bold">$20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Maximum</span>
                <span className="text-white font-bold">$10,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Daily Limit</span>
                <span className="text-white font-bold">$25,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Monthly Limit</span>
                <span className="text-white font-bold">$100,000</span>
              </div>
            </div>
          </Card>

          {/* Pending Withdrawals */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Pending Withdrawals</h3>
            <div className="space-y-3">
              <div className="p-3 bg-slate-900/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-bold">$150.00</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">
                    Processing
                  </span>
                </div>
                <p className="text-slate-400 text-sm">Bank Account • Requested 2 hours ago</p>
              </div>
            </div>
          </Card>

          {/* Withdrawal History */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Recent Withdrawals</h3>
            <div className="space-y-3">
              {[
                { amount: '$200.00', method: 'Crypto', status: 'Completed', time: '1 day ago' },
                { amount: '$500.00', method: 'Bank', status: 'Completed', time: '5 days ago' },
                { amount: '$100.00', method: 'PayPal', status: 'Completed', time: '1 week ago' },
              ].map((withdrawal, index) => (
                <div key={index} className="py-3 border-b border-slate-700/50 last:border-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-medium">{withdrawal.amount}</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">
                      {withdrawal.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">{withdrawal.method}</span>
                    <span className="text-slate-500 text-sm">{withdrawal.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
