import { Search } from "lucide-react";

export default function ExploreButton() {
  return (
    <div className="w-full flex justify-center">
      <button
        className="px-8 py-4 rounded-2xl text-xl font-medium text-white flex items-center justify-center gap-3 bg-gradient-to-r bg-black mt-16 tracking-widest border border-white/10 transition-all duration-300 hover:scale-[1.05] hover:border-[#1AADE4] hover:shadow-[0_0_25px_#1AADE4]"
      >
        Explore Full Portfolio
        <span className="text-2xl text-[#1AADE4]"></span>
        <Search className="w-6 h-6" />
      </button>
    </div>
  );
}






