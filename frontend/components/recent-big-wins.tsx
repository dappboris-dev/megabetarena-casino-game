import Link from "next/link"

const wins = [
  { game: "THE DOG HOUSE", icon: "🐕", amount: "$1.259k", user: "Trai..." },
  { game: "DICE", icon: "🎲", amount: "$2.924k", user: "Seni..." },
  { game: "SUGAR RUSH", icon: "🍭", amount: "$1.748k", user: "Sami..." },
  { game: "GATES OF OLYMPUS", icon: "⚡", amount: "$2.500k", user: "albe..." },
  { game: "TOWER", icon: "🗼", amount: "$2.448k", user: "r239..." },
  { game: "COINFLIP", icon: "🎯", amount: "$2.267k", user: "Snak..." },
  { game: "CRASH", icon: "🚀", amount: "$2.361k", user: "twi..." },
  { game: "SWEET BONANZA 1000", icon: "🍬", amount: "$2.000k", user: "mate..." },
  { game: "GATES OF OLYMPUS", icon: "⚡", amount: "$1.841k", user: "legk..." },
  { game: "MINES", icon: "💎", amount: "$1.776k", user: "Subi..." },
  { game: "CRASH", icon: "🚀", amount: "$1.728k", user: "smil..." },
  { game: "SUGAR RUSH", icon: "🍭", amount: "$1.679k", user: "fyen..." },
  { game: "CRASH", icon: "🚀", amount: "$1.634k", user: "coo3..." },
  { game: "DICE", icon: "🎲", amount: "$1.580k", user: "Ukee..." }
]

export function RecentBigWins() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
        <h2 className="text-xl font-bold text-white">Recent Big Wins</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {wins.map((win, index) => (
          <Link
            key={index}
            href="#"
            className="flex-shrink-0 w-20 hover:scale-105 transition-transform"
          >
            <div className="bg-slate-800/60 rounded-lg p-2 aspect-square flex items-center justify-center text-3xl mb-2 border border-slate-700/50">
              {win.icon}
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-400 truncate mb-1">
              <span className="text-emerald-400">👤</span>
              <span>{win.user}</span>
            </div>
            <div className="text-sm font-bold text-emerald-400">{win.amount}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
