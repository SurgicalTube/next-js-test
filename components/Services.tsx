import React from 'react';
import Link from 'next/link';

interface Service {
  name: string;
  description: string;
}

const services: Service[] = [
  { name: 'E-Commerce Platforms', description: 'Build and optimize your online store for maximum conversions.' },
  { name: 'ERP System Implementation', description: 'Streamline your business processes with integrated ERP solutions.' },
  { name: 'CRM Integration', description: 'Enhance customer relationships with powerful CRM tools.' },
  { name: 'Accounting Software Integration', description: 'Simplify financial management with tailored accounting solutions.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
              <p className="mb-4">{service.description}</p>
              <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <span className="text-blue-500 hover:underline">Learn more</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
