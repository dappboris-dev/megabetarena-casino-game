export function GameCategories() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer">
        <img
          src="/colorful-slot-machine-with-neon-lights-and-woman-h.jpg"
          alt="Original Games"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">Original Games</h3>
          <p className="text-sm text-gray-300">Discover exciting gaming adventures and enjoy thrilling online games</p>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer">
        <img
          src="/slot-machine-numbers-and-mythical-character-illust.jpg"
          alt="Licensed Slots"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">Licensed Slots</h3>
          <p className="text-sm text-gray-300">Play licensed slots, get unforgettable experiences and big prizes</p>
        </div>
      </div>
    </div>
  )
}
