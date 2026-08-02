"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const plates = [
  {
    title: "Curve to Plan",
    label: "Trajectory extraction, node generation, functional mapping, and the final plan.",
    image: asset("/portfolio/masters/flowa-curve-to-plan.png")
  },
  {
    title: "Space Detail System",
    label: "Floor, zoning, spatial form, ceiling, equipment, lighting, material, and human scale.",
    image: asset("/portfolio/masters/flowa-detail-system.png")
  },
  {
    title: "Human Behavior Analysis",
    label: "Primary heatmap, time-based use, circulation, activity clusters, and design conclusions.",
    image: asset("/portfolio/masters/flowa-behavior-analysis.png")
  },
  {
    title: "Human Experience",
    label: "Entrance, cardio, strength, functional training, recovery, and social connection.",
    image: asset("/portfolio/masters/flowa-human-experience.png")
  },
  {
    title: "Motion Algorithm",
    label: "Animal movement and human body trajectories translated into spatial flow.",
    image: asset("/portfolio/masters/flowa-motion-algorithm.png")
  },
  {
    title: "Exploded Axonometric",
    label: "Ground flow, function zoning, spatial form, structure, equipment, and ceiling light.",
    image: asset("/portfolio/masters/flowa-exploded-axonometric.png")
  }
];

type RenderAsset = {
  title: string;
  caption: string;
  source: string;
  image?: string;
  slot?: string;
  imageFit?: "cover" | "contain";
};

type SketchAsset = {
  title: string;
  caption: string;
  image: string;
};

const sketchArchive: SketchAsset[] = [
  { title: "Reception + Training", caption: "Original FLOWA interior line study", image: asset("/sketchbook/submitted/flowa-reception-ink.png") },
  { title: "Linear Training Hall", caption: "Original FLOWA circulation line study", image: asset("/sketchbook/submitted/flowa-training-ink.png") },
  { title: "Yoga Recovery", caption: "Original FLOWA quiet-zone line study", image: asset("/sketchbook/submitted/flowa-yoga-ink.png") },
  { title: "Flow Corridor", caption: "Original FLOWA entry-to-training line study", image: asset("/sketchbook/submitted/flowa-corridor-ink.png") }
];

const sketchConcepts: SketchAsset[] = [
  { title: "FLOWA Concept Overview", caption: "Movement, plan, axonometric, and spatial language", image: asset("/sketchbook/submitted/flowa-concept-overview.png") },
  { title: "Main Training Atmosphere", caption: "Cardio, strength, ceiling trajectory, and central planting", image: asset("/sketchbook/submitted/flowa-main-atmosphere.png") },
  { title: "Recovery Colour Study", caption: "Yoga mats, timber, planting, and slow threshold", image: asset("/sketchbook/submitted/flowa-recovery-colour.png") },
  { title: "Active Training Colour Study", caption: "Daylight, free weights, material, and human movement", image: asset("/sketchbook/submitted/flowa-training-colour.png") }
];

const renderAssets: RenderAsset[] = [
  {
    title: "FLOWA Concept Overview",
    caption: "Movement trajectory / plan / axonometric / spatial atmosphere",
    image: asset("/sketchbook/submitted/flowa-concept-overview.png"),
    source: "Submitted hand-coloured board",
    imageFit: "contain"
  },
  {
    title: "Main Training Atmosphere",
    caption: "Cardio, strength, tree node, and ceiling trajectory",
    image: asset("/sketchbook/submitted/flowa-main-atmosphere.png"),
    source: "Submitted hand-coloured rendering"
  },
  {
    title: "Recovery Colour Study",
    caption: "Yoga, timber, planting, and soft recovery threshold",
    image: asset("/sketchbook/submitted/flowa-recovery-colour.png"),
    source: "Submitted hand-coloured rendering"
  },
  {
    title: "Active Training Colour Study",
    caption: "Daylight, free weights, material, and human movement",
    image: asset("/sketchbook/submitted/flowa-training-colour.png"),
    source: "Submitted hand-coloured rendering"
  }
];

const upFitnessReferences: RenderAsset[] = [
  {
    title: "Continuous Ceiling Line",
    caption: "A suspended curve joins structural points and makes core training visible.",
    source: "UP FITNESS reference / supplied image",
    image: asset("/research/up-fitness/up-continuous-ceiling.jpg")
  },
  {
    title: "Open Training Field",
    caption: "A visually continuous room allows different strength and functional zones to coexist.",
    source: "UP FITNESS reference / supplied image",
    image: asset("/research/up-fitness/up-open-field.jpg")
  },
  {
    title: "Combat Intensity Zone",
    caption: "A focused material and lighting treatment gives a high-energy program its own identity.",
    source: "UP FITNESS reference / supplied image",
    image: asset("/research/up-fitness/up-combat-zone.jpg")
  },
  {
    title: "Material Threshold",
    caption: "Concrete-grey surfaces, stainless steel, and an accent plane build a clear arrival sequence.",
    source: "UP FITNESS reference / supplied image",
    image: asset("/research/up-fitness/up-material-threshold.jpg")
  },
  {
    title: "Recovery Threshold",
    caption: "A quieter, softer transition separates changing and recovery from the active hall.",
    source: "UP FITNESS reference / supplied image",
    image: asset("/research/up-fitness/up-recovery-threshold.jpg")
  },
  {
    title: "Structured Training Bay",
    caption: "A repeatable equipment frame gives the open field safe, clear training edges.",
    source: "UP FITNESS reference / supplied image",
    image: asset("/research/up-fitness/up-structured-training.jpg")
  }
];

const sceneBeats = [
  {
    title: "Project Cover",
    kicker: "01 / FLOWA",
    body: "A 480㎡ future fitness habitat generated by animal instinct and human movement."
  },
  {
    title: "Research",
    kicker: "02 / Site + behavior",
    body: "Site conditions, precedent research, user behavior, and spatial problems establish the design brief."
  },
  {
    title: "Concept Generation",
    kicker: "03 / Motion DNA",
    body: "Goat climbing and human training trajectories become a shared family of curves."
  },
  {
    title: "Curve to Plan",
    kicker: "04 / Spatial algorithm",
    body: "Movement is sampled, smoothed, given nodes, and expanded into a functional spatial field."
  },
  {
    title: "Final Floor Plan",
    kicker: "05 / 480㎡ layout",
    body: "The final plan is isolated at architectural scale and can be opened as a larger drawing."
  },
  {
    title: "Exploded Axonometric",
    kicker: "06 / Technical layers",
    body: "Floor, zoning, spatial form, ceiling, equipment, and lighting are coordinated as one assembly."
  },
  {
    title: "Human Behavior",
    kicker: "07 / Space usage",
    body: "Density, time rhythm, circulation, and activity clusters test how the design performs."
  },
  {
    title: "Human Experience",
    kicker: "08 / Spatial journey",
    body: "Arrival, activation, challenge, balance, recovery, and social connection form one sequence."
  },
  {
    title: "Material / Lighting / Detail",
    kicker: "09 / Design development",
    body: "Material temperature, low-glare lighting, human scale, and key nodes complete the spatial system."
  },
  {
    title: "Hand Sketch",
    kicker: "10 / Designer's hand",
    body: "Original line work and marker studies preserve observation, correction, and personal authorship."
  },
  {
    title: "Portfolio Atlas",
    kicker: "Research archive",
    body: "The final evidence set remains available as a clear, high-resolution drawing catalog."
  }
];

const beats = sceneBeats.map((beat) => beat.title);

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function range(progress: number, start: number, end: number) {
  return clamp((progress - start) / (end - start));
}

function useScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const distance = ref.current.offsetHeight - window.innerHeight;
      setProgress(clamp(-rect.top / distance));
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return { ref, progress };
}

function FlowTrace({ className = "" }: { className?: string }) {
  return (
    <svg className={`flow-trace ${className}`} viewBox="0 0 1200 520" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-40 380 C145 265 220 90 350 186 S520 460 690 282 S905 82 1040 212 S1130 400 1260 132" />
      <path d="M65 430 C210 330 330 370 480 260 S735 135 1120 270" />
      <path d="M180 120 C300 205 405 145 540 214 S760 360 1020 130" />
    </svg>
  );
}

export default function Home() {
  const { ref, progress } = useScrollProgress();
  const [selectedRender, setSelectedRender] = useState<RenderAsset | null>(null);
  const [selectedSketch, setSelectedSketch] = useState<SketchAsset | null>(null);
  const activeBeat = Math.min(beats.length - 1, Math.floor(progress * beats.length));
  const activeScene = sceneBeats[activeBeat];

  const motion = useMemo(() => {
    const gate = range(progress, 0.16, 0.29);
    const site = range(progress, 0.04, 0.09) * (1 - range(progress, 0.1, 0.13));
    const precedent = range(progress, 0.1, 0.16) * (1 - range(progress, 0.18, 0.21));
    const problem = range(progress, 0.19, 0.24) * (1 - range(progress, 0.26, 0.29));
    const dna = range(progress, 0.28, 0.34) * (1 - range(progress, 0.36, 0.39));
    const sketchToSpace = range(progress, 0.38, 0.45) * (1 - range(progress, 0.47, 0.5));
    const panorama = range(progress, 0.49, 0.54) * (1 - range(progress, 0.56, 0.59));
    const technical = range(progress, 0.58, 0.64) * (1 - range(progress, 0.66, 0.69));
    const heat = range(progress, 0.68, 0.74) * (1 - range(progress, 0.76, 0.79));
    const finalVisuals = range(progress, 0.78, 0.83) * (1 - range(progress, 0.85, 0.87));
    const sketchbook = range(progress, 0.86, 0.9) * (1 - range(progress, 0.92, 0.935));
    const catalog = range(progress, 0.94, 0.978);
    const catalogVisibility = range(progress, 0.94, 0.948) * (1 - range(progress, 0.982, 0.988));
    const final = range(progress, 0.99, 1);

    return {
      gate,
      site,
      precedent,
      problem,
      sketchbook,
      dna,
      sketchToSpace,
      panorama,
      technical,
      heat,
      finalVisuals,
      catalog,
      catalogVisibility,
      final,
      heroOpacity: 1 - range(progress, 0.08, 0.24),
      cameraScale: 1 + range(progress, 0.02, 0.62) * 0.34 - final * 0.08,
      worldX: -range(progress, 0.44, 0.82) * 15,
      blur: heat * 7
    };
  }, [progress]);

  return (
    <main className="cinematic-site">
      <div ref={ref} className="scroll-world">
        <section className="cinema-stage" aria-label="FLOWA cinematic scroll microsite">
          <nav className="cinema-nav">
            <a href="#top" className="cinema-brand">
              FLOWA
            </a>
            <span>Motion Becomes Space</span>
            <a href="#final" className="cinema-cta">
              Start project
            </a>
          </nav>

          <aside className="story-rail">
            <div className="rail-index">{String(activeBeat + 1).padStart(2, "0")}</div>
            <div className="rail-line">
              <i style={{ transform: `scaleY(${progress})` }} />
            </div>
            <div className="rail-beats">
              {beats.map((beat, index) => (
                <span key={beat} className={index === activeBeat ? "active" : ""}>
                  {beat}
                </span>
              ))}
            </div>
          </aside>

          <aside className="pinned-story">
            <span>{activeScene.kicker}</span>
            <h2>{activeScene.title}</h2>
            <p>{activeScene.body}</p>
          </aside>

          <div
            id="top"
            className="world-camera"
            style={{
              transform: `translate3d(${motion.worldX}vw, 0, 0) scale(${motion.cameraScale})`,
              filter: `blur(${motion.blur}px)`
            }}
          >
            <img className="plate plate-back" src={asset("/portfolio/masters/flowa-curve-to-plan.png")} alt="" />
            <img className="plate plate-mid" src={asset("/portfolio/masters/flowa-exploded-axonometric.png")} alt="" />
            <img className="plate plate-front" src={asset("/portfolio/masters/flowa-detail-system.png")} alt="" />
            <img className="plate plate-heat" src={asset("/portfolio/masters/flowa-behavior-analysis.png")} alt="" style={{ opacity: motion.heat * 0.58 }} />
            <div className="space-floor" />
            <FlowTrace />
            <div className="depth-person person-one" />
            <div className="depth-person person-two" />
            <div className="depth-person person-three" />
          </div>

          <div className="foreground-gate" aria-hidden="true">
            <div style={{ transform: `translate3d(${-motion.gate * 46}vw, ${motion.gate * 5}vh, 0) rotate(${motion.gate * -8}deg)` }} />
            <div style={{ transform: `translate3d(${motion.gate * 46}vw, ${motion.gate * -4}vh, 0) rotate(${motion.gate * 8}deg)` }} />
          </div>

          <section className="hero-copy" style={{ opacity: motion.heroOpacity, transform: `translateY(${progress * -70}px)` }}>
            <h1>FLOWA</h1>
            <p>Every space begins with a line.<br />每一个空间，都始于一条线。</p>
          </section>

          <button className="hero-sketch-preview" type="button" style={{ opacity: motion.heroOpacity }} onClick={() => setSelectedSketch(sketchArchive[2])} aria-label="Open designer marker sketch">
            <img src={sketchArchive[2].image} alt="Designer marker sketch preview" />
            <span>HAND / OBSERVATION / LINE</span>
          </button>

          <section className="research-panel site-panel" style={{ opacity: motion.site, transform: `translate3d(0, ${(1 - motion.site) * 36}px, 0)` }}>
            <div className="panel-title"><span>01</span><b>Existing Space Analysis</b></div>
            <h2>Read the room before shaping it.</h2>
            <p>The original linear shell held separated fitness functions and an underused perimeter. The survey establishes daylight, entry pressure, service edge, and existing circulation as the design substrate.</p>
            <div className="analysis-metrics"><span>48.75m shell</span><span>single entry</span><span>low edge activation</span></div>
          </section>

            <section className="precedent-panel" style={{ opacity: motion.precedent, transform: `translate3d(0, ${(1 - motion.precedent) * 42}px, 0)` }}>
              <header>
                <span>02 / Precedent Study</span>
                <div>
                  <h2>UP FITNESS → FLOWA</h2>
                  <p>Up Fitness is used as a line-based spatial reference, not a style to copy. The study isolates its continuous ceiling gesture, clear program intensity, material contrast, and glare-controlled recovery lighting—then translates them into FLOWA&apos;s movement-generated language.</p>
                </div>
              </header>
              <div className="precedent-layout">
                <button className="precedent-feature" type="button" onClick={() => setSelectedRender(upFitnessReferences[0])} aria-label="Open Up Fitness continuous ceiling reference">
                  <img src={upFitnessReferences[0].image} alt="Up Fitness continuous ceiling line" />
                  <span>UP FITNESS / REFERENCE ONLY</span>
                  <strong>CONTINUOUS CEILING LINE</strong>
                </button>
                <div className="precedent-matrix">
                  <article><b>01 / CEILING AS TRAJECTORY</b><p>A suspended curve links columns with the core training field.</p><i>FLOWA: extend the purple motion line from floor circulation into a continuous ceiling-light system.</i></article>
                  <article><b>02 / OPEN FIELD, CLEAR INTENSITY</b><p>A broad visual field keeps strength, functional training, and circulation connected.</p><i>FLOWA: set a central challenge zone while keeping clear sightlines to each program node.</i></article>
                  <article><b>03 / MATERIAL DEFINES RHYTHM</b><p>Concrete, metal, acrylic, and rubber mark different energy levels without closing the space.</p><i>FLOWA: use graphite rubber, metal, timber, and a controlled purple accent to differentiate pace.</i></article>
                  <article><b>04 / RECOVERY NEEDS SOFT LIGHT</b><p>Indirect illumination creates a low-glare setting for focused body practice.</p><i>FLOWA: shift from responsive purple energy to reflected soft-white light in the yoga recovery zone.</i></article>
                </div>
              </div>
              <div className="precedent-rail" aria-label="Up Fitness precedent reference images">
                {upFitnessReferences.slice(1).map((reference, index) => (
                  <button type="button" key={reference.title} onClick={() => setSelectedRender(reference)} aria-label={`Open ${reference.title} Up Fitness reference image`}>
                    <img src={reference.image} alt={`Up Fitness reference: ${reference.title}`} />
                    <span>{String(index + 2).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
              <footer>RETAIN: CEILING TRAJECTORY / OPEN TRAINING FIELD / MATERIAL RHYTHM / LOW-GLARE RECOVERY LIGHT. &nbsp; REJECT: YELLOW BRAND ACCENT / UP FITNESS GRAPHICS. &nbsp; SOURCE: WDS | UP FITNESS &amp; DAY1 PILATES / <a href="https://www.hisheji.com/project/space-type/gym/2021/05/27/113164" target="_blank" rel="noreferrer">VIEW CASE SOURCE</a></footer>
            </section>

          <section className="research-panel problem-panel" style={{ opacity: motion.problem, transform: `translate3d(0, ${(1 - motion.problem) * 40}px, 0)` }}>
            <div className="panel-title"><span>03</span><b>Problem Analysis</b></div>
            <div className="problem-list">
              <p><b>01</b> Fragmented training zones</p><p><b>02</b> Flat illumination hierarchy</p><p><b>03</b> No continuous human flow</p><p><b>04</b> Recovery and social areas isolated</p>
            </div>
          </section>

          <section className="sketchbook-panel" style={{ opacity: motion.sketchbook, transform: `translate3d(0, ${(1 - motion.sketchbook) * 42}px, 0)` }}>
            <header><span>03 / Hand Sketch Research</span><h2>FLOWA Line Archive</h2><p>The submitted gym line drawings record reception, training, recovery, and the movement corridor before colour is introduced.</p></header>
            <div className="sketchbook-rail">
              {sketchArchive.map((sketch, index) => (
                <button type="button" key={sketch.image} onClick={() => setSelectedSketch(sketch)} style={{ transform: `translateY(${index % 2 === 0 ? 0 : 22}px)` }}>
                  <img src={sketch.image} alt={`${sketch.title} original hand sketch`} />
                  <span>{String(index + 1).padStart(2, "0")}</span><b>{sketch.title}</b>
                </button>
              ))}
            </div>
          </section>

          <section className="narrative-card dna-card" style={{ opacity: motion.dna, transform: `translate3d(0, ${(1 - motion.dna) * 40}px, 0)` }}>
            <span>04 / Concept Generation</span>
            <h2>Movement opens the plan.</h2>
            <p>Animal movement → human body data → curve extraction → spatial generation → final space.</p>
            <div className="mini-equation">
              <b>body</b>
              <i />
              <b>curve</b>
              <i />
              <b>space</b>
            </div>
          </section>

          <section className="panorama-label final-plan-panel" style={{ opacity: motion.panorama }}>
            <div><span>05 / Final Floor Plan</span><h2>The movement line organizes 480㎡.</h2><p>Entrance, cardio, strength, functional training, recovery, and social space are connected by one continuous route.</p></div>
            <button type="button" onClick={() => setSelectedRender({ title: "Final Floor Plan", caption: "Curve-generated 480㎡ FLOWA fitness layout", source: "FLOWA original presentation board", image: asset("/portfolio/masters/flowa-curve-to-plan.png"), imageFit: "contain" })} aria-label="Open FLOWA final floor plan in high resolution">
              <img src={asset("/portfolio/masters/flowa-curve-to-plan.png")} alt="FLOWA final floor plan enlarged crop" />
              <strong>Open complete drawing</strong>
            </button>
          </section>

          <section className="sketch-to-space" style={{ opacity: motion.sketchToSpace, transform: `translate3d(0, ${(1 - motion.sketchToSpace) * 46}px, 0)` }}>
            <header><span>05 / From Sketch To Space</span><h2>The designer&apos;s line becomes a spatial system.</h2></header>
            <div className="translation-steps">
              <article><img src={sketchConcepts[0].image} alt="FLOWA hand-drawn gym line sketch" /><span>01</span><b>Hand Sketch</b><p>Gym-specific line study: cardio, strength, climbing, recovery.</p></article>
              <article><img src={sketchConcepts[0].image} alt="FLOWA hand-coloured gym concept board" /><span>02</span><b>Concept Board</b><p>Movement, plan, layer system, and spatial atmosphere are made visible.</p></article>
              <article><img src={asset("/reference/flowa-dxf-clarified-plan.svg")} alt="DXF-derived FLOWA gym plan" /><span>03</span><b>DXF Plan Rewrite</b><p>The original shell is reprogrammed as a readable seven-zone gym.</p></article>
              <article><img src={sketchConcepts[1].image} alt="FLOWA hand-coloured final spatial visualization" /><span>04</span><b>Colour Rendering</b><p>Light, people, material, and flow become atmosphere.</p></article>
            </div>
            <div className="gym-plan-strip" aria-label="Proposed FLOWA gym plan sequence"><span>Enter + Activate</span><span>Cardio Flow</span><span>Strength Core</span><span>Functional</span><span>Climb</span><span>Yoga + Recover</span><span>Social End</span></div>
          </section>

          <section className="technical-panel" style={{ opacity: motion.technical, transform: `translate3d(0, ${(1 - motion.technical) * 44}px, 0)` }}>
            <button className="panel-zoom" type="button" onClick={() => setSelectedRender({ title: "Space Detail System", caption: "Material, lighting, human scale, and technical nodes", source: "FLOWA original presentation board", image: asset("/portfolio/masters/flowa-detail-system.png"), imageFit: "contain" })} aria-label="Open FLOWA space detail system in high resolution">
              <img src={asset("/portfolio/masters/flowa-detail-system.png")} alt="FLOWA technical exploded axonometric drawing" />
              <strong>View high resolution</strong>
            </button>
            <div>
              <span>06 / Exploded Axonometric</span>
              <h2>Technical Drawing System</h2>
              <p>Exploded axonometric, sectional human scale, lighting response, material palette, MEP coordination, and layered floor flow are read as a single construction narrative.</p>
              <ul><li>Ceiling light trajectory</li><li>Equipment + spatial form layer</li><li>Material and acoustic field</li></ul>
            </div>
          </section>

          <section className="heat-panel" style={{ opacity: motion.heat, transform: `translate3d(0, ${(1 - motion.heat) * 48}px, 0)` }}>
            <button className="panel-zoom" type="button" onClick={() => setSelectedRender({ title: "Human Behavior Analysis", caption: "Heatmap, time rhythm, circulation, and activity clusters", source: "FLOWA original presentation board", image: asset("/portfolio/masters/flowa-behavior-analysis.png"), imageFit: "contain" })} aria-label="Open FLOWA human behavior analysis in high resolution">
              <img src={asset("/portfolio/masters/flowa-behavior-analysis.png")} alt="FLOWA behavior heatmap board" />
              <strong>View high resolution</strong>
            </button>
            <div>
              <span>07 / Human Behavior Analysis</span>
              <h2>Energy leaves a trace.</h2>
              <p>Architecture is tested through body density, movement direction, recovery pockets, and social nodes—not by decoration alone.</p>
            </div>
          </section>

          <section className="final-visuals" aria-label="FLOWA final spatial visualizations" style={{ opacity: motion.finalVisuals }}>
            <header>
              <span>06 / Final Visualization</span>
              <h2>Future fitness habitat.</h2>
              <p>Ceiling light, ground trajectory, material temperature, and real human activity lock into one lived spatial atmosphere.</p>
            </header>
            <div className="final-visual-rail">
              {renderAssets.map((space, index) => (
                <figure key={space.title} className={`${space.image ? "has-image" : "render-slot"}${space.imageFit === "contain" ? " image-contain" : ""}`} style={{ transform: `translateY(${(1 - motion.finalVisuals) * (index + 1) * 22}px)` }}>
                  {space.image ? (
                    <button type="button" onClick={() => setSelectedRender(space)} aria-label={`Open ${space.title} in high resolution`}>
                      <img src={space.image} alt={`FLOWA ${space.title} visualization`} />
                      <strong>View high resolution</strong>
                    </button>
                  ) : (
                    <div className="slot-art" aria-label={`${space.title} high-resolution render placeholder`}>
                      <span>4K</span><b>{space.slot ?? "render-slot"}</b><i>Awaiting CAD-aligned render</i>
                    </div>
                  )}
                  <figcaption><span>{String(index + 1).padStart(2, "0")}</span><b>{space.title}</b><em>{space.caption}</em><small>{space.source}</small></figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="catalog" aria-label="FLOWA portfolio drawing archive" style={{ opacity: motion.catalogVisibility, transform: `translate3d(${-motion.catalog * 420}vw, -50%, 0)` }}>
            {plates.map((plate, index) => (
              <article key={plate.image}>
                <button type="button" onClick={() => setSelectedRender({ title: plate.title, caption: plate.label, source: "FLOWA original presentation board", image: plate.image, imageFit: "contain" })} aria-label={`Open ${plate.title} in high resolution`}>
                  <img src={plate.image} alt={`${plate.title} FLOWA board`} />
                  <strong>View high resolution</strong>
                </button>
                <footer>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{plate.title}</h3><p>{plate.label}</p></div>
                </footer>
              </article>
            ))}
          </section>

          <section id="final" className="final-state" style={{ opacity: motion.final }}>
            <span>FLOWA / Environmental Design Portfolio</span>
            <h2>Motion becomes space.</h2>
            <p>From animal instinct to human movement; from body trajectory to a future spatial habitat.</p>
            <a href="#top">Return to research</a>
          </section>

          <div className="progress-readout">
            <span>{Math.round(progress * 100).toString().padStart(2, "0")}</span>
            <i />
          </div>

          {selectedRender?.image ? (
            <div className="render-lightbox" role="dialog" aria-modal="true" aria-label={`${selectedRender.title} high-resolution view`} onClick={() => setSelectedRender(null)}>
              <button type="button" className="lightbox-close" onClick={() => setSelectedRender(null)}>Close ×</button>
              <img src={selectedRender.image} alt={`${selectedRender.title} high-resolution`} onClick={(event) => event.stopPropagation()} />
              <p>{selectedRender.title} <span>Click outside to close</span></p>
            </div>
          ) : null}

          {selectedSketch ? (
            <div className="render-lightbox sketch-lightbox" role="dialog" aria-modal="true" aria-label={`${selectedSketch.title} hand sketch`} onClick={() => setSelectedSketch(null)}>
              <button type="button" className="lightbox-close" onClick={() => setSelectedSketch(null)}>Close ×</button>
              <img src={selectedSketch.image} alt={`${selectedSketch.title} high-resolution hand sketch`} onClick={(event) => event.stopPropagation()} />
              <p>{selectedSketch.title} <span>{selectedSketch.caption}</span></p>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
