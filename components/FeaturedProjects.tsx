import React from 'react';

interface Project {
  name: string;
  result: string;
}

const projects: Project[] = [
  { name: 'E-Commerce Boost', result: '150% increase in online sales' },
  { name: 'ERP Efficiency', result: '30% reduction in operational costs' },
  { name: 'CRM Success', result: '40% improvement in customer retention' },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
              <p className="text-green-600 font-bold">{project.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;