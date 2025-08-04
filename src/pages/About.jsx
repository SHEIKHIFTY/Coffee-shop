// src/pages/About.jsx
import about from "../assets/about.png";
import owner from "../assets/owner.jpg";
import story from "../assets/storybean.png";
import glass from "../assets/glass.jpg";


export default function About() {
  return (
    <div className="bg-[#f8f1e9] text-[#3b3b3b] pt-16 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Section - Our Story */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2 w-full">
            <img
              src={about}
              alt="Coffee beans illustration"
              className="w-full h-main object-contain mt-16"
            />
          </div>

          {/* Right: Text */}
          <div className="md:w-1/2 w-full pt-16">
            <h2 className="text-3xl font-semibold text-[#2d2d2d]">Our Story</h2>
            <p className="text-base leading-7">
              <span className="font-bold">MR. CAFE</span> - Coffee Roastery was established by founder Andres Piñeros in 2012 as a pop-up shop in Villavicencio – Colombia. Andres Piñeros moved to Los Angeles CA in early 2013 with the sole goal of establishing the brand and providing quality coffee and roasted beans to wholesale and retail customers across the state of California. The brand has been established from Piñeros’ deep relationship with coffee farmers and work directly with each and every farm from the coffee fields of Villavicencio – Colombia, ensuring a mutual standard of excellence. We believe transparent and honest communication with our coffee farmers is the cornerstone of our exotic, and rare specialty coffee in Los Angeles. And for our amazing farmers who produce top quality coffee in a country that delivers some of the best coffee in the world.
            </p>
          </div>
        </div>

        {/* Burlap Sack - Image Right, Text Left (storybean.png) */}
        <section classname="space-y-6">
        <div className="flex flex-col md:flex-row-reverse gap-10  items-center">
          <div className="md:w-1/3 w-full">
            <img
              src={story}
              alt="Burlap sack of coffee beans"
              className="w-full h-min object-contain rounded"
            />
          </div>
          <div className="md:w-2/3 w-full space-y-4">
            <p className="text-justify leading-7">
              Andres Filarez moved to Los Angeles, CA in early 2015 with the sole goal of popularizing the taste of premium Colombian specialty coffee in California. He established a roasting space and showroom to specialize in coffee culture while closely tracking beans throughout Colombia for quality and sourcing the best Colombian coffee beans. The first official storefront in Redondo Beach CA, opened its doors in 2016. Two years later, The Boy’s The Bee was able to bring a second shop to Culver City. By the end of 2019, Piñeros had opened three locations in the Los Angeles region, plus 3 welcoming neighborhood 5 minutes from LAX. The warm atmosphere of our cafes, our inviting aromas and our friendly staff will make you feel at home. At all locations, we are proud to offer the best Colombian coffee experience.
            </p>
          </div>
        </div>
        </section>

        {/* Cameron Williamson - Text Left, Image Right */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#2d2d2d]">Cameron Williamson</h2>
          <p className="text-base leading-7">
            Coffee & Meat Chef, South Congress Hotel
          </p>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 w-full space-y-4">
              <p className="text-base leading-7">
                Cameron Williamson, Texas, Chelsea Smith’s upbringing and family was all about food and time spent around the table, with her parents often cooking at home for their large family that would sometimes include up to 50 people. Smith developed a love of cooking from fond memories of baking with her grandmas – from five spice pie to cookies, and Dina, who always had bread and sheet cakes to snack on from her neighbors.
              </p>
              <p className="text-base leading-7">
                Upon completing the Le Cordon Bleu pastry program, Smith worked in several bake shops around Austin including the University of Texas, Central Market, and a private catering company. Smith then joined South Congress Hotel as part of its opening team, studying under New Waterloo Corporation Executive Pastry Chef Amanda Turner’s keen and precise eye. Chef, Lindsay Pirgg.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <img
                src={owner}
                alt="Cameron Williamson"
                className="w-full h-[350px] object-cover rounded"
              />
            </div>
          </div>
        </section>

        {/* Brand Identity - Image Left, Text Right */}
        <section className="space-y-6">
  {/* The h2 will now be inside the text container */}
  <div className="flex flex-col md:flex-row gap-10 items-center">
    <div className="md:w-1/2 w-full">
      <img
        src={glass}
        alt="Cafe Sign"
        className="w-full h-[350px] object-cover rounded"
      />
    </div>
    <div className="md:w-1/2 w-full space-y-4">
      {/* Moved the heading here */}
      <h2 className="text-3xl font-semibold text-[#2d2d2d] mb-4">Brand Identity</h2> {/* Added mb-4 for spacing */}
      <p className="text-base leading-7">
        The credibility for unique design and aesthetics have always featured a rustic yet modern coffee shop look. The minimal concept of our coffee shop, has elements of hand-treated wood, with the finest and organic finishes, to represent a raw and authentic coffee shop. The elements used to interpret the Colombian culture and speak to the rich history of the Piñeros, are showcased with the sounds and flavors created in the song of the tropical South American rain forests.
      </p>
      <p className="text-base leading-7">
        Mr. Cafe brand features metallic copper and natural weathered wood. From that foundation, we play with contrast and compliment. By utilizing variations of each, as well as plants and natural light. Our goal has always been to create mindful and inviting spaces where great ideas bloom and conversations flow. We are extremely proud to present each of our themed locations including The Black Stone, The Grey Store and The White Store.
      </p>
    </div>
  </div>
</section>
        {/* --- NEW SECTION: Frequently Asked Questions --- */}
        {/* The space-y-16 on the parent `max-w-7xl` div will provide the gap here */}
        <section className="py-10 text-center"> {/* py-10 for internal section padding */}
          <h2 className="text-4xl font-serif text-gray-800 mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8"> {/* Adjusted max-width and internal spacing */}

            {/* About Us Questions */}
            <h3 className="text-xl font-semibold text-gray-700">About Us</h3>
            <div className="space-y-4"> {/* Spacing between accordion items */}
              {/* Accordion Item 1 */}
              <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium text-gray-800">Are you Hiring?</p>
                <span className="text-gray-500 text-2xl">+</span>
              </div>
            </div>

            {/* Coffee & Drinks, Food Questions */}
            <h3 className="text-xl font-semibold text-gray-700 pt-6">Coffee & Drinks, Food</h3>
            <div className="space-y-4">
              {/* Accordion Item 2 */}
              <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium text-gray-800">When can I expect the ordered coffee to arrive at my doorstep?</p>
                <span className="text-gray-500 text-2xl">+</span>
              </div>
              {/* Accordion Item 3 */}
              <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium text-gray-800">What is the perfect brewing recipe for your coffees?</p>
                <span className="text-gray-500 text-2xl">+</span>
              </div>
              {/* Accordion Item 4 */}
              <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium text-gray-800">What is the difference between Classic Espresso & Modern Espresso?</p>
                <span className="text-gray-500 text-2xl">+</span>
              </div>
            </div>

            {/* Our Cafes Questions */}
            <h3 className="text-xl font-semibold text-gray-700 pt-6">Our Cafes</h3>
            <div className="space-y-4">
              {/* Accordion Item 5 */}
              <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium text-gray-800">When can I expect the ordered coffee to arrive at my doorstep?</p>
                <span className="text-gray-500 text-2xl">+</span>
              </div>
              {/* Accordion Item 6 */}
              <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium text-gray-800">What is the perfect brewing recipe for your coffees?</p>
                <span className="text-gray-500 text-2xl">+</span>
              </div>
              {/* Accordion Item 7 */}
              <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium text-gray-800">What is the difference between Classic Espresso & Modern Espresso?</p>
                <span className="text-gray-500 text-2xl">+</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- NEW SECTION: Still Have Questions (Contact Form) --- */}
        {/* The space-y-16 on the parent `max-w-7xl` div will provide the gap here */}
        <section className="py-10 text-center"> {/* py-10 for internal section padding */}
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Still Have Questions</h2>
          <p className="text-base text-gray-600 mb-10 max-w-lg mx-auto">
            Please Fill Out Our Contact Form, We Will Get Back To You As Soon As Possible.
          </p>

          <form className="max-w-3xl mx-auto bg-white p-8 rounded shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <label htmlFor="fullName" className="block text-left text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="enter your name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-700"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="emailAddress" className="block text-left text-sm font-medium text-gray-700 mb-2">E-Mail Address</label>
              <input
                type="email"
                id="emailAddress"
                placeholder="enter your e-mail"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-700"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="phoneNumber" className="block text-left text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="enter your phone number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-700"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="subject" className="block text-left text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                id="subject"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-700 appearance-none bg-white pr-8" // appearance-none for custom arrow
              >
                <option value="">select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Question</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div className="md:col-span-2"> {/* Message input spans two columns */}
              <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                placeholder="write you message"
                rows="6"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-700 resize-y"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-yellow-700 text-white px-8 py-3 rounded-md hover:bg-yellow-800 transition duration-300 font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

      </div>
    </div>
  );
}