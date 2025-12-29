import { Metadata } from 'next'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import portfolioData from '@/content/portfolio.json'
import { PortfolioProject } from '@/types'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'View our portfolio of successful projects in web development, mobile apps, and networking',
}

export default function PortfolioPage() {
  const projects = portfolioData.projects as PortfolioProject[]
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order)

  const categories = ['all', 'web', 'mobile', 'networking', 'fullstack'] as const

  return (
    <div className="py-20 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our recent work and see how we've helped businesses succeed
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <Card key={project.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="text-blue-600 text-sm font-medium">Project Preview</div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <CardTitle className="mt-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {project.fullDescription && (
                  <p className="text-sm text-gray-600 mb-4">{project.fullDescription}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Interested in working with us? Let's discuss your next project.
          </p>
          <Link href="/contact">
            <Button size="lg">Start Your Project</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

