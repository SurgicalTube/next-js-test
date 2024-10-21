import React from 'react';

interface Testimonial {
  name: string;
  company: string;
  text: string;
}

const testimonials: Testimonial[] = [
  { name: 'John Doe', company: 'Tech Co', text: 'Basher Technology Group transformed our e-commerce platform, resulting in a significant boost in sales.' },
  { name: 'Jane Smith', company: 'Manufacturing Inc', text: 'The ERP implementation by Basher Technology Group streamlined our operations beyond our expectations.' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;