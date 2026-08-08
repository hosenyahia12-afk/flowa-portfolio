import { asset } from "../lib/assets";

export type MediaItem = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  width: number;
  height: number;
};

const media = (src: string, width: number, height: number, title: string, alt: string, caption?: string): MediaItem => ({
  src: asset(src), width, height, title, alt, caption
});

export const flowaProject = {
  research: [
    media("/research/up-fitness/up-continuous-ceiling.jpg", 1536, 1152, "Continuous Ceiling Line", "UP FITNESS reference showing a continuous suspended ceiling line", "Reference analysis / continuous movement line"),
    media("/research/up-fitness/up-open-field.jpg", 1536, 1152, "Open Training Field", "UP FITNESS open strength and functional training field"),
    media("/research/up-fitness/up-combat-zone.jpg", 1536, 1152, "Focused Intensity", "UP FITNESS focused combat training zone"),
    media("/research/up-fitness/up-material-threshold.jpg", 1536, 1152, "Material Threshold", "UP FITNESS material transition between public and active areas"),
    media("/research/up-fitness/up-recovery-threshold.jpg", 1536, 1152, "Recovery Threshold", "UP FITNESS quieter recovery threshold")
  ],
  conceptOverview: media("/sketchbook/submitted/flowa-concept-overview.png", 1306, 1204, "FLOWA Concept Overview", "Original hand-coloured FLOWA concept board showing the gym, plan, circulation and exploded system", "原创手绘 / 空间、平面、动线与爆炸系统"),
  curveToPlan: media("/portfolio/masters/flowa-curve-to-plan.png", 1448, 1086, "Curve to Plan Generation", "FLOWA curve extraction and plan generation process board", "运动轨迹 → 曲线提取 → 空间流线 → 功能分区"),
  finalPlan: media("/portfolio/derived/flowa-final-plan.svg", 1318, 193, "Final Floor Plan", "Cropped original FLOWA final floor plan with circulation and functional zones", "48.75m × 9.40m / 约 480㎡"),
  exploded: media("/portfolio/masters/flowa-exploded-axonometric.png", 1122, 1402, "Exploded Axonometric", "FLOWA exploded axonometric showing ground flow, zoning, spatial form, ceiling, equipment and lighting", "六层空间系统 / 点击查看原始高清图"),
  behavior: media("/portfolio/masters/flowa-behavior-analysis.png", 1122, 1402, "Human Behavior Heatmap", "FLOWA human behavior heatmap and space usage analysis board", "时段变化、动线、活动聚类与优化结论"),
  experience: media("/portfolio/masters/flowa-human-experience.png", 1122, 1402, "Human Experience in Space", "FLOWA human experience journey, lighting, material and body mapping board", "运动流线 × 空间体验 × 身体感知"),
  details: media("/portfolio/masters/flowa-detail-system.png", 1122, 1402, "Space Detail System", "FLOWA material, lighting, exploded system and human scale board", "Material + Lighting + Human Scale"),
  finalRenders: [
    media("/final/flowa-panorama.png", 1672, 941, "Future Fitness Habitat", "Wide FLOWA gym interior with daylight, athletes and purple continuous lighting", "自然光、运动行为与动态曲线灯光"),
    media("/final/flowa-strength.png", 1672, 941, "Strength + Functional Field", "FLOWA strength and functional training interior", "力量训练、人体尺度与空间节点")
  ],
  sketches: [
    media("/sketchbook/submitted/flowa-reception-ink.png", 1448, 1086, "Reception + Training", "Original black and white FLOWA reception and training perspective line drawing", "原创黑白线稿"),
    media("/sketchbook/submitted/flowa-yoga-ink.png", 1448, 1086, "Yoga Recovery", "Original FLOWA yoga recovery room perspective line drawing", "原创黑白线稿"),
    media("/sketchbook/submitted/flowa-corridor-ink.png", 1410, 1115, "Flow Corridor", "Original FLOWA movement corridor perspective line drawing", "原创黑白线稿"),
    media("/sketchbook/submitted/flowa-main-atmosphere.png", 1402, 1122, "Main Training Atmosphere", "Original hand-coloured FLOWA main training space", "原创马克笔上色稿"),
    media("/sketchbook/submitted/flowa-training-colour.png", 1402, 1122, "Active Training Colour Study", "Original hand-coloured FLOWA active training area", "原创马克笔上色稿"),
    media("/sketchbook/submitted/flowa-recovery-colour.png", 1402, 1122, "Recovery Colour Study", "Original hand-coloured FLOWA recovery zone", "原创马克笔上色稿")
  ],
  journey: [
    { zh: "进入 / 激活", en: "Entrance / Activate", text: "建立项目识别，让身体从城市状态进入运动状态。" },
    { zh: "探索 / 流动", en: "Explore / Flow", text: "连续流线引导有氧训练和空间探索。" },
    { zh: "挑战 / 力量", en: "Challenge / Power", text: "更高对比度与设备密度形成力量核心。" },
    { zh: "突破 / 冲刺", en: "Breakthrough / Peak", text: "功能训练提供开放、灵活的高强度场地。" },
    { zh: "恢复 / 平衡", en: "Recover / Balance", text: "灯光转柔，材料由冷灰过渡到暖木色。" },
    { zh: "社交 / 连接", en: "Social / Connect", text: "休息、交流和补给延长空间体验。" }
  ]
};
