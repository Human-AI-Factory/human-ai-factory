const roadmapItems = [
  {
    year: '2026',
    title: '打基础',
    description:
      '核心功能开发 | 技术验证 | 交付首批定制项目',
  },
  {
    year: '2027',
    title: '找 PMF',
    description:
      '产品市场匹配 | 早期用户积累 | 初步商业化验证',
  },
  {
    year: '2028',
    title: '规模化',
    description:
      '用户增长 | 收入增长 | 生态初步建立',
  },
]

export default function RoadmapSection() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center py-20 px-10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <h2 className="text-5xl font-bold italic mb-24 border-b border-white/20 pb-8">
          发展路径 · ROADMAP
        </h2>

        <div className="space-y-24">
          {roadmapItems.map((item) => (
            <div
              key={item.year}
              className="flex flex-col md:flex-row gap-8 items-baseline group opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <div className="text-4xl font-light italic text-red-700 group-hover:scale-110 transition-transform">
                {item.year}
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 underline decoration-red-800 underline-offset-8">
                  {item.title}
                </h4>
                <p className="text-gray-400 max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-20 -right-20 text-[25rem] font-bold text-white/5 pointer-events-none italic">
        FACTORY
      </div>
    </div>
  )
}
