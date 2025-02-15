function Gallery() {
  const captions = [
    "The Lounge Experience",
    "Refined Beauty",
    "Elegance Defined",
    "Artistry in Every Detail",
    "Lounge Look",
    "Simply Luxe",
    "Crafted Perfection",
    "Timeless Style",
  ];
  return (
    <section id="gallery" className="bg-Soft-Grey py-12 text-Light-Gray">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-Rose-Gold">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            "https://media.istockphoto.com/id/1423915410/photo/blue-eyes-and-perfect-shapes-of-eyebrows-close-up-portrait-of-beautiful-young-girl-looking-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=j5CCf77jk4Tjp0YCAfl6A3fEsO9My1gge7M4NdJAgnk=",
            "https://images.unsplash.com/photo-1588398478692-d119ca406f7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGV5ZSUyMGxhc2glMjBleHRlbnNpb25zfGVufDB8MHwwfHx8Mg%3D%3D",
            "https://media.istockphoto.com/id/1348933794/photo/beautiful-afro-girl.webp?a=1&b=1&s=612x612&w=0&k=20&c=hG39Cc-a0A6qjf22-A1Cozl5OefXn736T1LL3Z5Wwbw=",
            "https://plus.unsplash.com/premium_photo-1661501523837-083813c782d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFrZSUyMGV5ZWxhc2h8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1530707114297-4af4b3cafe16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV5ZSUyMGxhc2glMjBleHRlbnNpb25zfGVufDB8MHwwfHx8Mg%3D%3D",
            "https://media.istockphoto.com/id/653926512/photo/blue-eye-with-makeup-macro-shot.webp?a=1&b=1&s=612x612&w=0&k=20&c=jENg8fQG3Nz5l-g9g6nwRE8NzyQnBxsqhQ3dMxXetiQ=",
            "https://images.unsplash.com/photo-1542647879-d84f68115c67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGV5ZSUyMGxhc2glMjBleHRlbnNpb25zfGVufDB8MHwwfHx8Mg%3D%3D",
            "https://images.unsplash.com/photo-1492618269284-653dce58fd6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGV5ZSUyMGxhc2glMjBleHRlbnNpb25zfGVufDB8MHwwfHx8Mg%3D%3D",
          ].map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group h-64"
            >
              <img
                src={src}
                alt={`Lash Work ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">{captions[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
