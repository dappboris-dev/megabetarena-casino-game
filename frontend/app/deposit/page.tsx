'use client'

import { useState } from 'react'
import { User, CreditCard, Wallet, Gift, Settings, FileText, HelpCircle, ChevronDown, Copy, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function DepositPage() {
  const [selectedMethod, setSelectedMethod] = useState<'crypto' | 'bank'>('bank')
  const [amount, setAmount] = useState('67')
  const [merchant, setMerchant] = useState('Transak')

  return (
    <div className="flex min-h-screen bg-[#0f1923]">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#1a2332] border-r border-slate-700/50 p-6 flex flex-col">
        {/* User Info */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">S2</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium truncate">springers230...</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-700/30 transition-colors">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          <Link href="/deposit" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-700/50 text-white">
            <CreditCard className="w-5 h-5" />
            <span>Deposit</span>
          </Link>
          <Link href="/withdraw" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-700/30 transition-colors">
            <Wallet className="w-5 h-5" />
            <span>Withdraw</span>
          </Link>
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-700/30 transition-colors">
            <Gift className="w-5 h-5" />
            <span>Bonuses</span>
          </Link>
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-700/30 transition-colors">
            <FileText className="w-5 h-5" />
            <span>Verification</span>
          </Link>
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-700/30 transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-700/30 transition-colors">
            <FileText className="w-5 h-5" />
            <span>Transactions</span>
          </Link>
        </nav>

        {/* Support Card */}
        <div className="mt-auto">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <p className="text-white font-medium mb-1">Have a Question?</p>
            <p className="text-slate-400 text-sm mb-4">Write us and our support team will help you</p>
            <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
              <HelpCircle className="w-4 h-4 mr-2" />
              Support
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-8">DEPOSIT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Deposit Form */}
          <div className="space-y-6">
            {/* Step 1: Select Deposit Method */}
            <div>
              <h2 className="text-white font-medium mb-4">1. Select a Deposit Method</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedMethod('crypto')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedMethod === 'crypto'
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  <p className="text-white font-medium mb-2">CRYPTO</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                    <div className="w-6 h-6 rounded-full bg-teal-500"></div>
                    <span className="text-slate-400 text-sm">30+</span>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedMethod('bank')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedMethod === 'bank'
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  <p className="text-white font-medium mb-2">BANK CARD</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-bold">V</div>
                    <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-white text-xs"></div>
                    <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-white text-xs">G</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Select Merchant */}
            <div>
              <h2 className="text-white font-medium mb-4">2. Select Merchant to Deposit</h2>
              <div className="relative">
                <select
                  value={merchant}
                  onChange={(e) => setMerchant(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white appearance-none cursor-pointer"
                >
                  <option>Transak</option>
                  <option>Moonpay</option>
                  <option>Ramp</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Step 3: Enter Amount */}
            <div>
              <h2 className="text-white font-medium mb-4">3. Enter Deposit Amount in Dollar</h2>
              <div className="relative">
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white pr-8"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Details */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-medium">Bank Card</h3>
                <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-medium rounded">Selected</span>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-medium mb-4">4. Make Payment to your BTC address</h4>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mb-4">
                  <p className="text-emerald-400 font-medium mb-2">Important!</p>
                  <p className="text-slate-300 text-sm">
                    To make a deposit using a bank card, copy the BTC address and click on the "Go" button. 
                    You will be redirected to our partner to process the payment. Your personal BTC address is used to deposit your account.
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <code className="text-white text-sm">bc1qnlx4ykt8dz29fth62k48j7yrgu9l03hux:</code>
                    <button className="text-slate-400 hover:text-white transition-colors">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 text-lg font-medium">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Go to Transak
                </Button>
              </div>

              <div className="space-y-3 text-sm">
                <p className="text-slate-400">
                  Once the funds are sent and the transaction is confirmed, your account balance will be credited automatically. 
                  To ensure successful processing, please do not send less than the minimum deposit, as such transactions cannot be located 
                  and may result in a loss of funds. Please also remember to account for the blockchain network fee.
                </p>
                <div className="flex justify-between">
                  <span className="text-slate-400">Minimum Deposit</span>
                  <span className="text-white">$50.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Network</span>
                  <span className="text-white">BTC</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Deposits History */}
        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Deposits History
            </h2>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              View all <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Currency</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Amount</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Date</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">More</th>
                </tr>
              </thead>
            </table>

            {/* Empty State */}
            <div className="text-center py-16">
              <p className="text-white font-medium mb-2">You do not have deposits</p>
              <p className="text-slate-400 mb-6">Let's do your first on the Deposit page.</p>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <CreditCard className="w-4 h-4 mr-2" />
                Deposit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
