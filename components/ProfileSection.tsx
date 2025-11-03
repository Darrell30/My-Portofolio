import Image from 'next/image';
import React from 'react';

const ProfileSection: React.FC = () => {
  const spesialisasi = "Frontend Developer & UI Enthusiast"; 

  return (
    <section id="profile" className="section-padding"> 
      <div className="container py-lg-5">
        
        <div className={`row align-items-center justify-content-center ${'profile-card'}`}>
          
          <div className="col-lg-4 col-md-5 text-center mb-4 mb-md-0">
            
            <div 
              style={{ width: '200px', height: '200px', position: 'relative' }} 
              className="mx-auto" 
            >
              <Image
                src="/img/pfp.jpg" 
                alt="Foto Profil Darrell Adrianne Cahyadi"
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
                className={`rounded-circle ${'profile-image-border'}`} 
              />
            </div>
          </div>
          
          <div className="col-lg-8 col-md-7 pt-4 pb-3"> 
            
          <h1 className="display-4 fw-bold mb-3 text-dark"> 
              Hello, I'm <span className="text-primary">Darrell Adrianne Cahyadi</span>.
          </h1>
          
          <p className="lead text-dark mb-4">
              I am a UI/UX Developer, Mobile Apps Developer, and Full-Stack Developer.
          </p>
            

          <div className="mb-4">
              <a href="https://github.com/Darrell30" target="_blank" rel="noopener noreferrer" className="social-icon text-dark"> 
                  <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/darrell-adrianne-cahyadi-a09513307/" target="_blank" rel="noopener noreferrer" className="social-icon text-dark"> 
                  <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com/darrell_ac" target="_blank" rel="noopener noreferrer" className="social-icon text-dark"> 
                  <i className="bi bi-instagram"></i>
              </a>
              <a href="#facebook" target="_blank" rel="noopener noreferrer" className="social-icon text-dark"> 
                  <i className="bi bi-facebook"></i>
              </a>
          </div>


            <div className="d-flex flex-wrap">
              <a 
                href="https://github.com/Darrell30?tab=repositories" 
                className={`btn btn-lg me-3 mb-2 ${'btn-primary-custom'}`} 
                role="button"
              >
                My Projects
              </a>
              
              <a 
                href="https://wa.me/6287787245452" 
                className="btn btn-outline-secondary btn-lg mb-2" 
                role="button"
              >
                <i className="bi bi-envelope me-2"></i> Contact Me
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;