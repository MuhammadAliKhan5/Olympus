export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 pt-20 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="space-y-6">
          <img
            src="/israin-logo.webp"
            alt="Logo"
            className="w-70 h-20 pb-5 pr-8 object-contain"
          />
          <p className="leading-relaxed text-gray-400">
            The Israin Solutions is committed to delivering innovative concepts and
            creations to clients. Permit our work to represent your service.
          </p>
          <div className="flex gap-4 text-xl">
            <i className="fa-brands fa-discord cursor-pointer hover:text-white"></i>
            <i className="fa-brands fa-telegram cursor-pointer hover:text-white"></i>
          </div>
        </div>
        <div className="space-y-5 ml-40 mt-4">
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">Status</li>
            <li className="hover:text-white cursor-pointer">Reviews</li>
            <li className="hover:text-white cursor-pointer">Patch Notes</li>
          </ul>
        </div>
        <div className="space-y-5 ml-16 mt-4 ">
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© 2025 The Israin Solutions. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <span className="text-[#1AADE4]">💙</span> by
          <span className="text-[#1AADE4] cursor-pointer hover:text-[#5CD6FF]">ApolloArt</span>
        </p>

      </div>
    </footer>
  );
}
