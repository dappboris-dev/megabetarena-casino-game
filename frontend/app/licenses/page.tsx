import { Shield, CheckCircle2, FileText, Lock, Award, Globe } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function LicensesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 rounded-lg p-8 border border-blue-500/30">
        <div className="flex items-center gap-4 mb-3">
          <Shield className="w-10 h-10 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Licenses & Security</h1>
        </div>
        <p className="text-slate-300">Your trust and security are our highest priorities. We maintain the highest standards of licensing and regulation.</p>
      </div>

      {/* Trust Badge */}
      <Card className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border-emerald-500/30 p-8 text-center">
        <Award className="w-20 h-20 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Fully Licensed & Regulated</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          MegaBetArena operates under strict gaming licenses and is regularly audited to ensure fair play, 
          secure transactions, and responsible gaming practices.
        </p>
      </Card>

      {/* Licenses */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Our Gaming Licenses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              authority: 'Curacao eGaming',
              license: 'License #1668/JAZ',
              region: 'International',
              issued: '2020',
              description: 'Full gaming license covering casino games, sports betting, and live dealer operations.',
            },
            {
              authority: 'Malta Gaming Authority',
              license: 'MGA/B2C/123/2020',
              region: 'European Union',
              issued: '2021',
              description: 'Prestigious EU license ensuring compliance with the highest regulatory standards.',
            },
            {
              authority: 'UK Gambling Commission',
              license: 'License #39487',
              region: 'United Kingdom',
              issued: '2021',
              description: 'Authorization to offer gambling services to customers in the United Kingdom.',
            },
            {
              authority: 'Gibraltar Regulatory Authority',
              license: 'RGL License #075',
              region: 'Gibraltar',
              issued: '2022',
              description: 'Remote gambling license for B2C gaming operations in regulated jurisdictions.',
            },
          ].map((license, index) => (
            <div key={index} className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{license.authority}</h3>
                    <p className="text-blue-400 text-sm font-mono">{license.license}</p>
                  </div>
                </div>
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Region</span>
                  <span className="text-white font-medium">{license.region}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Issued</span>
                  <span className="text-white font-medium">{license.issued}</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm">{license.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Security Measures */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Security Measures</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Lock,
              title: 'SSL Encryption',
              description: '256-bit SSL encryption protects all data transmission between your device and our servers.',
            },
            {
              icon: Shield,
              title: 'Data Protection',
              description: 'GDPR compliant with strict data protection policies and regular security audits.',
            },
            {
              icon: CheckCircle2,
              title: 'Secure Payments',
              description: 'PCI DSS Level 1 certified payment processing with multiple secure payment options.',
            },
          ].map((measure, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <measure.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-bold text-white mb-2">{measure.title}</h3>
              <p className="text-slate-400 text-sm">{measure.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Fair Gaming */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Fair Gaming Certification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-white mb-4">Independent Testing</h3>
            <div className="space-y-4">
              {[
                { name: 'eCOGRA', description: 'Certified for fair gaming and player protection' },
                { name: 'iTech Labs', description: 'RNG certification and game testing' },
                { name: 'GLI', description: 'Gaming Laboratories International certified' },
                { name: 'BMM Testlabs', description: 'Independent gaming testing and certification' },
              ].map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">{cert.name}</p>
                    <p className="text-slate-400 text-sm">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Our Commitments</h3>
            <div className="space-y-3">
              {[
                'All games use certified Random Number Generators (RNG)',
                'Regular third-party audits of game fairness',
                'Published payout percentages for all games',
                'Transparent terms and conditions',
                'Quick and fair dispute resolution process',
                'Responsible gaming tools and limits',
              ].map((commitment, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Responsible Gaming */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Responsible Gaming</h2>
        <p className="text-slate-300 mb-6">
          We are committed to promoting responsible gaming and preventing problem gambling. 
          We provide tools and resources to help you stay in control of your gaming.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Deposit Limits', description: 'Set daily, weekly, or monthly limits' },
            { title: 'Time Reminders', description: 'Get notified of gaming session length' },
            { title: 'Self-Exclusion', description: 'Take a break when you need it' },
            { title: 'Reality Checks', description: 'Regular prompts about gaming activity' },
          ].map((tool, index) => (
            <div key={index} className="p-4 bg-slate-900/50 rounded-lg text-center">
              <p className="text-white font-bold mb-2">{tool.title}</p>
              <p className="text-slate-400 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Support Organizations */}
      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Support Organizations</h2>
        <p className="text-slate-300 mb-6">
          If you or someone you know needs help with problem gambling, these organizations provide free, 
          confidential support:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'GamCare', contact: 'www.gamcare.org.uk' },
            { name: 'Gamblers Anonymous', contact: 'www.gamblersanonymous.org' },
            { name: 'BeGambleAware', contact: 'www.begambleaware.org' },
          ].map((org, index) => (
            <div key={index} className="p-4 bg-slate-900/50 rounded-lg">
              <p className="text-white font-bold mb-1">{org.name}</p>
              <p className="text-blue-400 text-sm">{org.contact}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Compliance */}
      <Card className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-blue-500/30 p-6">
        <div className="flex items-start gap-4">
          <Globe className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">International Compliance</h3>
            <p className="text-slate-300 text-sm">
              MegaBetArena complies with international anti-money laundering (AML) regulations, 
              know-your-customer (KYC) requirements, and data protection laws including GDPR. 
              We work closely with regulatory authorities to maintain the highest standards of compliance and player protection.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
