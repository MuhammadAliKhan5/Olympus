import { TiTick } from "react-icons/ti";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full py-20">
      <div className="mx-20 px-6 grid grid-cols-1 md:grid-cols-2 items-start gap-12">

        {/* LEFT TEXT */}
        <div>
          <h2 className="font-bold tracking-wider leading-normal text-7xl mt-40 text-[#1AADE4]">
            Innovating Your Digital Future
          </h2>

          <p className="text-white text-2xl font-semibold mt-5 leading-relaxed">
            Elevate your business with our expert services. We deliver innovative concepts
            and designs that make your brand stand out.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <TiTick className="text-white text-2xl" />
            <p className="text-white text-xl font-medium">
              Experienced team with a track record of success
            </p>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <TiTick className="text-white text-2xl" />
            <p className="text-white text-xl font-medium">
              Timely delivery without compromising quality
            </p>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <TiTick className="text-white text-2xl" />
            <p className="text-white text-xl font-medium">
              Transparent pricing with no hidden costs
            </p>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <TiTick className="text-white text-2xl" />
            <p className="text-white text-xl font-medium">
              Committed support from start to finish
            </p>
          </div>
          <div className="flex gap-20">
            <div>
              <h1 className="text-4xl font-bold text-[#1AADE4] mt-13">4500+</h1>
              <p className="text-white text-lg font-medium mt-4">Projects Completed</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#1AADE4] mt-13">98%</h1>
              <p className="text-white text-lg font-medium mt-4">Client Satisfaction</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#1AADE4] mt-13">24/7</h1>
              <p className="text-white text-lg font-medium mt-4">Ongoing Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – ALL THREE CARDS */}
        <div className="flex flex-col gap-5 w-full max-w-2xl mx-auto mt-35">

          {/* CARD 1 */}
          <div className="
        rounded-3xl 
        transition-all duration-500 
        bg-transparent 
        hover:scale-[1.03]
        hover:shadow-[linear-gradient(135deg,#1AADE4,#334651)]
        border border-white/10 hover:bg-[linear-gradient(135deg,#1AADE4,#334651)] 
        
    ">
            <div className="rounded-3xl bg-black backdrop-blur-xl 
                    border border-gray-700 shadow-2xl p-8">

              <h2 className="text-3xl font-bold text-white mb-6">
                Start Your Project Today
              </h2>

              <p className="text-gray-300 mb-2 text-lg">
                What service are you looking for?
              </p>

              <select
                className="w-full bg-transparent border border-white/20 
                   text-gray-300 px-4 py-3 rounded-xl 
                   focus:outline-none focus:border-[#1AADE4]">
                <option className="text-black">Select a service</option>
              </select>

              <p className="flex items-center gap-2 text-[#1AADE4] mt-3 text-sm">
                <span className="w-2 h-2 bg-[#1AADE4] rounded-full"></span>
                Please select a service to continue
              </p>

              <button
                disabled
                className="w-full mt-6 py-4 rounded-full bg-gray-800 
                   text-gray-300 cursor-not-allowed">
                Choose a Service
              </button>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="
        rounded-3xl 
        transition-all duration-500 
        bg-transparent 
        hover:scale-[1.03]
        hover:shadow-[linear-gradient(135deg,#1AADE4,#334651)]
        border border-white/10 hover:bg-[linear-gradient(135deg,#1AADE4,#334651)] 
    ">
            <div className="rounded-3xl bg-black backdrop-blur-xl 
                    border border-gray-700 shadow-2xl p-8">

              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white">
                  Order via Discord & Telegram
                </h2>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <p className="text-green-400 text-sm font-medium">Online Now</p>
                </div>
              </div>

              <p className="text-gray-300 mt-3 mb-6 text-lg">
                Get instant support and place your order directly on:
              </p>

              <div className="flex gap-4 mt-4">

                {/* Discord Button */}
                <button className="
                w-1/2 flex items-center justify-center gap-3 py-4 rounded-xl 
                bg-[#2b2d42]/40 border border-[#5865F2]/20 hover:border-[#229ED9] 
                transition-all duration-300">
                  <FaDiscord className="text-[#5865F2] text-2xl" />
                  <span className="text-[#5865F2] text-xl font-semibold">Discord</span>
                </button>

                {/* Telegram Button */}
                <button className="
                w-1/2 flex items-center justify-center gap-3 py-4 rounded-xl 
                bg-[#1b2a38]/40 border border-[#229ED9]/20 hover:border-[#229ED9] 
                transition-all duration-300">
                  <FaTelegramPlane className="text-[#229ED9] text-2xl" />
                  <span className="text-[#229ED9] text-xl font-semibold">Telegram</span>
                </button>

              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="
        rounded-3xl 
        transition-all duration-500 
        bg-transparent 
        hover:scale-[1.03]
        hover:shadow-[linear-gradient(135deg,#1AADE4,#334651)]
        border border-white/10 hover:bg-[linear-gradient(135deg,#1AADE4,#334651)] 
    ">

            <div className="rounded-3xl bg-black backdrop-blur-xl 
                    border border-gray-700 shadow-2xl p-5">

              {/* Stars */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400 text-lg">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-gray-300 text-base">
                  <span className="font-semibold text-white">4.9</span> from 4500+ reviews
                </p>
              </div>

              {/* Testimonial */}
              <p className="text-gray-200 italic text-lg leading-snug">
                "The Israin Solutions team delivered beyond our expectations. Professional, creative
                and always on time."
              </p>

              {/* Client */}
              <p className="text-gray-400 mt-1 text-base">
                — <span className="text-white font-medium">@alex_j</span> • Verified Client
              </p>

              {/* Dots */}
              <div className="flex justify-center items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-[#1AADE4]"></span>
                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
