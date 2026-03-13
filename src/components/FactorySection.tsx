const factories = [
  {
    number: '01',
    title: '沪漫一厂',
    subtitle: '小说生成器',
    description:
      '0成本短篇小说生成器。将碎片灵感、历史底蕴化为连贯的叙事结构，为动漫化提供坚实的文学骨架。',
    features: [
      '碎片灵感 → 完整故事',
      '历史底蕴 AI 整理',
      '多风格叙事支持',
    ],
    status: '开发中',
    statusColor: 'bg-yellow-100 text-yellow-800',
  },
  {
    number: '02',
    title: '沪漫二厂',
    subtitle: 'Agent Workflow',
    description:
      '动漫 Agent。深度整合 AIGC 工作流，一键实现从文字脚本到分镜草图、配音字幕的跨越式生成。',
    features: [
      '文字 → 分镜/草图',
      'AI 配音 + 字幕',
      '一键成片',
    ],
    status: '可用',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    number: '03',
    title: '沪漫三厂',
    subtitle: 'IP Generator',
    description:
      'IP Generator。Scale up 你的创意，不仅是生成内容，更是构建一个完整的、可交互的角色生态小镇。',
    features: [
      '角色生态构建',
      '世界观拓展',
      'IP 规模化生产',
    ],
    status: '规划中',
    statusColor: 'bg-gray-100 text-gray-600',
  },
]

export default function FactorySection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-[#e9e6df]">
      <div className="max-w-7xl w-full px-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold italic mb-4">厂房布局 · FACTORY</h2>
          <div className="w-24 h-1 bg-red-800" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {factories.map((factory) => (
            <div
              key={factory.number}
              className="factory-card p-8 relative overflow-hidden group cursor-pointer flex flex-col h-full"
            >
              <div className="text-6xl font-bold text-gray-100 absolute top-4 right-8">
                {factory.number}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold">{factory.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${factory.statusColor}`}>
                  {factory.status}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {factory.description}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {factory.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-red-800" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center border-t border-black/10 pt-4">
                <span className="text-xs font-black tracking-widest uppercase text-gray-400">
                  {factory.subtitle}
                </span>
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
