import { useState } from 'react'

const ponies = [
  {
    name: 'Twilight Sparkle',
    emoji: '🦄',
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300',
    description: 'Принцесса дружбы и ученица Селестии. Обожает книги и магию!',
    element: '✨ Магия',
    cutiemark: '⭐'
  },
  {
    name: 'Pinkie Pie',
    emoji: '🎀',
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-300',
    description: 'Самая весёлая пони в Эквестрии! Любит вечеринки и сладости.',
    element: '🎉 Смех',
    cutiemark: '🎈'
  },
  {
    name: 'Rainbow Dash',
    emoji: '🌈',
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-cyan-100',
    borderColor: 'border-cyan-300',
    description: 'Самая быстрая летунья! Мечтает вступить в Wonderbolts.',
    element: '💨 Верность',
    cutiemark: '⚡'
  },
  {
    name: 'Fluttershy',
    emoji: '🦋',
    color: 'from-yellow-300 to-amber-400',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
    description: 'Нежная и добрая пони. Заботится о всех животных в Эквестрии.',
    element: '🐾 Доброта',
    cutiemark: '🦋'
  },
  {
    name: 'Rarity',
    emoji: '💎',
    color: 'from-violet-400 to-purple-600',
    bgColor: 'bg-violet-100',
    borderColor: 'border-violet-300',
    description: 'Модельер и дизайнер. Создает самые красивые наряды!',
    element: '💫 Щедрость',
    cutiemark: '💎'
  },
  {
    name: 'Applejack',
    emoji: '🍎',
    color: 'from-orange-400 to-amber-500',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-300',
    description: 'Честная и трудолюбивая пони. Работает на яблочной ферме.',
    element: '🍏 Честность',
    cutiemark: '🍎'
  }
]

function Star({ style }: { style: React.CSSProperties }) {
  return (
    <div className="absolute text-yellow-300 animate-pulse" style={style}>
      ✦
    </div>
  )
}

function Heart({ style }: { style: React.CSSProperties }) {
  return (
    <div className="absolute text-pink-400 animate-bounce" style={style}>
      ♥
    </div>
  )
}

function Rainbow() {
  return (
    <div className="w-full h-3 flex overflow-hidden">
      <div className="flex-1 bg-red-400"></div>
      <div className="flex-1 bg-orange-400"></div>
      <div className="flex-1 bg-yellow-400"></div>
      <div className="flex-1 bg-green-400"></div>
      <div className="flex-1 bg-blue-400"></div>
      <div className="flex-1 bg-indigo-500"></div>
      <div className="flex-1 bg-purple-500"></div>
    </div>
  )
}

export default function App() {
  const [selectedPony, setSelectedPony] = useState<number | null>(null)
  const [sparkles, setSparkles] = useState(0)

  const handlePonyClick = (index: number) => {
    setSelectedPony(selectedPony === index ? null : index)
    setSparkles(prev => prev + 1)
  }

  const stars = Array.from({ length: 12 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    fontSize: `${Math.random() * 16 + 10}px`
  }))

  const hearts = Array.from({ length: 8 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2}s`,
    fontSize: `${Math.random() * 14 + 12}px`
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 via-pink-100 to-blue-200 relative overflow-hidden">
      {/* Декоративные элементы */}
      {stars.map((style, i) => (
        <Star key={`star-${i}`} style={style} />
      ))}
      {hearts.map((style, i) => (
        <Heart key={`heart-${i}`} style={style} />
      ))}

      {/* Радужная полоска сверху */}
      <Rainbow />

      {/* Хедер */}
      <header className="text-center py-12 px-4 relative">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-6xl animate-bounce">
          🦄
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mt-16 drop-shadow-lg">
          Моя Маленькая Пони
        </h1>
        <p className="text-xl md:text-2xl text-purple-600 mt-4 font-medium">
          ✨ Добро пожаловать в Эквестрию! ✨
        </p>
        <div className="mt-4 flex justify-center gap-2 text-3xl">
          <span className="animate-pulse">🌟</span>
          <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>💖</span>
          <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>🌈</span>
          <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>🦋</span>
          <span className="animate-pulse" style={{ animationDelay: '0.8s' }}>⭐</span>
        </div>
      </header>

      {/* Счётчик магии */}
      <div className="text-center mb-8">
        <div className="inline-block bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-200">
          <span className="text-purple-600 font-bold text-lg">
            ✨ Магическая энергия: {sparkles} ✨
          </span>
        </div>
      </div>

      {/* Секция персонажей */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-8">
          🏰 Наши пони 🏰
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ponies.map((pony, index) => (
            <div
              key={index}
              onClick={() => handlePonyClick(index)}
              className={`
                ${pony.bgColor} border-2 ${pony.borderColor}
                rounded-2xl p-6 cursor-pointer
                transform transition-all duration-300
                hover:scale-105 hover:shadow-xl
                ${selectedPony === index ? 'scale-105 shadow-2xl ring-4 ring-pink-300' : 'shadow-md'}
              `}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{pony.emoji}</div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${pony.color} bg-clip-text text-transparent`}>
                  {pony.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {pony.description}
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm bg-white/60 rounded-full px-3 py-1 font-medium">
                    {pony.element}
                  </span>
                  <span className="text-2xl">{pony.cutiemark}</span>
                </div>

                {selectedPony === index && (
                  <div className="mt-4 pt-4 border-t border-purple-200 animate-fade-in">
                    <p className="text-purple-600 text-sm font-medium">
                      💜 Ты выбрал(а) {pony.name}! 💜
                    </p>
                    <div className="flex justify-center gap-1 mt-2">
                      {['✨', '⭐', '💖', '⭐', '✨'].map((s, i) => (
                        <span key={i} className="text-lg animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Секция "Элементы гармонии" */}
      <section className="bg-white/50 backdrop-blur-sm py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
            💎 Элементы Гармонии 💎
          </h2>
          <p className="text-lg text-purple-600 mb-8">
            Шесть элементов, которые защищают Эквестрию от зла!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Доброта 🦋', 'Смех 🎈', 'Верность ⚡', 'Честность 🍎', 'Щедрость 💎', 'Магия ✨'].map((element, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl px-5 py-3 shadow-md border border-purple-200 transform hover:scale-110 transition-transform cursor-default"
              >
                <span className="font-bold text-purple-700">{element}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Цитата */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-pink-200">
            <div className="text-4xl mb-4">🌈</div>
            <blockquote className="text-xl md:text-2xl text-purple-700 font-medium italic">
              "Дружба — это чудо!"
            </blockquote>
            <p className="text-purple-500 mt-3">— Twilight Sparkle</p>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="text-center py-8 px-4">
        <div className="flex justify-center gap-3 text-2xl mb-4">
          <span>🦄</span>
          <span>🌈</span>
          <span>💖</span>
          <span>⭐</span>
          <span>🦋</span>
        </div>
        <p className="text-purple-600 font-medium">
          Сделано с 💜 для маленьких пони
        </p>
        <p className="text-purple-400 text-sm mt-2">
          Эквестрия • 2024 • Дружба это магия ✨
        </p>
      </footer>

      {/* Радужная полоска снизу */}
      <Rainbow />
    </div>
  )
}
