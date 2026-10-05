import { experiences } from "../data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="content-section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="experience-heading">
        <div>
          <p className="eyebrow">02 / Experience</p>

          <h2 id="experience-title">
            Building software.
            <br />
            <span>Growing through challenges.</span>
          </h2>
        </div>

        <p className="experience-intro">
          From industrial systems to real-time sports technology,
          each role has shaped how I approach engineering.
        </p>
      </div>

      <ol className="experience-timeline">
        {experiences.map((experience) => (
          <li
            className="experience-entry"
            key={`${experience.company}-${experience.role}`}
          >
            <div className="experience-date">
              <span>{experience.period}</span>

              {experience.current && (
                <span className="current-badge">
                  <span aria-hidden="true" />
                  Current role
                </span>
              )}
            </div>

            <article
              className={`experience-card${
                experience.current ? " experience-card-current" : ""
              }`}
            >
              <div className="experience-card-heading">
                <div>
                  <p className="experience-company">
                    {experience.company}
                  </p>

                  <h3>{experience.role}</h3>
                </div>

                <span className="experience-location">
                  {experience.location}
                </span>
              </div>

              <p className="experience-specialism">
                {experience.specialism}
              </p>

              <p className="experience-description">
                {experience.description}
              </p>

              {experience.highlights.length > 0 && (
                <ul className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              <div className="experience-technologies">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div className="education-card">
        <div className="education-symbol" aria-hidden="true">
          ↗
        </div>

        <div>
          <p className="eyebrow">Education / 2018 — 2023</p>
          <h3>Middle East Technical University</h3>
          <p>BSc in Electrical and Electronics Engineering</p>
        </div>
      </div>
    </section>
  );
}