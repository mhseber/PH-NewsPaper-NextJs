"use client";
import { FiArrowRight } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const LatestNewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news data from the public directory

  useEffect(() => {
    fetch("newsData/LatestNewsFeed.JSON")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-400 text-lg">
        Loading latest news...
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="px-4 md:px-10">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-10 text-3xl md:text-4xl font-bold text-gray-500"
        >
          <span className="text-red-800">||</span> Latest News Feed
        </motion.h1>
      </section>

      {/* News List */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-16"
      >
        {news.map((item) => (
          <motion.section
            key={item.id}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="px-4 md:px-10"
          >
            <div className="hero bg-base-200 rounded-2xl">
              <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                {/* Image */}
                <div className="hover-3d w-full lg:w-1/2">
                  <figure className="rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[220px] sm:h-[300px] lg:h-[340px] object-cover"
                    />
                  </figure>

                  {/* 3D placeholders */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i}></div>
                  ))}
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 shadow-xl shadow-red-700/20 p-4 md:p-6 rounded-xl">
                  <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 leading-snug">
                    {item.title}
                  </h2>

                  <div className="space-y-2 text-gray-500 font-medium text-sm md:text-base">
                    {item.highlights.map((point, index) => (
                      <p key={index}>• {point}</p>
                    ))}
                  </div>

                  <button className="btn mt-3  flex items-center gap-2 text-red-700 p-4 font-semibold group">
                    Read Full Story
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </motion.div>
    </div>
  );
};

export default LatestNewsFeed;
