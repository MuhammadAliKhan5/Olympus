export default function LogoMarquee() {
  const items = [
    { src: "/bb.svg", label: "BB" },
    { src: "/bitcoin.svg", label: "Bitcoin" },
    { src: "/cardano.svg", label: "Cardano" },
    { src: "/dogecoin.svg", label: "Dogecoin" },
    { src: "/ethereum.svg", label: "Ethereum" },
    { src: "/litecoin.svg", label: "Litecoin" },
    { src: "/monero.svg", label: "Monero" },
    { src: "/polkadot.svg", label: "Polkadot" },
    { src: "/ripple.svg", label: "Ripple" },
    { src: "/solana.svg", label: "Solana" },
    { src: "/tether.svg", label: "Tether" },
  ];

  return (
    <div className="overflow-hidden w-full py-10 mt-20 bg-black">
      <div className="flex items-center gap-40 animate-marquee whitespace-nowrap">

        {/* FIRST LOOP */}
        {items.map((item, index) => (
          <div
            key={`first-${index}`}
            className="flex flex-col items-center transition-all duration-300 hover:scale-110"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-14 h-14 object-contain"
            />
            <p className="text-gray-300 text-sm mt-2">{item.label}</p>
          </div>
        ))}

        {/* SECOND LOOP */}
        {items.map((item, index) => (
          <div
            key={`second-${index}`}
            className="flex flex-col items-center transition-all duration-300 hover:scale-110"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-14 h-14 object-contain"
            />
            <p className="text-gray-300 text-sm mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
