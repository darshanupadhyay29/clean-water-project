import React from 'react';

const InfoSection = ({ title, content, image, statistics, actions }) => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          {image && <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-lg" />}
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">{title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">{content}</p>

          {/* Statistics */}
          {statistics && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Key Statistics</h3>
              <ul className="list-disc list-inside pl-5 text-gray-600">
                {statistics.map((stat, index) => (
                  <li key={index} className="mb-2">{stat}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          {actions && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">What You Can Do</h3>
              <ul className="list-disc list-inside pl-5 text-gray-600">
                {actions.map((action, index) => (
                  <li key={index} className="mb-2">{action}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
