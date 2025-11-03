// components/RepoPreview.tsx

import React from 'react';

const GITHUB_USERNAME = 'Darrell30'; 

const SELECTED_REPOS = [
  'Food-Delivery-App', 
  'Ponti-Jaya-Motor', 
  'kampus.com', 
];

// Definisikan struktur data
interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
}

// Data fetching di Server Component
async function getSelectedRepos(): Promise<Repo[]> {
  const fetchPromises = SELECTED_REPOS.map(repoName => 
    fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, {
      // Revalidasi setiap 12 jam (43200 detik)
      next: { revalidate: 43200 }, 
    })
  );

  try {
    const responses = await Promise.all(fetchPromises);
    const validResponses = responses.filter(res => res.ok);

    if (validResponses.length === 0) {
      return [];
    }

    const reposData: Repo[] = await Promise.all(
      validResponses.map(res => res.json())
    );
    
    // Kembalikan hanya data yang valid dan berhasil di-fetch
    return reposData;

  } catch (error) {
    console.error("Failed to fetch selected repositories data:", error);
    return [];
  }
}

// Komponen Utama
export default async function RepoPreview() {
  const repos = await getSelectedRepos();

  if (repos.length === 0) {
    return (
      <section id="repo-preview" className="section-padding bg-light">
        <div className="container-custom text-center">
          <p className="text-muted">Failed to load repository.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="repo-preview" className="section-padding">
      <div className="container-custom">
        <h2 className="text-center display-5 fw-bold mb-5">
            <span className="text-primary">{repos.length}</span> Best Projects
        </h2>
        
        {/* Bootstrap Row untuk tata letak Grid */}
        <div className="row g-4 justify-content-center">
          
          {repos.map((repo) => (
            // Gunakan col-lg-4 agar 3 repo muat dalam satu baris di layar besar
            <div key={repo.id} className="col-lg-4 col-md-6">
              {/* Gunakan class kustom 'profile-card' pada setiap item repo */}
              <div className={`h-100 p-4 ${'profile-card'}`}> 
                
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h3 className="h5 text-primary fw-bold mb-0 me-3">{repo.name}</h3>
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`btn btn-sm ${'btn-primary-custom'} flex-shrink-0`} 
                    title="Lihat Repositori"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>

                <p className="text-muted small mb-3">
                  {repo.description || "Tidak ada deskripsi tersedia untuk repositori ini."}
                </p>
                
                <div className="d-flex justify-content-between align-items-center border-top pt-3">
                    <span className="small text-secondary">
                        <i className="bi bi-star-fill me-1"></i> {repo.stargazers_count}
                    </span>
                    <span className={`badge text-bg-info text-dark`}>
                        {repo.language || 'Unknown'}
                    </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}