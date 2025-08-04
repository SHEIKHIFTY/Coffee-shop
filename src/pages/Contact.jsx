import contactImage from "../assets/contact.jpg";

export default function Contact() {
  return (
    <div className="pt-28 bg-[#f6f0e8] min-h-screen flex justify-center items-start pb-6">
      <div className="container max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side Image - Hidden on mobile */}
        <div className="hidden md:block md:w-1/2">
          <img src={contactImage} alt="Contact" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 px-4 sm:px-6 md:pr-8 flex flex-col justify-center mt-8 md:mt-20 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 font-serif text-[#2f2a25] text-center md:text-left">
            Fill the form to share your thoughts.
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">E-Mail Address</label>
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none mb-6"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                placeholder="Write your message"
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none mb-6"
              ></textarea>
            </div>

            <div className="flex items-start text-xs">
              <input type="checkbox" className="mr-2 mt-1" />
              <p>
                By continuing, you agree to MR. Cafe Terms of Use and Privacy Policy.
              </p>
            </div>

            <button
              type="submit"
              className="bg-yellow-700 text-white px-6 py-2 rounded text-sm mt-6 mb-10 hover:bg-yellow-800 transition"
            >
              SEND
            </button>
          </form>

          {/* Contact Info + Map */}
          <div className="mt-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-sm text-[#2f2a25]">
              
              {/* Contact Info */}
              <div className="w-full md:w-1/2 space-y-2">
                <p>📞 09678 - 282 - 828</p>
                <p>📱 01821 - 422 - 222</p>
                <p>📧 info@abovebd.com</p>
                <p>📍 Above IT House# 20, Road# 09, Sector# 11, Dhaka 1230</p>
              </div>

              {/* Map */}
              <div className="w-full md:w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.973690698953!2d90.37464377508158!3d23.784270387205598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f2db4e003%3A0x36df348a1c3c8cb1!2sAbove%20IT!5e0!3m2!1sen!2sbd!4v1691033082301!5m2!1sen!2sbd"
                  width="100%"
                  height="160"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
