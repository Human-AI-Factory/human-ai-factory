export default function ProjectsSection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <div className="text-red-800 font-bold mb-4 tracking-[0.3em]">
            CURRENT PROJECT
          </div>
          <h2 className="text-5xl font-bold mb-8 leading-tight">
            课本重现计划
          </h2>
          <p className="text-gray-600 text-lg leading-loose mb-8">
            我们在收集几十年前的小学语文课本，从中挑选具有代表性的作品进行 AI 动漫化重构。
            <strong>技术不是壁垒，创意先行。</strong>
            我们在不完善的技术中，寻找最纯粹的艺术表达。
          </p>
          <div className="p-6 bg-white shadow-sm border-l-4 border-red-800 italic text-sm text-gray-500">
            "重温 Old Color，重拾那个时代的审美巅峰。"
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full h-[500px] shadow-2xl rounded-sm overflow-hidden relative group">
            {/* 颜色块占位 - 带水墨风格装饰 */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-red-50 to-amber-100">
              {/* 装饰性墨点 */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-amber-200/30" />
              <div className="absolute top-20 left-20 w-8 h-8 rounded-full bg-amber-300/20" />
              <div className="absolute bottom-16 right-12 w-24 h-24 rounded-full bg-red-100/40" />
              <div className="absolute bottom-32 right-8 w-12 h-12 rounded-full bg-amber-200/30" />
              {/* 装饰线条 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-amber-300/30 rotate-45" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-red-200/30 rotate-45" />
            </div>
            {/* 悬停效果 */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
            {/* 文字标签 */}
            <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 shadow-sm">
              <span className="font-bold text-lg text-amber-900">课本重现 v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
