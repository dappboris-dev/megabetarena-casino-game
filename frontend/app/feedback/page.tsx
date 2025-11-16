import { MessageSquare, ThumbsUp, Star, TrendingUp, AlertCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function FeedbackPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-teal-900/40 rounded-lg p-8 border border-slate-700/50">
        <h1 className="text-3xl font-bold text-white mb-2">Feedback About Us</h1>
        <p className="text-slate-300">Your feedback helps us improve. Share your thoughts, suggestions, and experiences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feedback Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h2 className="text-xl font-bold text-white mb-6">Share Your Feedback</h2>
            <form className="space-y-6">
              <div>
                <label className="text-slate-300 font-medium mb-2 block">Feedback Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Suggestion', 'Complaint', 'Praise', 'Bug Report'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className="px-4 py-3 bg-slate-900/50 border-2 border-slate-700 hover:border-emerald-500 rounded-lg text-slate-300 hover:text-white transition-colors text-sm font-medium"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-medium mb-2 block">Category</label>
                <select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white">
                  <option>Select a category</option>
                  <option>Games</option>
                  <option>Payments</option>
                  <option>Customer Support</option>
                  <option>Website/App</option>
                  <option>Bonuses & Promotions</option>
                  <option>VIP Program</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-slate-300 font-medium mb-2 block">Subject</label>
                <Input
                  placeholder="Brief summary of your feedback"
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-medium mb-2 block">Detailed Feedback</label>
                <Textarea
                  placeholder="Please provide as much detail as possible..."
                  rows={6}
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-medium mb-2 block">Rating (Optional)</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className="w-12 h-12 rounded-lg bg-slate-900/50 border-2 border-slate-700 hover:border-yellow-500 hover:bg-yellow-500/20 transition-colors flex items-center justify-center"
                    >
                      <Star className="w-6 h-6 text-slate-500 hover:text-yellow-400" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-blue-300 text-sm">
                  Your feedback is valuable to us. We review all submissions and will respond within 48 hours if you've requested a reply.
                </p>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-lg py-6">
                  Submit Feedback
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8"
                >
                  Clear
                </Button>
              </div>
            </form>
          </Card>

          {/* Recent Feedback */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h2 className="text-xl font-bold text-white mb-6">Community Feedback</h2>
            <div className="space-y-4">
              {[
                {
                  user: 'Player123',
                  type: 'Praise',
                  feedback: 'Love the new VIP program! The rakeback is amazing.',
                  rating: 5,
                  time: '2 hours ago',
                },
                {
                  user: 'GamerPro',
                  type: 'Suggestion',
                  feedback: 'Would be great to have more live dealer games.',
                  rating: 4,
                  time: '5 hours ago',
                },
                {
                  user: 'LuckyWinner',
                  type: 'Praise',
                  feedback: 'Fast withdrawals and excellent customer support!',
                  rating: 5,
                  time: '1 day ago',
                },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                        {item.user.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-white font-medium">{item.user}</p>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">
                            {item.type}
                          </span>
                          <span className="text-slate-500 text-xs">{item.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">{item.feedback}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          {/* Overall Rating */}
          <Card className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border-emerald-500/30 p-6 text-center">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-3 fill-yellow-400" />
            <p className="text-5xl font-bold text-white mb-2">4.8</p>
            <p className="text-slate-300 mb-4">Overall Rating</p>
            <p className="text-slate-400 text-sm">Based on 12,547 reviews</p>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Feedback Stats</h3>
            <div className="space-y-4">
              {[
                { label: 'Total Feedback', value: '15,234', icon: MessageSquare, color: 'blue' },
                { label: 'This Month', value: '1,847', icon: TrendingUp, color: 'emerald' },
                { label: 'Positive', value: '92%', icon: ThumbsUp, color: 'green' },
                { label: 'Avg Response', value: '4.2hrs', icon: AlertCircle, color: 'purple' },
              ].map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${stat.color}-500/20 flex items-center justify-center`}>
                      <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                    </div>
                    <span className="text-slate-400 text-sm">{stat.label}</span>
                  </div>
                  <span className="text-white font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Rating Distribution */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Rating Distribution</h3>
            <div className="space-y-3">
              {[
                { stars: 5, count: 9234, percentage: 74 },
                { stars: 4, count: 2145, percentage: 17 },
                { stars: 3, count: 687, percentage: 5 },
                { stars: 2, count: 312, percentage: 3 },
                { stars: 1, count: 156, percentage: 1 },
              ].map((rating) => (
                <div key={rating.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-white text-sm">{rating.stars}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                  <span className="text-slate-400 text-sm w-12 text-right">{rating.percentage}%</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Categories */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Top Feedback Topics</h3>
            <div className="space-y-2">
              {[
                { topic: 'Games', count: 3456 },
                { topic: 'Payments', count: 2847 },
                { topic: 'Support', count: 2134 },
                { topic: 'Bonuses', count: 1982 },
                { topic: 'Website', count: 1567 },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-slate-700/50 last:border-0">
                  <span className="text-slate-300">{item.topic}</span>
                  <span className="text-emerald-400 font-bold">{item.count}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
