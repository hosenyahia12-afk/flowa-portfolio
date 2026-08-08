import Link from "next/link";
import { MediaGallery } from "../../../components/MediaGallery";
import { MotionReveal } from "../../../components/MotionReveal";
import { asset } from "../../../lib/assets";
import { flowaProject } from "../../../data/projects";

const chapterLinks = [
  ["01", "Research", "research"],
  ["02", "Concept", "concept"],
  ["03", "Curve to Plan", "curve-to-plan"],
  ["04", "Final Plan", "final-plan"],
  ["05", "Axonometric", "axonometric"],
  ["06", "Behavior", "behavior"],
  ["07", "Experience", "experience"],
  ["08", "Details", "details"],
  ["09", "Hand Sketch", "sketch"]
];

const SectionHeader = ({ number, en, zh, text }: { number: string; en: string; zh: string; text: string }) => (
  <header className="project-section-heading" data-reveal>
    <p className="section-index">{number} / {en.toUpperCase()}</p>
    <h2>{zh}<br /><em>{en}</em></h2>
    <p>{text}</p>
  </header>
);

export default function FlowaProjectPage() {
  return (
    <main className="site-shell project-page">
      <header className="site-header project-header">
        <Link className="wordmark" href="/">FLOWA</Link>
        <nav aria-label="Project navigation">
          <Link href="/">All projects</Link>
          <a href="#final-plan">Plan</a>
          <a href="#sketch">Sketch</a>
        </nav>
      </header>
      <MotionReveal />

      <section className="project-cover" aria-labelledby="flowa-title">
        <div className="project-cover-title" data-reveal>
          <p className="section-index">PROJECT 01 / GRADUATION DESIGN</p>
          <h1 id="flowa-title">FLOWA</h1>
          <p>Motion Becomes Space</p>
        </div>
        <dl className="project-meta" data-reveal>
          <div><dt>Type</dt><dd>Future Fitness Habitat</dd></div>
          <div><dt>Area</dt><dd>480㎡</dd></div>
          <div><dt>Focus</dt><dd>Environmental Design</dd></div>
          <div><dt>Method</dt><dd>Movement-generated Space</dd></div>
        </dl>
        <div className="project-cover-media" data-reveal>
          <img src={asset("/final/flowa-panorama.png")} alt="FLOWA panoramic interior showing the motion-responsive ceiling and floor lines" />
          <p>人体运动轨迹成为地面、顶面和空间组织的共同语言。</p>
        </div>
      </section>

      <nav className="chapter-nav" aria-label="FLOWA chapters">
        {chapterLinks.map(([number, label, id]) => <a key={id} href={`#${id}`}><span>{number}</span>{label}</a>)}
      </nav>

      <section className="project-intro content-grid" data-reveal>
        <p className="lead-copy">不是展示一个健身房，而是研究生命运动如何生成空间。</p>
        <div>
          <p>FLOWA 以山羊在复杂地形中的攀爬行为为自然原型，将身体重心、支撑转换和连续路径，与跑步、力量、拉伸和恢复动作叠合。</p>
          <p>这些轨迹经过采样、简化、节点识别与区域生长，最终形成平面边界、空间流线和响应式灯光系统。</p>
        </div>
      </section>

      <section className="project-section section-soft" id="research">
        <SectionHeader number="01" en="Site Research" zh="场地与案例调研" text="先读取原始空间，再决定哪些流动关系值得被保留和转译。" />
        <div className="research-layout">
          <MediaGallery className="research-feature" items={[flowaProject.research[0]]} />
          <div className="research-findings" data-reveal>
            <article><span>01</span><h3>连续顶面线</h3><p>参考案例以一条悬挂曲线连接结构节点。FLOWA 将其转译为紫色运动轨迹，而非复制黄色品牌语言。</p></article>
            <article><span>02</span><h3>开放训练场</h3><p>不同训练强度保持视觉连续，主流线负责组织而不是用实体隔墙切碎空间。</p></article>
            <article><span>03</span><h3>材料区分节奏</h3><p>橡胶、金属、木饰面和绿植对应挑战、过渡与恢复三种身体状态。</p></article>
            <article><span>04</span><h3>低眩光恢复</h3><p>恢复区从动态紫光逐渐过渡至柔和白光和暖木色。</p></article>
          </div>
        </div>
        <MediaGallery className="reference-strip" items={flowaProject.research.slice(1, 5)} />
        <p className="source-note">Precedent source: UP FITNESS. Used for spatial analysis only; FLOWA retains its own layout, color system and design identity.</p>
      </section>

      <section className="project-section" id="concept">
        <SectionHeader number="02" en="Concept Generation" zh="概念生成" text="从手的观察开始，让草图、运动数据和空间生成建立可验证的连续关系。" />
        <MediaGallery className="hero-drawing" items={[flowaProject.conceptOverview]} />
        <div className="logic-chain" data-reveal>
          <article><span>01</span><h3>Animal Movement</h3><p>山羊攀爬中的重心变化与支撑转换。</p></article>
          <article><span>02</span><h3>Human Motion</h3><p>跑步、力量、拉伸、平衡和恢复轨迹。</p></article>
          <article><span>03</span><h3>Curve Extraction</h3><p>采样、平滑、骨架提取与节点识别。</p></article>
          <article><span>04</span><h3>Spatial Generation</h3><p>生成边界、功能区域和灯光路径。</p></article>
        </div>
      </section>

      <section className="project-section section-soft" id="curve-to-plan">
        <SectionHeader number="03" en="Curve to Plan" zh="曲线到平面" text="把密集展板拆成清晰的网页章节：先理解五个步骤，再查看完整原图。" />
        <ol className="process-steps" data-reveal>
          <li><span>01</span><b>Original Outline</b><small>原始轮廓</small></li>
          <li><span>02</span><b>Curve Implant</b><small>轨迹植入</small></li>
          <li><span>03</span><b>Node Detection</b><small>节点生成</small></li>
          <li><span>04</span><b>Space Division</b><small>空间划分</small></li>
          <li><span>05</span><b>Function Mapping</b><small>功能映射</small></li>
        </ol>
        <MediaGallery className="technical-board" items={[flowaProject.curveToPlan]} />
      </section>

      <section className="project-section final-plan-section" id="final-plan">
        <SectionHeader number="04" en="Final Floor Plan" zh="最终平面" text="最终平面作为一级视觉单独展示。点击图纸可进入高清查看模式。" />
        <MediaGallery className="final-plan-gallery" items={[flowaProject.finalPlan]} />
        <div className="plan-legend" data-reveal>
          <span>入口 / 激活</span><span>有氧区</span><span>力量区</span><span>功能训练区</span><span>恢复 / 拉伸区</span><span>社交 / 休闲区</span>
        </div>
      </section>

      <section className="project-section section-soft" id="axonometric">
        <SectionHeader number="05" en="Exploded Axonometric" zh="空间系统爆炸轴测" text="六个系统保持原始图纸不变，用网页文字重新建立清楚的技术层级。" />
        <div className="axon-layout">
          <MediaGallery className="axon-board" items={[flowaProject.exploded]} />
          <ol className="layer-list" data-reveal>
            <li><span>06</span><div><b>Ceiling Lighting</b><p>顶部运动轨迹灯光系统</p></div></li>
            <li><span>05</span><div><b>MEP / Equipment</b><p>设备、管线和环境系统</p></div></li>
            <li><span>04</span><div><b>Ceiling Structure</b><p>曲面顶棚及结构层</p></div></li>
            <li><span>03</span><div><b>Spatial Form</b><p>空间形态和曲线隔断</p></div></li>
            <li><span>02</span><div><b>Function Zoning</b><p>训练与恢复功能分区</p></div></li>
            <li><span>01</span><div><b>Ground Flow</b><p>地面运动流线系统</p></div></li>
          </ol>
        </div>
      </section>

      <section className="project-section" id="behavior">
        <SectionHeader number="06" en="Human Behavior Analysis" zh="人体行为分析" text="主要热力图占据视觉中心，时间变化、动线和聚类作为支持证据。" />
        <MediaGallery className="behavior-board" items={[flowaProject.behavior]} />
        <div className="behavior-summary" data-reveal>
          <article><b>28%</b><span>Cardio / 有氧训练</span></article>
          <article><b>22%</b><span>Strength / 力量训练</span></article>
          <article><b>18%</b><span>Functional / 功能训练</span></article>
          <article><b>17%</b><span>Recovery / 身心恢复</span></article>
          <article><b>15%</b><span>Social / 社交休闲</span></article>
        </div>
      </section>

      <section className="project-section section-dark" id="experience">
        <SectionHeader number="07" en="Human Experience" zh="人在空间里的体验" text="从进入到恢复，空间亮度、材料温度和运动强度共同形成连续体验。" />
        <MediaGallery className="experience-board" items={[flowaProject.experience]} />
        <ol className="journey-list" data-reveal>
          {flowaProject.journey.map((item, index) => <li key={item.en}><span>{String(index + 1).padStart(2, "0")}</span><b>{item.zh}</b><small>{item.en}</small><p>{item.text}</p></li>)}
        </ol>
      </section>

      <section className="project-section" id="visualization">
        <SectionHeader number="08" en="Final Visualization" zh="最终空间效果" text="使用大幅建筑摄影式构图展示空间尺度、人体活动、自然光与人工灯光关系。" />
        <MediaGallery className="final-render-gallery" items={flowaProject.finalRenders} />
      </section>

      <section className="project-section section-soft" id="details">
        <SectionHeader number="09" en="Material / Lighting / Detail" zh="材料、灯光与节点" text="材料和灯光服务于身体节奏：激活、挑战、平衡与恢复。" />
        <MediaGallery className="detail-board" items={[flowaProject.details]} />
        <div className="material-notes" data-reveal>
          <article><span>Floor</span><h3>Rubber + Flow Line</h3><p>耐磨、防滑，并利用浅紫色主动线建立方向感。</p></article>
          <article><span>Ceiling</span><h3>Perforated Panel + Light</h3><p>吸声顶板与动态灯带共同形成运动轨迹。</p></article>
          <article><span>Recovery</span><h3>Timber + Soft White</h3><p>木饰面、植物和低眩光构成缓慢恢复的空间温度。</p></article>
        </div>
      </section>

      <section className="project-section sketch-section" id="sketch">
        <SectionHeader number="10" en="Hand Sketch Archive" zh="设计师手绘档案" text="保留真实笔触、透视修正和上色痕迹，让设计过程成为项目的重要证据。" />
        <MediaGallery className="sketch-gallery" items={flowaProject.sketches} />
      </section>

      <footer className="project-footer">
        <p className="section-index">PROJECT 01 / END</p>
        <h2>Move with flow.</h2>
        <p>从身体运动，到空间流动。</p>
        <Link className="text-link" href="/">Back to all projects <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
