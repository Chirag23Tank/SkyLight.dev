interface Client {
  name: string
  logo?: string
  placeholder?: string
}

// You can replace these with actual client logos
// To add real logos, update the logo path: { name: 'Client Name', logo: '/images/clients/client-logo.png' }
const clients: Client[] = [
  { name: 'TechCorp', placeholder: 'TechCorp' },
  { name: 'StartupHub', placeholder: 'StartupHub' },
  { name: 'Enterprise Solutions', placeholder: 'Enterprise Solutions' },
  { name: 'Digital Ventures', placeholder: 'Digital Ventures' },
]

export default function ClientLogos() {

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-600 mb-8">
          Trusted by leading companies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="text-gray-400 text-xs font-medium text-center">
                  {client.placeholder || client.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

