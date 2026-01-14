import React from "react";

const FeaturedHeadlines = () => {
  return (
    <div>
      {/* headers */}
      <section>
        <h1 className=" p-10 text-4xl text-gray-500 font-bold">
          <span className="text-red-800">||</span> Featured Headlines
        </h1>
      </section>
      {/* Featured Headlines */}
      <section>
        <div className="hero bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <img
                src="https://www.aljazeera.com/wp-content/uploads/2024/05/AFP__20071012__DV245081__v3__Preview__MideastIsraelArmyDrone-1715763048.jpg?resize=570%2C380&quality=80"
                className=" rounded-lg shadow-2xl"
              />
              <h2 className="text-red-600 font-bold p-2">EXPLAINER</h2>
            </div>
            <div className=" p-3 border-gray-600 shadow-2xl shadow-red-700">
              <h1 className="text-5xl font-bold text-black">
                Which countries made the biggest deals with Israel in 2025?
              </h1>
              <p className="py-6 text-gray-600">
                Israel signed several record multibillion-dollar gas, technology
                and military deals with its trading partners last year.
              </p>
              <button className="btn btn-soft btn-error bg-red-900 text-gray-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Headlines 2 */}
      <section>
        <div className="hero bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <img
                src="https://www.aljazeera.com/wp-content/uploads/2026/01/epa_6963c2306ea3-1768145456.jpg?resize=770%2C513&quality=80"
                className=" rounded-lg shadow-2xl"
              />
              <h2 className="text-red-600 font-bold p-2">EXPLAINER</h2>
              <p className="text-black font-bold">
                Will Elon Musk’s X changing the Iranian flag have any impact on
                the ground?
              </p>
            </div>
            <div>
              <img
                src="https://www.aljazeera.com/wp-content/uploads/2026/01/AP25051480465563-1768024013.jpg?resize=770%2C513&quality=80"
                className=" rounded-lg shadow-2xl"
              />
              <h2 className="text-red-600 font-bold p-2">EXPLAINER</h2>
              <p className="text-black font-bold">
                India-Bangladesh tensions rock cricket, as sport turns
                diplomatic weapon.
              </p>
            </div>
            <div>
              <img
                src="https://www.aljazeera.com/wp-content/uploads/2026/01/2026-01-08T173549Z_792637862_RC2IMDAWFN9L_RTRMADP_3_USA-TRUMP-GREENLAND-1767897055.jpg?resize=770%2C513&quality=80"
                className=" rounded-lg shadow-2xl"
              />
              <h2 className="text-red-600 font-bold p-2">EXPLAINER</h2>
              <p className="text-black font-bold">
                Europe should prepare for Greenland’s annexation and end of
                NATO: Experts
              </p>
            </div>
            <div>
              <img
                src="https://www.aljazeera.com/wp-content/uploads/2025/11/IMG_7230-1762940949.jpg?resize=770%2C513&quality=80"
                className=" rounded-lg shadow-2xl"
              />
              <h2 className="text-red-600 font-bold p-2">EXPLAINER</h2>
              <p className="text-black font-bold">
                ‘I didn’t set out to break records’: Pakistan’s first female MMA
                fighter
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedHeadlines;
