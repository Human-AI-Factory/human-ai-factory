export default function Footer() {
  return (
    <footer className="bg-white py-20 px-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="text-2xl font-bold text-red-800 mb-6 tracking-widest">
            沪漫工厂
          </div>
          <p className="text-gray-500 text-sm leading-loose">
            我们开源相关工具，欢迎创作者共建。<br />
            负责人：[待添加]<br />
            项目交流 / 投资接洽：[待添加]
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-xs tracking-widest uppercase text-gray-400">
            最新动态
          </h5>
          <ul className="text-xs space-y-4 font-bold text-gray-400">
            <li>[待添加]</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-xs tracking-widest uppercase text-gray-400">
            公众号 / DEMO
          </h5>
          <div className="w-24 h-24 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300">
            <span className="text-[10px] text-gray-400">QR CODE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
