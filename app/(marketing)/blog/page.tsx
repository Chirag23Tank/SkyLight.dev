import { Metadata } from 'next'
import { Calendar, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest articles and insights from Arisotech',
}

// Mock blog posts - you can replace this with actual blog data later
const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and React Server Components.',
    date: new Date('2024-01-15'),
    readTime: '5 min read',
    category: 'Web Development',
  },
  {
    id: '2',
    title: 'React Native Best Practices',
    excerpt: 'Tips and tricks for building performant mobile applications with React Native.',
    date: new Date('2024-01-10'),
    readTime: '7 min read',
    category: 'Mobile Development',
  },
  {
    id: '3',
    title: 'Modern Networking Solutions',
    excerpt: 'Explore the latest trends in cloud networking and infrastructure design.',
    date: new Date('2024-01-05'),
    readTime: '6 min read',
    category: 'Networking',
  },
]

export default function BlogPage() {
  return (
    <div className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Insights, tutorials, and updates from our team
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {format(post.date, 'MMM d, yyyy')}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {post.category}
                </span>
                <CardTitle className="mt-2">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Read more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            More articles coming soon. Check back regularly for updates!
          </p>
        </div>
      </div>
    </div>
  )
}

