import { notFound } from 'next/navigation'

export default function Service({ params }: { params: { service: string } }) {
  // You can add logic here to fetch data based on the service parameter
  const service = params.service

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">{service}</h1>
      <p>Detailed information about {service} will be displayed here.</p>
    </div>
  )
}
