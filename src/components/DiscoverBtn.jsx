export default function FancyButton() {
  return (
    <div className="w-full flex justify-center">
      <button
        className="px-8 py-4 rounded-2xl text-xl font-semibold text-white flex items-center justify-center gap-3 bg-gradient-to-r bg-black mt-30 tracking-widest border border-white/10 transition-all duration-300 hover:scale-[1.05] hover:border-[#1AADE4] hover:shadow-[linear-gradient(135deg,#1AADE4,#334651)]"
      >
        Discover All Services
        <span className="text-xl">➜</span>
      </button>
    </div>
  );
}
