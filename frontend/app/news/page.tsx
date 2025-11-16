import { Newspaper, Calendar, TrendingUp, Award, Zap, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function NewsPage() {
  const newsItems = [
    {
      category: 'Game Release',
      date: 'March 14, 2024',
      title: '50 New Slot Games Added to Our Collection',
      excerpt: 'Discover the latest slot games from top providers including Pragmatic Play, NetEnt, and Evolution Gaming.',
      image: '/colorful-slot-machine-with-neon-lights-and-woman-h.jpg',
      icon: Zap,
      badgeClass: 'bg-purple-500/90',
    },
    {
      category: 'Tournament',
      date: 'March 13, 2024',
      title: '$100,000 Mega Slots Tournament Starts Next Week',
      excerpt: 'Join our biggest slot tournament of the year with a massive prize pool and exclusive rewards.',
      image: '/placeholder.svg?height=300&width=400&text=Tournament',
      icon: Award,
      badgeClass: 'bg-yellow-500/90',
    },
    {
      category: 'Update',
      date: 'March 12, 2024',
      title: 'Mobile App 2.0 Released with Enhanced Features',
      excerpt: 'Experience faster loading times, improved navigation, and new live casino features in our latest update.',
      image: '/placeholder.svg?height=300&width=400&text=Mobile+Update',
      icon: TrendingUp,
      badgeClass: 'bg-blue-500/90',
    },
    {
      category: 'Partnership',
      date: 'March 10, 2024',
      title: 'Werder Bremen Partnership Extended for 3 More Years',
      excerpt: 'We\'re proud to continue our official partnership with Werder Bremen through the 2027 season.',
      image: '/three-soccer-players-in-teal-jerseys.jpg',
      icon: Users,
      badgeClass: 'bg-emerald-500/90',
    },
    {
      category: 'Promotion',
      date: 'March 8, 2024',
      title: 'Weekend Reload Bonus Now Permanent',
      excerpt: 'Due to popular demand, our 50% weekend reload bonus is now available every weekend permanently.',
      image: '/placeholder.svg?height=300&width=400&text=Promotion',
      icon: TrendingUp,
      badgeClass: 'bg-orange-500/90',
    },
    {
      category: 'Update',
      date: 'March 5, 2024',
      title: 'New Payment Methods Added: Apple Pay & Google Pay',
      excerpt: 'Deposit and withdraw instantly using Apple Pay and Google Pay with no fees.',
      image: '/placeholder.svg?height=300&width=400&text=Payments',
      icon: Zap,
      badgeClass: 'bg-pink-500/90',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-900/40 via-red-900/40 to-pink-900/40 rounded-lg p-8 border border-slate-700/50">
        <div className="flex items-center gap-3 mb-3">
          <Newspaper className="w-10 h-10 text-orange-400" />
          <h1 className="text-3xl font-bold text-white">Latest News</h1>
        </div>
        <p className="text-slate-300">Stay updated with the latest announcements, game releases, and platform updates.</p>
      </div>

      {/* Featured News */}
      <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto">
            <img
              src="/placeholder.svg?height=400&width=600&text=Featured+News"
              alt="Featured News"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm">
              BREAKING NEWS
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2024</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              MegaBetArena Launches Revolutionary New VIP Program
            </h2>
            <p className="text-slate-300 mb-6">
              We are excited to announce our completely redesigned VIP program with increased rakeback up to 20%, 
              exclusive tournaments, and personal VIP managers for Diamond members. This is the biggest update 
              to our rewards system since launch.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit">
              Read Full Article
            </Button>
          </div>
        </div>
      </Card>

      {/* News Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'All News', count: 247, icon: Newspaper, active: true },
          { label: 'Game Releases', count: 89, icon: Zap, active: false },
          { label: 'Updates', count: 124, icon: TrendingUp, active: false },
          { label: 'Tournaments', count: 34, icon: Award, active: false },
        ].map((category, index) => (
          <button
            key={index}
            className={`p-4 rounded-lg border-2 transition-colors text-left ${
              category.active
                ? 'bg-emerald-500/20 border-emerald-500'
                : 'bg-slate-800/50 border-slate-700 hover:border-emerald-500/50'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <category.icon className={`w-5 h-5 ${category.active ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span className={`font-bold ${category.active ? 'text-white' : 'text-slate-300'}`}>
                {category.count}
              </span>
            </div>
            <p className={`text-sm ${category.active ? 'text-emerald-400' : 'text-slate-400'}`}>{category.label}</p>
          </button>
        ))}
      </div>

      {/* Recent News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((news, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50 overflow-hidden hover:border-emerald-500/50 transition-colors group cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <img
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute top-4 left-4 px-3 py-1 ${news.badgeClass} text-white rounded-full text-xs font-bold uppercase flex items-center gap-1`}>
                <news.icon className="w-3 h-3" />
                {news.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                <Calendar className="w-3 h-3" />
                <span>{news.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {news.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{news.excerpt}</p>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white"
              >
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button
          variant="outline"
          className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-6"
        >
          Load More News
        </Button>
      </div>

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-emerald-500/30 p-8 text-center">
        <Newspaper className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-3">Never Miss an Update</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest news, game releases, and exclusive promotions delivered to your inbox.
        </p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500"
          />
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
            Subscribe
          </Button>
        </div>
      </Card>
    </div>
  )
}
