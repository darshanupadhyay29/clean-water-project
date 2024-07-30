import React from 'react';

const GovernmentSchemes = () => {
  // Static data for government schemes with detailed descriptions and original links
  const schemes = [
    {
      title: "Clean Water for All",
      description: "This comprehensive national program aims to provide access to clean and safe drinking water for every household across both rural and urban areas. It includes the installation of modern water filtration systems, the construction of new water supply infrastructure, and regular maintenance of existing facilities to ensure sustainability.",
      impact: "Over 50 million households have been provided with clean drinking water, reducing waterborne diseases by 30% in targeted regions.",
      link: "https://www.india.gov.in/clean-water-for-all"
    },
    {
      title: "Sanitation Improvement Initiative",
      description: "An initiative designed to enhance sanitation facilities by building public toilets, improving waste management systems, and promoting hygiene education. This program focuses on underserved communities and aims to significantly reduce open defecation and improve overall public health standards.",
      impact: "The initiative has led to the construction of over 100,000 public toilets and improved sanitation conditions for more than 25 million people.",
      link: "https://www.india.gov.in/sanitation-improvement-initiative"
    },
    {
      title: "Water Quality Monitoring Program",
      description: "A program dedicated to monitoring and improving the quality of water sources through regular testing, analysis, and maintenance. It involves setting up water quality testing laboratories, training local personnel, and implementing corrective measures to address contamination issues.",
      impact: "The program has enhanced water quality monitoring in over 2,000 locations, resulting in a 20% increase in the detection and management of waterborne contaminants.",
      link: "https://www.india.gov.in/water-quality-monitoring-program"
    },
    {
      title: "Rainwater Harvesting Support",
      description: "Support for the installation of rainwater harvesting systems aimed at enhancing water availability and reducing dependence on traditional water sources. The program offers financial assistance, technical guidance, and educational resources to encourage the adoption of rainwater harvesting practices in both residential and commercial settings.",
      impact: "More than 10,000 rainwater harvesting systems have been installed, helping to conserve over 5 billion liters of water annually and improve water supply resilience in drought-prone areas.",
      link: "https://www.india.gov.in/rainwater-harvesting-support"
    }
  ];

  return (
    <div className="container mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-600">Government Schemes</h1>
      <ul className="space-y-6">
        {schemes.map((scheme, index) => (
          <li key={index} className="p-6 border rounded-lg shadow-sm bg-gray-50">
            <h2 className="text-2xl font-semibold text-teal-600 mb-2">{scheme.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{scheme.description}</p>
            <p className="text-md text-gray-600 mb-4"><strong>Impact:</strong> {scheme.impact}</p>
            <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">
              Learn More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GovernmentSchemes;
