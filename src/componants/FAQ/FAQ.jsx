

function FAQ() {
  return (
    <section id="faq" className="bg-Soft-Grey py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-Rose-Gold">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
          {/* FAQ Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-Rose-Gold">
            <button
              className="w-full flex justify-between items-center text-xl md:text-2xl font-semibold text-Rose-Gold"
              aria-expanded="false"
              aria-controls="faq1"
              onClick={() =>
                document.getElementById("faq1").classList.toggle("hidden")
              }
            >
              1. What are lash extensions?
              <span className="transform transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <p
              id="faq1"
              className="text-lg md:text-xl text-gray-700 mt-4 hidden transition-opacity"
            >
              Lash extensions are semi-permanent fibers that are attached to
              your natural eyelashes to make them look longer, fuller, and
              darker.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-Rose-Gold">
            <button
              className="w-full flex justify-between items-center text-xl md:text-2xl font-semibold text-Rose-Gold"
              aria-expanded="false"
              aria-controls="faq2"
              onClick={() =>
                document.getElementById("faq2").classList.toggle("hidden")
              }
            >
              2. How long do lash extensions last?
              <span className="transform transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <p
              id="faq2"
              className="text-lg md:text-xl text-gray-700 mt-4 hidden transition-opacity"
            >
              Typically, lash extensions last about 3-4 weeks with proper care.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-Rose-Gold">
            <button
              className="w-full flex justify-between items-st text-xl md:text-2xl font-semibold text-Rose-Gold"
              aria-expanded="false"
              aria-controls="faq3"
              onClick={() =>
                document.getElementById("faq3").classList.toggle("hidden")
              }
            >
              3. Can I wear mascara?
              <span className="transform transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <p
              id="faq3"
              className="text-lg md:text-xl text-gray-700 mt-4 hidden transition-opacity"
            >
              It’s generally advised to avoid mascara on lash extensions, as it
              can cause them to fall out prematurely.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-Rose-Gold">
            <button
              className="w-full flex justify-between items-center text-xl md:text-2xl font-semibold text-Rose-Gold"
              aria-expanded="false"
              aria-controls="faq4"
              onClick={() =>
                document.getElementById("faq4").classList.toggle("hidden")
              }
            >
              4. How to care for extensions?
              <span className="transform transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <p
              id="faq4"
              className="text-lg md:text-xl text-gray-700 mt-4 hidden transition-opacity"
            >
              Avoid getting them wet for the first 24 hours, and refrain from
              using oily products near the eyes.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-Rose-Gold">
            <button
              className="w-full flex justify-between items-center text-xl md:text-2xl font-semibold text-Rose-Gold"
              aria-expanded="false"
              aria-controls="faq5"
              onClick={() =>
                document.getElementById("faq5").classList.toggle("hidden")
              }
            >
              5. Are lash extensions safe?
              <span className="transform transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <p
              id="faq5"
              className="text-lg md:text-xl text-gray-700 mt-4 hidden transition-opacity"
            >
              Yes, when applied by a certified lash technician, they are safe
              and can be removed easily without damaging your natural lashes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ

