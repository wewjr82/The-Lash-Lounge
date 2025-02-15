function Introduction() {
  return (
    <section id="the-team" className="bg-Soft-Grey py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-4xl font-bold mb-6 text-Rose-Gold">
          Meet the Team
        </h2>
        <p className="text-base md:text-2xl mb-8 text-Dark-Gray">
          Our talented lash artists are here to give you the best experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Add team images */}
          <img
            src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZSUyMGJsYWNrJTIwd29tYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHwwfDB8fHwy"
            alt="Team Member"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1649642828190-d6f6f71702d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhY2UlMjBibGFjayUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MHwwfDB8fHwy"
            alt="Team Member"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZSUyMGJsYWNrJTIwd29tYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHwwfDB8fHwy"
            alt="Team Member"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <span
        className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-16 h-0.5 bg-Rose-Gold rounded-full"
        style={{ boxShadow: "0px 0px 8px rgba(183, 110, 121, 0.5)" }}
      ></span>
    </section>
  );
}

export default Introduction;
