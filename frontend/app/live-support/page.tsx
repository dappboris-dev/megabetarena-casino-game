import { MessageCircle, Send, Clock, CheckCircle2, Phone, Mail } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function LiveSupportPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900/40 via-blue-900/40 to-purple-900/40 rounded-lg p-8 border border-slate-700/50">
        <h1 className="text-3xl font-bold text-white mb-2">Live Support</h1>
        <p className="text-slate-300">We're here to help 24/7. Get instant assistance from our support team.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Chat */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/50 border-slate-700/50 p-6 h-[600px] flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Support Chat</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm text-slate-400">Agent available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                  S
                </div>
                <div className="flex-1">
                  <div className="bg-slate-900/50 rounded-lg p-3 inline-block">
                    <p className="text-white">Hello! Welcome to MegaBetArena support. How can I assist you today?</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">2:30 PM</p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="flex-1 text-right">
                  <div className="bg-emerald-600 rounded-lg p-3 inline-block">
                    <p className="text-white">Hi, I need help with my withdrawal</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">2:31 PM</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  C
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                  S
                </div>
                <div className="flex-1">
                  <div className="bg-slate-900/50 rounded-lg p-3 inline-block">
                    <p className="text-white">I'd be happy to help you with your withdrawal. Could you please provide your transaction ID or describe the issue you're experiencing?</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">2:32 PM</p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="flex gap-3">
              <Input
                placeholder="Type your message..."
                className="flex-1 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Contact Info & FAQ */}
        <div className="space-y-6">
          {/* Quick Contact */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-slate-400 text-sm">support@megabetarena.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-slate-400 text-sm">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Hours</p>
                  <p className="text-slate-400 text-sm">24/7 Support</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Response Time */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Average Response Time</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Live Chat</span>
                <span className="text-emerald-400 font-bold">{'<'} 2 min</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Email</span>
                <span className="text-blue-400 font-bold">{'<'} 24 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Phone</span>
                <span className="text-purple-400 font-bold">{'<'} 5 min</span>
              </div>
            </div>
          </Card>

          {/* Submit Ticket */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Submit a Ticket</h3>
            <form className="space-y-4">
              <div>
                <label className="text-slate-400 text-sm mb-2 block">Subject</label>
                <Input
                  placeholder="Brief description"
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="text-slate-400 text-sm mb-2 block">Message</label>
                <Textarea
                  placeholder="Describe your issue..."
                  rows={4}
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                Submit Ticket
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
