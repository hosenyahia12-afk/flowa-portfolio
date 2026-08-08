import Link from "next/link";
import { MotionReveal } from "../components/MotionReveal";
import { asset } from "../lib/assets";

export default function PortfolioHome() {
  return (
    <main className="site-shell home-page">
      <header className="site-header">
        <Link className="wordmark" href="/">FLOWA</Link>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#profile">Profile</a>
          <Link href="/projects/flowa/">Project 01</Link>
        </nav>
      </header>

      <MotionReveal />

      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy" data-reveal>
          <p className="section-index">ENVIRONMENTAL DESIGN PORTFOLIO / 2026</p>
          <h1 id="home-title">Every space<br />begins with a line.</h1>
          <p className="hero-cn">每一个空间，都始于一条线。</p>
          <Link className="text-link" href="/projects/flowa/">
            View FLOWA project <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Link className="home-hero-media" href="/projects/flowa/" aria-label="Open FLOWA project" data-reveal>
          <img src={asset("/final/flowa-panorama.png")} alt="FLOWA future fitness habitat with continuous purple movement lighting" />
          <span>PROJECT 01 / FLOWA / 480㎡</span>
        </Link>
      </section>

      <section className="project-index" id="projects" aria-labelledby="projects-title">
        <header className="section-heading" data-reveal>
          <p className="section-index">SELECTED WORK</p>
          <h2 id="projects-title">Spatial research,<br />made visible.</h2>
        </header>

        <article className="featured-project" data-reveal>
          <div className="featured-project-number">01</div>
          <Link href="/projects/flowa/" className="featured-project-media">
            <img src={asset("/sketchbook/submitted/flowa-concept-overview.png")} alt="FLOWA hand-coloured concept overview" loading="lazy" />
          </Link>
          <div className="featured-project-copy">
            <p>Future Fitness Habitat / Graduation Design</p>
            <h3>FLOWA<br /><em>Motion Becomes Space</em></h3>
            <p className="body-copy">从山羊攀爬轨迹与人体训练行为中提取曲线，将运动数据转译为平面、灯光、材料与空间体验。</p>
            <Link className="text-link" href="/projects/flowa/">Explore project <span aria-hidden="true">→</span></Link>
          </div>
        </article>

        <div className="future-projects" data-reveal aria-label="Future portfolio projects">
          <article><span>02</span><h3>Project 02</h3><p>Reserved for the next environmental design project.</p></article>
          <article><span>03</span><h3>Project 03</h3><p>Reserved for the next environmental design project.</p></article>
        </div>
      </section>

      <section className="profile-section" id="profile">
        <div className="section-heading" data-reveal>
          <p className="section-index">DESIGN CAPABILITY</p>
          <h2>Observe. Draw.<br />Build the logic.</h2>
        </div>
        <div className="capability-list" data-reveal>
          <span>01 / Site Research</span>
          <span>02 / Hand Sketch</span>
          <span>03 / Spatial Analysis</span>
          <span>04 / CAD + Modeling</span>
          <span>05 / Visualization</span>
          <span>06 / Design Development</span>
        </div>
      </section>

      <footer className="site-footer">
        <p>FLOWA / ENVIRONMENTAL DESIGN PORTFOLIO</p>
        <Link href="/projects/flowa/">Enter Project 01 →</Link>
      </footer>
    </main>
  );
}
