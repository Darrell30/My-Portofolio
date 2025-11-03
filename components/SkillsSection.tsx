import React from 'react';

const skillsData = [
  'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap 5',
  'Node.js', 'Express.js', 'MongoDB',
  'Git & GitHub', 'VS Code', 'Figma', 'REST API',
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom text-center">
        
        <h2 className="display-5 fw-bold mb-4" style={{ color: '#FFFFFF' }}> 
            My <span className="text-primary">Skills</span>
        </h2>
        <p className="lead" style={{ color: '#E0E0E0' }}> 
            Tools that I use frequently
        </p>
        
        <div className="d-flex flex-wrap justify-content-center">
          {skillsData.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default SkillsSection;