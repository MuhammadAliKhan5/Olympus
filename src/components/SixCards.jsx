export default function SixCards() {
  const cards = [
    {
      title: "QuickBoosts",
      desc: "Boosting Service",
      img: "/quickboost.gif",
    },
    {
      title: "BoostHub",
      desc: "Boosting Service",
      img: "/boosthub.png",
    },
    {
      title: "LiteSupplies",
      desc: "Upgrade Service",
      img: "/litesupplies.png",
    },
    {
      title: "ShiftProxy",
      desc: "Proxy Service",
      img: "/shiftproxy.png",
    },
    {
      title: "PumpShot",
      desc: "Crypto",
      img: "/pumpshot.png",
    },
    {
      title: "Agora",
      desc: "Service Provider",
      img: "/agora.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-7xl mx-auto py-20">

      {cards.map((card, index) => (
        <div
          key={index}
          className="
            bg-[#0b0b17] 
            rounded-[28px]
            overflow-hidden 
            border border-white/10 
            transition-all duration-500
            hover:scale-[1.03]
            hover:shadow-[0_0_25px_rgba(128,0,255,0.3)]
            hover:border-[#1AADE4]
          "
        >

          {/* IMAGE */}
          <div className="relative w-full h-56">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover"
            />

            {/* Badge */}
            <span className="
              absolute bottom-3 right-3 
              text-xs text-gray-300 
              bg-black/40 px-3 py-1 
              rounded-full border border-white/10
            ">
              Logo
            </span>
          </div>

          {/* CONTENT */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{card.desc}</p>

            {/* Link */}
            <a
              href="#"
              className="
                inline-flex items-center gap-2 text-sm 
                text-[#1AADE4] mt-4 group
              "
            >
              View project
              <span className="transition-all duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>
      ))}

    </div>
  );
}
