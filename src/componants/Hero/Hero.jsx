import heroImage from "/src/assets/images/Lash_Salon_Text_Removed.jfif";

function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen text-white flex items-center justify-center pt-80"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F6EDDE] bg-opacity-80"></div>

      {/* Content */}
      <div className="relative p-6 rounded text-center size-3/5 flex flex-col justify-center items-center text-Rose-Gold">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-dancing relative">
          Welcome to The Lash Lounge
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-3xl lg:text-4xl mb-3.5">
          Your trusted destination for professional lash services.
        </p>
        <p className="about-info hidden md:block md:text-3xl md:h-96">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab vel
          ducimus sunt perspiciatis? Veritatis iusto vel modi dolor, voluptas
          distinctio facere incidunt laudantium aliquid dolorem quam, omnis
          blanditiis, voluptatum ea architecto maiores. Ab, dolore asperiores
          voluptatibus id quod laborum quasi illum maiores consectetur nobis
          iste ducimus laboriosam voluptatum et. Dolorem ab exercitationem ipsam
          explicabo quo. Consequuntur optio hic tenetur numquam qui, ipsa itaque
          alias dolore quo, odit, porro rem error non fuga in minima debitis.
        </p>
        <button className="mt-6 px-4 md:px-6 py-2 bg-Rose-Gold hover:bg-Soft-Cream rounded text-white">
          Book Now
        </button>
      </div>
      <span
        className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-0.5 bg-Rose-Gold rounded-full"
        style={{ boxShadow: "0px 0px 8px rgba(183, 110, 121, 0.5)" }}
      ></span>
    </section>
  );
}

export default Hero;
