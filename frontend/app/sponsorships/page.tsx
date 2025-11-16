import { Trophy, Users, Globe, Target, Star, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SponsorshipsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/40 via-teal-900/40 to-emerald-900/40 rounded-lg p-8 border border-slate-700/50">
        <h1 className="text-3xl font-bold text-white mb-2">Sponsorships & Partnerships</h1>
        <p className="text-slate-300">We proudly support sports teams, esports organizations, and gaming communities worldwide.</p>
      </div>

      {/* Main Sponsorship Hero */}
      <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto">
            <img
              src="/three-soccer-players-in-teal-jerseys.jpg"
              alt="Sponsored Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold">
              Official Partner
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Werder Bremen Partnership</h2>
            </div>
            <p className="text-slate-300 mb-6">
              We're proud to be an official partner of Werder Bremen, one of Germany's most historic football clubs. 
              Our partnership brings exciting opportunities for fans and players alike, combining the thrill of sports 
              with the excitement of gaming.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-emerald-400 font-bold text-2xl">Since 2023</p>
                <p className="text-slate-400 text-sm">Partnership Duration</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold text-2xl">50M+</p>
                <p className="text-slate-400 text-sm">Fans Reached</p>
              </div>
            </div>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white w-fit">
              Learn More
            </Button>
          </div>
        </div>
      </Card>

      {/* Partnership Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Trophy,
            title: 'Sports Teams',
            description: 'Official partnerships with football, basketball, and other professional sports organizations.',
            count: '15+ Teams',
            color: 'emerald',
          },
          {
            icon: Target,
            title: 'Esports',
            description: 'Sponsoring top esports teams and tournaments in CS:GO, Dota 2, and League of Legends.',
            count: '8 Organizations',
            color: 'purple',
          },
          {
            icon: Users,
            title: 'Content Creators',
            description: 'Supporting streamers and content creators who entertain millions of gaming fans.',
            count: '50+ Creators',
            color: 'blue',
          },
        ].map((category, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50 p-6">
            <div className={`w-12 h-12 rounded-lg bg-${category.color}-500/20 flex items-center justify-center mb-4`}>
              <category.icon className={`w-6 h-6 text-${category.color}-400`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{category.description}</p>
            <p className={`text-${category.color}-400 font-bold`}>{category.count}</p>
          </Card>
        ))}
      </div>

      {/* Featured Partnerships */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Partnerships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'Team Liquid',
              category: 'Esports',
              description: 'One of the world\'s premier esports organizations competing across multiple titles.',
              logo: '/placeholder.svg?height=80&width=80',
            },
            {
              name: 'Premier League',
              category: 'Sports',
              description: 'Official betting partner for select Premier League clubs and events.',
              logo: '/placeholder.svg?height=80&width=80',
            },
            {
              name: 'Global Gaming Expo',
              category: 'Events',
              description: 'Platinum sponsor of the world\'s largest gaming industry trade show.',
              logo: '/placeholder.svg?height=80&width=80',
            },
            {
              name: 'CS:GO Major',
              category: 'Tournaments',
              description: 'Official partner of Counter-Strike: Global Offensive Major Championships.',
              logo: '/placeholder.svg?height=80&width=80',
            },
          ].map((partner, index) => (
            <div key={index} className="flex gap-4 p-4 bg-slate-900/50 rounded-lg">
              <div className="w-20 h-20 rounded-lg bg-slate-700 flex items-center justify-center flex-shrink-0">
                <Star className="w-10 h-10 text-slate-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-white">{partner.name}</h3>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">
                    {partner.category}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Partnership Benefits */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Why Partner With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Global Reach',
              description: 'Access to 500,000+ active players across 150+ countries worldwide.',
            },
            {
              title: 'Brand Exposure',
              description: 'Multi-channel marketing campaigns reaching millions of gaming enthusiasts.',
            },
            {
              title: 'Financial Support',
              description: 'Competitive sponsorship packages tailored to your organization\'s needs.',
            },
            {
              title: 'Community Engagement',
              description: 'Joint events, promotions, and content that connect with passionate fans.',
            },
            {
              title: 'Long-term Commitment',
              description: 'We build lasting relationships, not just one-time sponsorship deals.',
            },
            {
              title: 'Industry Expertise',
              description: 'Years of experience in gaming and sports marketing partnerships.',
            },
          ].map((benefit, index) => (
            <div key={index} className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: '$50M+', label: 'Annual Investment' },
          { value: '23', label: 'Active Partnerships' },
          { value: '100M+', label: 'People Reached' },
          { value: '15', label: 'Countries' },
        ].map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50 p-6 text-center">
            <p className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</p>
            <p className="text-slate-400 text-sm">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Contact CTA */}
      <Card className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-emerald-500/30 p-8 text-center">
        <Globe className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-3">Interested in Partnership?</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          We're always looking for new opportunities to partner with exceptional teams, organizations, and creators. 
          Let's discuss how we can work together to create something amazing.
        </p>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-6">
          Contact Partnership Team
        </Button>
      </Card>
    </div>
  )
}
