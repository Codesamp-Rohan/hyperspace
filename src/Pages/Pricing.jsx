const Pricing = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-[20vh] relative">
      <div className="w-screen h-[300px] bg-[#70f04230] blur-[100px] absolute left-0 top-[20%] rotate-[-15deg]"></div>
      <div className="w-[400px] h-[400px] bg-[#ea42f034] blur-[100px] absolute right-0 bottom-[50px]"></div>
      <h1 className="text-[3rem] font-bold flex flex-col leading-[5vh] md:leading-none md:flex-row items-center text-center gap-4 uppercase">
        <h1 className="gradient-text leading-[5vh]">Hyperspace GPU</h1> Pricing
      </h1>
      <p className="text-center w-[90%] md:w-auto">
        Powerful & cost-effective GPUs built to support any workload. GPUs are
        billed <br /> by the minute. No fees for ingress/egress.
      </p>
      <button className="py-2 px-4 linear--button text-[#000] rounded-lg font-bold">
        Get Started
      </button>
      <div className="w-[90vw] md:w-[80vw] text-[#b4bdad] ring-[1px] ring-[#234f0f] rounded-[10px] md:rounded-[30px] bg-[#e6e6e60e] backdrop-blur-lg my-[10vh] p-4 md:p-6">
        <div className="flex flex-col">
          <h1 className="font-bold text-[#ccd6c4] mb-2">
            Thousands of GPUs across 30+ Regions
          </h1>
          <p className="leading-[2vh]">
            Deploy any container on Secure Cloud. Public and private image
            <br /> repos are supported. Configure your environment the way you
            want.
          </p>
          <div className="flex items-center  justify-between flex-wrap mt-6">
            <span className="flex gap-2 items-center">
              <img className="w-[20px]" src="./hyperspace/pear.png"></img>
              <p>Zero fees for ingress/egress</p>
            </span>
            <span className="flex gap-2 items-center">
              <img className="w-[20px]" src="./hyperspace/pear.png"></img>
              <p>Global interoperability</p>
            </span>
            <span className="flex gap-2 items-center">
              <img className="w-[20px]" src="./hyperspace/pear.png"></img>
              <p>99.99% uptime</p>
            </span>
            <span className="flex gap-2 items-center">
              <img className="w-[20px]" src="./hyperspace/pear.png"></img>
              <p>$0.05/GB/month Network Storage</p>
            </span>
            <span className="flex gap-2 items-center">
              <img className="w-[20px]" src="./hyperspace/pear.png"></img>
              <p>Multi-region Support</p>
            </span>
          </div>
        </div>
        <hr className="border-[#234f0f] my-10" />
        <div className="flex flex-col md:items-center gap-4 priceChart overflow-x-scroll py-4 px-2">
          {pricing.map((gpu, i) => {
            return (
              <div
                key={i}
                className="w-[1080px] flex flex-col gap-4 bg-[#0000002f] rounded-[10px] ring-1 ring-[#234f0f] p-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <img className="w-[40px]" src={gpu.image}></img>
                    <div>
                      <span className="flex justify-between items-center">
                        <p className="text-[8px]">host: {gpu.host}</p>
                        <p className="text-[8px] font-bold">{gpu.location}</p>
                      </span>
                      <h1 className="text-[20px] tracking-wider font-bold">
                        {gpu.gpu}
                      </h1>
                      <span className="flex justify-between items-center">
                        <p className="text-[12px]">{gpu.gpuRam}</p>
                        <p className="text-[12px] font-bold">{gpu.gpuSpeed}</p>
                      </span>
                    </div>
                  </span>
                  <span className="flex items-center gap-6">
                    <div>
                      <div className="flex flex-col justify-between">
                        <p className="text-[12px]">{gpu.motherBoard}</p>
                        <p className="text-[8px] font-bold">
                          {gpu.GPUBandwidth}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-10 items-center">
                      <span>
                        <p className="text-[12px] font-bold flex items-center gap-1">
                          <img
                            className="w-[10px] rotate-[-90deg]"
                            src="./hyperspace/right-arrow.png"></img>
                          {gpu.uploadSpeed}
                        </p>
                        <p className="text-[12px] font-bold flex items-center gap-1">
                          <img
                            className="w-[10px] rotate-[90deg]"
                            src="./hyperspace/right-arrow.png"></img>
                          {gpu.downloadSpeed}
                        </p>
                      </span>
                      <p className="text-[14px]">{gpu.ports} ports</p>
                    </div>
                    <div>
                      <p className="text-[12px] font-bold">{gpu.DLPS} DLPS</p>
                    </div>
                  </span>
                  <div className="flex items-end gap-4">
                    <span>
                      <p className="text-[8px] font-bold">Verified</p>
                      <span className="flex items-center gap-1">
                        <p className="text-[12px] font-bold">Max duration</p>
                        <p className="text-[14px]">{gpu.maxDuration}</p>
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      <p className="text-[12px] font-bold">Reliability</p>
                      <p className="text-[14px]">{gpu.reliability}</p>
                    </span>
                  </div>
                  <div>
                    <p className="text-[14px] flex items-center gap-1">
                      <img
                        className="w-[14px]"
                        src="./hyperspace/flash.png"></img>
                      {gpu.price}
                    </p>
                    <button className="py-1 w-full linear--button text-[#000] rounded-[6px] font-bold">
                      Rent
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const pricing = [
  {
    image: "./hyperspace/pear.png",
    host: "134098",
    location: "Hong Kong, HK",
    gpu: "1x RTX 4090",
    gpuRam: "24GB",
    gpuSpeed: "3338.4 GB/s",
    motherBoard: "H12DSi",
    GPUBandwidth: "12.2GB/s",
    uploadSpeed: "889 Mbps",
    downloadSpeed: "864 Mbps",
    ports: "124",
    DLPS: "104",
    maxDuration: "11 Days",
    reliability: "99.67%",
    price: "50 Sats / min",
  },
  {
    image: "./hyperspace/pear.png",
    host: "134098",
    location: "Hong Kong, HK",
    gpu: "1x RTX 4090",
    gpuRam: "24GB",
    gpuSpeed: "3338.4 GB/s",
    motherBoard: "H12DSi",
    GPUBandwidth: "12.2GB/s",
    uploadSpeed: "889 Mbps",
    downloadSpeed: "864 Mbps",
    ports: "124",
    DLPS: "104",
    maxDuration: "11 Days",
    reliability: "99.67%",
    price: "50 Sats / min",
  },
  {
    image: "./hyperspace/pear.png",
    host: "134098",
    location: "Hong Kong, HK",
    gpu: "1x RTX 4090",
    gpuRam: "24GB",
    gpuSpeed: "3338.4 GB/s",
    motherBoard: "H12DSi",
    GPUBandwidth: "12.2GB/s",
    uploadSpeed: "889 Mbps",
    downloadSpeed: "864 Mbps",
    ports: "124",
    DLPS: "104",
    maxDuration: "11 Days",
    reliability: "99.67%",
    price: "50 Sats / min",
  },
  {
    image: "./hyperspace/pear.png",
    host: "134098",
    location: "Hong Kong, HK",
    gpu: "1x RTX 4090",
    gpuRam: "24GB",
    gpuSpeed: "3338.4 GB/s",
    motherBoard: "H12DSi",
    GPUBandwidth: "12.2GB/s",
    uploadSpeed: "889 Mbps",
    downloadSpeed: "864 Mbps",
    ports: "124",
    DLPS: "104",
    maxDuration: "11 Days",
    reliability: "99.67%",
    price: "50 Sats / min",
  },
  {
    image: "./hyperspace/pear.png",
    host: "134098",
    location: "Hong Kong, HK",
    gpu: "1x RTX 4090",
    gpuRam: "24GB",
    gpuSpeed: "3338.4 GB/s",
    motherBoard: "H12DSi",
    GPUBandwidth: "12.2GB/s",
    uploadSpeed: "889 Mbps",
    downloadSpeed: "864 Mbps",
    ports: "124",
    DLPS: "104",
    maxDuration: "11 Days",
    reliability: "99.67%",
    price: "50 Sats / min",
  },
];

export default Pricing;
