export default function TwoCards() {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 mt-30 gap-6">

      {/* ---------------- LEFT CARD (35% width) ---------------- */}
      <div className="md:col-span-4">
        <div className="
          bg-black border border-white/10 rounded-3xl p-8 h-full 
          transition-all duration-300 
          hover:scale-[1.03] hover:border-[#1AADE4] 
          hover:shadow-[linear-gradient(135deg,#1AADE4,#334651)]
        ">
          <h2 className="text-2xl font-semibold text-white mb-3">Quick &amp; Easy Register</h2>
          <p className="text-gray-400 mb-6">
            Quick and simple registration process with multiple authentication options
            including Discord and Telegram integration.
          </p>

          {/* ---- INNER CARD -> IMAGE ---- */}
          <div className="bg-[#0f0f16] rounded-2xl p-6 border border-white/8">
            <img
              src="/quickeasy.svg"
              alt="Inner preview"
              className="w-full h-72 md:h-80 rounded-xl object-cover"
            />
          </div>

        </div>
      </div>

      {/* ---------------- RIGHT CARD (65% width) ---------------- */}
      <div className="md:col-span-8">
        <div className="
          bg-black border border-white/10 rounded-3xl p-8 h-full 
          transition-all duration-300 
          hover:scale-[1.03] hover:border-[#1AADE4]
          hover:shadow-[linear-gradient(135deg,#1AADE4,#334651)]
        ">

          {/* Chat Preview Card */}
          <div className="bg-[#0f0f16] border border-white/8 rounded-3xl p-6">

            {/* Header */}
            <div className="bg-gray-800/40 rounded-2xl px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1AADE4] to-blue-500" />
                <div>
                  <p className="text-white font-semibold">Israin Solutions</p>
                  <p className="text-blue-400 text-sm">• Online</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-700/40" />
            </div>

            {/* Chat window mock */}
            <div className="h-56 bg-gradient-to-b from-[#0f0f16] to-[#12121c] mt-4 rounded-2xl" />

            {/* Input */}
            <div className="flex items-center mt-4 bg-gray-800/40 rounded-xl p-3 border border-white/5">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full bg-transparent outline-none text-gray-300 placeholder:text-gray-500"
              />
              <button className="ml-4 bg-gradient-to-br from-[#1AADE4] to-blue-500 p-3 rounded-xl text-white">
                ➜
              </button>
            </div>
          </div>

          {/* Text Block */}
          <h3 className="text-2xl font-semibold text-white mt-6 mb-2">
            Real-Time Communication &amp; Support
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Experience lightning-fast communication with our advanced WebSocket technology.
            Get instant responses from our expert support team, create and track support tickets
            seamlessly, and enjoy 24/7 availability with real-time notifications.
          </p>

        </div>
      </div>

    </div>
  );
}
