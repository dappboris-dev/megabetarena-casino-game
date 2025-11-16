import { Gift, CreditCard } from 'lucide-react'

export function PromoCards() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="relative bg-gradient-to-r from-blue-900/40 to-blue-800/30 rounded-xl p-6 overflow-hidden">
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          EXCLUSIVE
        </div>
        <div className="flex items-center gap-4">
          <div className="text-5xl">🎁</div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Your Free Rewards Awaits!</h3>
            <p className="text-sm text-muted-foreground">Exclusive limited welcome reward for you</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent/30 to-purple-900/30 rounded-xl p-6 flex items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 bg-accent/20 rounded-xl">
          <CreditCard className="w-8 h-8 text-accent-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1">No crypto? No problem!</h3>
          <p className="text-sm text-muted-foreground">Deposit swiftly from your bank card</p>
        </div>
        <div className="flex gap-2">
          <div className="text-2xl">💳</div>
          <div className="text-2xl">📱</div>
        </div>
      </div>
    </div>
  )
}
