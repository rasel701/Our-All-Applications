import React from "react";
import banner from "../../assets/assets/hero.png";
import downloads from "../../assets/assets/icon-downloads.png";
import ratings from "../../assets/assets/icon-ratings.png";
import revie from "../../assets/assets/icon-review.png";

const Banner = () => {
  return (
    <div>
      <section className="w-full flex flex-col items-center text-center mt-16">
        <div className="max-w-3xl">
          <div className="text-4xl text-center md:text-5xl font-bold text-gray-800">
            <h2>We Build </h2>
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </div>
          <p className="mt-4 text-gray-600">
            At <span className="font-semibold text-[#632EE3]">HERO.IO</span>, we
            craft innovative apps designed to make everyday life simpler,
            smarter, and more exciting. Our goal is to turn your ideas into
            digital experiences that truly make an impact.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button className="flex items-center gap-2 justify-center border-1 border-gray-400  px-4  rounded-lg bg-white transition">
              <img
                src="https://img.freepik.com/premium-vector/play-store-logo-vector-clip-art-icon-graphics-design-free-download_1302809-544.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Google Play"
                className="w-15"
              />
              <span className="font-bold">Google Play</span>
            </button>
            <button className="flex items-center gap-2 border-1 border-gray-400  px-4  rounded-lg bg-white transition">
              <img
                src="https://img.freepik.com/premium-photo/iphone-app-store-icon-apple-app-store-icon_740533-135.jpg?semt=ais_hybrid&w=740&q=80"
                alt="App Store"
                className="w-15"
              />
              <span className="font-bold">App Store</span>
            </button>
          </div>
        </div>

        <div className="mt-12">
          <img
            src={banner}
            alt="Hero Banner"
            className="w-[300px] md:w-[500px] lg:w-[600px] mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Bottom Section */}
        <div className=" w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-15 text-white">
          <h2 className="text-2xl md:text-4xl font-semibold mb-9">
            Trusted By Millions, Built For You
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div>
              <p className="text-[16px] opacity-80 text-[#FFFFFF]">
                Total Downloads
              </p>
              <h3 className="text-6xl font-bold">29.6M</h3>
              <p className="text-[16px] text-gray-200">
                21% More Than Last Month
              </p>
            </div>
            <div>
              <img src={downloads} alt="" />
            </div>
            <div>
              <p className="text-[16px] opacity-80 text-[#FFFFFF]">
                Total Reviews
              </p>
              <h3 className="text-6xl font-bold">906K</h3>
              <p className="text-[16px] text-gray-200">
                46% More Than Last Month
              </p>
            </div>
            <div>
              <img src={ratings} alt="" />
            </div>
            <div>
              <p className="text-[16px] opacity-80 text-[#FFFFFF]">
                Active Apps
              </p>
              <h3 className="text-6xl font-bold">132+</h3>
              <p className="text-[16px] text-gray-200">
                31 More Will Launch Soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
