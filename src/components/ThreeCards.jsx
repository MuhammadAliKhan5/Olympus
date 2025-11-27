export default function ThreeFeatureCards() {
  return (
      <div className="max-w-7xl mt-6 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ======================= CARD 1 ======================= */}
        <div className="group bg-[#141422] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.03] hover:border-[#1AADE4] hover:shadow-[0_0_25px_rgba(128,0,255,0.4)]">
          
          <h2 className="text-2xl font-semibold text-white mb-3">
            Premium Quality & Personalization
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Experience unmatched service quality with personalized solutions tailored to
            your unique needs and preferences.
          </p>

          {/* Inner Card */}
          <div className="bg-[#0f0f16] border border-white/5 rounded-2xl p-6">
            <img
              src="icons3.svg"
              alt="Inner section"
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>

        </div>

        {/* ======================= CARD 2 ======================= */}
        <div className="group bg-[#141422] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.03] hover:border-[#1AADE4] hover:shadow-[0_0_25px_rgba(128,0,255,0.4)]">

          {/* Inner Card */}
          <div className="bg-[#0f0f16] border border-white/5 rounded-2xl p-6 mb-6">
            <img
              src="fastproject.svg"
              alt="Inner graphic"
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>

          <h2 className="text-2xl font-semibold text-white mb-3">
            Fast Project Delivery
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Delivering unmatched speed without compromising quality. Streamlined
            workflow ensures delivery 3× faster than industry standards.
          </p>

        </div>

        {/* ======================= CARD 3 ======================= */}
        <div className="group bg-[#141422] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.03] hover:border-[#1AADE4] hover:shadow-[0_0_25px_rgba(128,0,255,0.4)]">

          <h2 className="text-2xl font-semibold text-white mb-3">
            Advanced Security
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Secure transactions powered by multi-layer authentication, encrypted
            communications, and 24/7 fraud detection.
          </p>

          {/* Inner Card (status box) */}
          <div className="bg-[#0f0f16] border border-white/5 rounded-2xl p-6">
            
            <p className="text-white font-semibold text-lg mb-3">Secured Transaction</p>

            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>100%</span>
            </div>

            <div className="w-full h-2 rounded-full bg-gray-700">
              <div className="h-full w-full bg-[#1AADE4] rounded-full"></div>
            </div>

            <div className="mt-6 text-gray-300">
              <p className="text-sm mb-1">Transaction Status</p>
              <div className="flex justify-between text-gray-400 text-sm py-2 border-b border-white/5">
                <span>Payment</span>
                <span>18:59:20</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm py-2 border-b border-white/5">
                <span>Processing</span>
                <span>18:59:22</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm py-2">
                <span>Approval</span>
                <span>18:59:24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
