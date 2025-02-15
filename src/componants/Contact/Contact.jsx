

function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
        <p className="mb-6">123 Lash Street, Your City, ST 12345</p>
        <div className="mb-6 md:block hidden">
          {" "}
          {/* Show only on medium screens and up */}
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.google.com/maps/embed?..."
          ></iframe>
        </div>
        <p>Email: info@thelashlounge.com | Phone: (123) 456-7890</p>
      </div>
    </section>
  );
}

export default Contact
