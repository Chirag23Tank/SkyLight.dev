
interface Stat {
  value: string
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { value: '20+', label: 'Projects Completed' },
  { value: '25+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2 sm:text-5xl">
                {stat.value}
              </div>
              <div className="text-blue-100 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

