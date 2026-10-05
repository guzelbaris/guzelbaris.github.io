import { useState } from "react";
import { about, profile } from "../data/profile";

export function About() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="about"
      className="content-section about-section"
      aria-labelledby="about-title"
    >
      <p className="eyebrow">01 / About me</p>

      <div className="about-layout">
        <div className="about-portrait">
          <div className="portrait-frame">
            {photoFailed ? (
              <div className="portrait-placeholder">
                <span>BG</span>
                <p>Baris Guzel</p>
              </div>
            ) : (
              <img
                src={`${import.meta.env.BASE_URL}images/baris.jpg`}
                alt="Portrait of Baris Guzel"
                className="portrait-image"
                loading="lazy"
                onError={() => setPhotoFailed(true)}
              />
            )}

            <div className="portrait-caption">
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
            </div>
          </div>

          <div className="portrait-location">
            <span aria-hidden="true">◎</span>
            Based in Sheffield, UK
          </div>

          <div className="impact-card">
            <span className="impact-number">20×</span>

            <div>
              <strong>Rendering performance</strong>
              <p>
                Improved industrial visualisation from 5 to 100 FPS.
              </p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <h2 id="about-title">
            {about.headline}
            <br />
            <span>{about.headlineAccent}</span>
          </h2>

          <div className="about-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-technologies">
            {about.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <a
            className="about-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            More about my journey on LinkedIn
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="expertise-grid">
        <article className="expertise-card">
          <span className="expertise-index">01 / DESIGN & WEB</span>
          <h3>Modern digital experiences.</h3>
          <p>
            Thoughtful UI/UX and responsive websites built with React
            and TypeScript.
          </p>
        </article>

        <article className="expertise-card">
          <span className="expertise-index">02 / INDUSTRIAL SOFTWARE</span>
          <h3>Engineering beyond the browser.</h3>
          <p>
            C#/.NET desktop applications, hardware integration, and
            CAD/CAM workflows.
          </p>
        </article>

        <article className="expertise-card">
          <span className="expertise-index">03 / REAL-TIME SYSTEMS</span>
          <h3>When responsiveness matters.</h3>
          <p>
            Data acquisition, live visualisation, and performance
            optimisation for demanding applications.
          </p>
        </article>
      </div>

      <div className="beyond-code">
        <div className="beyond-heading">
          <p className="eyebrow">Beyond the code</p>
          <h3>Curiosity doesn’t stop at the keyboard.</h3>
        </div>

        <div className="interests-grid">
          {about.interests.map((interest) => (
            <article className="interest-card" key={interest.title}>
              <span className="interest-symbol" aria-hidden="true">
                {interest.symbol}
              </span>

              <h4>{interest.title}</h4>
              <p>{interest.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}