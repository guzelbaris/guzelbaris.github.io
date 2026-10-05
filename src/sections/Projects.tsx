import { useState } from "react";
import { projects } from "../data/projects";
import type { Project, ProjectCategory } from "../data/projects";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "Robotics",
  "FPGA",
  "Electronics",
];

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual project-visual-${project.visual}`}
      aria-hidden="true"
    >
      <span className="project-visual-label">{project.category}</span>

      {project.visual === "sudoku" ? (
        <div className="sudoku-art">
          {[5, "", 3, "", 7, "", 1, "", 9].map((value, index) => (
            <span key={index}>{value}</span>
          ))}
        </div>
      ) : (
        <div className="project-emblem">
          {{
            restaurant: "T&T",
            barber: "S / S",
            robot: "◎ ↔ ◎",
            chip: "[ ▦ ]",
            signal: "∿",
          }[project.visual]}
        </div>
      )}

      <span className="project-visual-caption">
        {project.status === "Coming soon"
          ? "NEXT CHAPTER / IN THE MAKING"
          : "ENGINEERED / BUILT / TESTED"}
      </span>
    </div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<"All" | ProjectCategory>("All");

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "All" || project.category === activeFilter,
  );

  return (
    <section
      id="projects"
      className="content-section"
      aria-labelledby="projects-title"
    >
      <div className="projects-heading">
        <div>
          <p className="eyebrow">03 / Projects</p>

          <h2 id="projects-title">
            Ideas explored.
            <br />
            <span>Things engineered.</span>
          </h2>
        </div>

        <p>
          A collection of web concepts, robotic systems, and
          engineering projects — with more on the way.
        </p>
      </div>

      <div className="project-filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`project-filter${
              activeFilter === filter ? " active" : ""
            }`}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="project-count" role="status">
        {visibleProjects.length} projects · {activeFilter}
      </p>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <ProjectVisual project={project} />

            <div className="project-card-body">
              <span
                className={`project-status ${
                  project.status === "Coming soon"
                    ? "status-soon"
                    : "status-completed"
                }`}
              >
                <span aria-hidden="true" />
                {project.status}
              </span>

              <h3>{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>

              {project.award && (
                <p className="project-award">
                  <span aria-hidden="true">✦</span>
                  {project.award}
                </p>
              )}

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <details className="project-details">
                <summary>Project details</summary>

                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </details>

              {project.link && (
                <a
                  className="project-link"
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.link.label}: ${project.title}`}
                >
                  {project.link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}