import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { TbSparkles } from "react-icons/tb";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-[95%] left-1/2 -translate-x-1/2 top-3 z-50 transition-all duration-300 
        rounded-full
        ${scrolled ? "backdrop-blur-lg bg-white/10 shadow-xl" : "bg-white/5"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT: Logo */}
        <div className="w-70 h-20 hover:w-72">
          <img src="israin-logo.webp" alt="" />
        </div>

        {/* CENTER: Menu Items */}
        <ul className="hidden md:flex gap-10 text-white font-medium text-lg">
          <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
          <li className="hover:text-gray-300 cursor-pointer">Status</li>
          <li className="hover:text-gray-300 cursor-pointer">Jobs</li>
          <li className="hover:text-gray-300 cursor-pointer">Reviews</li>
          <li className="hover:text-gray-300 cursor-pointer">Docs</li>
        </ul>

        {/* RIGHT: Text + Button */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-white text-lg">Login</span>
    <div className="
        p-[2px]
        rounded-full
        bg-gradient-to-r bg-[linear-gradient(to_right,#334651,#1AADE4)]
        inline-block
    ">
      <button
        className="
          px-8 py-3
          rounded-full
          bg-[#1f2544]
          hover:bg-[#262d55]
          text-white
          text-lg
          font-semibold
          flex items-center gap-2
          transition-all duration-300
        "
      >
        Get Started
        <TbSparkles className="text-xl" />
      </button>
    </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-lg px-6 py-4 text-white rounded-b-full">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Contact</li>
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            <span>Need Help?</span>
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
