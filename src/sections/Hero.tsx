import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">{profile.role}</p>

        <h1 id="hero-title">
          Turning ideas into
          <br />
          <span>digital experiences.</span>
        </h1>

        <p className="hero-description">
          Hi, I’m {profile.name}. {profile.intro}
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work ↗
          </a>

          <a
            className="button button-secondary"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>

        <p className="hero-caption">
          BUILD. LEARN. IMPROVE.
        </p>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-grid" />

        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />

        <div className="code-sphere">
          <span>&lt;/&gt;</span>
        </div>

        <div className="floating-label label-code">
          <span>{"{ }"}</span>
          Clean code
        </div>

        <div className="floating-label label-design">
          <span>✦</span>
          Thoughtful design
        </div>

        <div className="floating-label label-learning">
          <span>↗</span>
          Always learning
        </div>

        <span className="visual-coordinate coordinate-top">
          IDEAS → CODE
        </span>

        <span className="visual-coordinate coordinate-bottom">
          CONSTANTLY EVOLVING
        </span>
      </div>
    </section>
  );
}