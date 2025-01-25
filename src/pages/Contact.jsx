import React from "react";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Adding the access key to the form data
    formData.append("access_key", "231a9b4f-55bc-41c0-b5b0-169398579391");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 rounded-lg shadow-lg mt-48">
      {/* Left Column */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Call To Us Section */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="text-red-500 text-3xl">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Call To Us</h2>
            <p className="text-sm text-gray-600">
              We are available 24/7, 7 days a week.
            </p>
            <a
              href="https://wa.me/03331417145"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium hover:underline"
            >
              WhatsApp: +03331417145
            </a>
          </div>
        </div>
        <hr className="my-4" />
        {/* Write To Us Section */}
        <div className="flex items-center space-x-4">
          <div className="text-red-500 text-3xl">
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Write To Us</h2>
            <p className="text-sm text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <a
              href="mailto:sufiyanfaheem281@gmail.com"
              className="text-gray-800 font-medium hover:underline"
            >
              Email: sufiyanfaheem281@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone *"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            required
          ></textarea>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        <span className="block mt-4 text-center text-gray-700">{result}</span>
      </div>
    </div>
  );
}

export default Contact;
