
const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <video
        muted
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center container px-4">
        <h1 className="text-4xl md:text-7xl font-bold font-primary">
          Cloudsuite Flemingo Services
        </h1>

        {/* 2-line spacing */}
        <div className="my-8"></div>

        <p className="text-base md:text-lg max-w-2xl font-secondary">
          At Cloudsuite Flemingo Services, we specialize in delivering tailored NetSuite ERP solutions to streamline your business processes and boost your productivity. With years of expertise, our certified professionals provide end-to-end NetSuite services that drive growth and innovation.
        </p>
      </div>
    </section>
  );
};

export default Hero;
