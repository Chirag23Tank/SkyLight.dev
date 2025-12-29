import { Metadata } from 'next'
import { Linkedin, Twitter, Github, Mail, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import siteConfig from '@/content/site-config.json'
import teamData from '@/content/team.json'
import { TeamMember } from '@/types'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about SkyLight.dev and our team of experts',
}

export default function AboutPage() {
  const teamMembers = teamData.teamMembers as TeamMember[]
  const sortedTeam = [...teamMembers].sort((a, b) => a.order - b.order)

  return (
    <div className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About SkyLight.dev
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {siteConfig.description}
          </p>
        </div>

        {/* Mission Section */}
        <div className="mx-auto max-w-3xl mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At SkyLight.dev, we're passionate about helping businesses succeed through innovative technology solutions. 
            We believe that great software can transform businesses and create lasting value for our clients.
          </p>
        </div>

        {/* Values Section */}
        <div className="mx-auto max-w-3xl mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Stand For</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We deliver high-quality solutions that are built to last and scale with your business.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Client Focused</h3>
                <p className="text-gray-600">
                  Your success is our priority. We work closely with you to understand your needs and deliver results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We stay on top of the latest technologies and best practices to give you a competitive edge.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-gray-600">
                  Clear communication and honest feedback throughout the entire project lifecycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        {sortedTeam.length > 0 && (
          <div className="mx-auto max-w-3xl mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {sortedTeam.map((member) => (
                <Card key={member.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-blue-600 mb-2">{member.role}</p>
                        {member.bio && (
                          <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                        )}
                        <div className="flex gap-3">
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          )}
                          {member.github && (
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mx-auto max-w-3xl">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-blue-100 mb-6">
                Ready to start your next project? Get in touch with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    {siteConfig.email}
                  </a>
                )}
                {siteConfig.phone && (
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    {siteConfig.phone}
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

