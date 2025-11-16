import { Trophy, Users, Shield, Zap, Globe, Award, Heart, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-blue-900/40 rounded-lg p-8 border border-slate-700/50">
        <h1 className="text-3xl font-bold text-white mb-2">About MegaBetArena</h1>
        <p className="text-slate-300">Your premier destination for online gaming and entertainment since 2020.</p>
      </div>

      {/* Mission Statement */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            At MegaBetArena, we're committed to providing the most thrilling, fair, and secure gaming experience possible. 
            We combine cutting-edge technology with exceptional customer service to create a platform where every player 
            feels like a champion.
          </p>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Players', value: '500K+', icon: Users },
          { label: 'Games Available', value: '2,000+', icon: Zap },
          { label: 'Countries', value: '150+', icon: Globe },
          { label: 'Awards Won', value: '25+', icon: Award },
        ].map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50 p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
              <stat.icon className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-slate-400 text-sm">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Core Values */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Shield,
              title: 'Security First',
              description: 'Your safety is our top priority. We use bank-level encryption and the latest security protocols to protect your data and funds.',
            },
            {
              icon: Heart,
              title: 'Fair Play',
              description: 'All our games are certified and regularly audited for fairness. We believe in transparent and honest gaming.',
            },
            {
              icon: Target,
              title: 'Customer Focused',
              description: '24/7 customer support and a dedication to making your experience exceptional every time you play.',
            },
            {
              icon: Trophy,
              title: 'Innovation',
              description: 'We constantly evolve our platform with the latest games, features, and technology to keep you entertained.',
            },
          ].map((value, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <value.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Timeline */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Our Journey</h2>
        <div className="space-y-6">
          {[
            { year: '2020', title: 'Founded', description: 'MegaBetArena was born with a vision to revolutionize online gaming.' },
            { year: '2021', title: 'Global Expansion', description: 'Launched in over 50 countries with multilingual support.' },
            { year: '2022', title: 'Mobile App', description: 'Released our award-winning mobile application for iOS and Android.' },
            { year: '2023', title: 'VIP Program', description: 'Introduced our exclusive VIP Club with premium rewards.' },
            { year: '2024', title: '500K Players', description: 'Reached half a million active players worldwide.' },
          ].map((milestone, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                  {milestone.year}
                </div>
                {index < 4 && <div className="w-0.5 h-full bg-slate-700 mt-2" />}
              </div>
              <div className="flex-1 pb-6">
                <h3 className="text-lg font-bold text-white mb-1">{milestone.title}</h3>
                <p className="text-slate-400 text-sm">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Partners */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Official Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((partner) => (
            <div key={partner} className="aspect-video bg-slate-900/50 rounded-lg flex items-center justify-center">
              <img
                src={`/placeholder-partner.png?height=100&width=200&text=Partner ${partner}`}
                alt={`Partner ${partner}`}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Team Section */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'John Smith', role: 'CEO & Founder', image: '/placeholder.svg?height=200&width=200' },
            { name: 'Sarah Johnson', role: 'CTO', image: '/placeholder.svg?height=200&width=200' },
            { name: 'Michael Chen', role: 'Head of Gaming', image: '/placeholder.svg?height=200&width=200' },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-slate-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
