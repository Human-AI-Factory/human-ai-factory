export default function SpiritSection() {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-10 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-12 gap-4 items-center">
        <div className="col-span-12 md:col-span-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            让中国动画的<span className="text-red-800">"精气神"</span>
            <br />
            焕发新生
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            致敬上海美术电影制片厂。
            <br />
            那些年，我们有《大闹天宫》《哪吒闹海》《九色鹿》《天书奇谈》...
          </p>
          <div className="border-l-4 border-red-800 pl-6 py-4 mb-8">
            <p className="text-gray-500 italic">
              时代更迭，"精气神"一度散落。
              <br />
              我们想做的，不过是——
            </p>
            <p className="text-lg font-bold text-gray-700 mt-2">
              让创作回归创作本身：更低门槛、更简工具、更加纯粹。
              <br />
              让更多中国好故事被看见。
            </p>
          </div>
          <p className="text-sm text-gray-400 mb-8">
            若干年后，若有人想起翻开这本旧画卷——
            <br />
            那是我们留给未来的礼物。
          </p>
          <div className="flex gap-4">
            <a
              href="#factory"
              className="bg-black text-white px-8 py-3 text-sm hover:bg-red-900 transition cursor-pointer"
            >
              探索厂房
            </a>
            <button className="border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition">
              开源社区
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <span className="text-[30rem] font-bold">沪</span>
        </div>
      </div>
    </div>
  )
}
