// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// // Sample dummy data (পরে backend API থেকে fetch করতে পারবে)
// const breakingNewsData = [
//   {
//     _id: "1",
//     title: "Bangladesh plane crash: What happened, what’s the latest",
//     image:
//       "https://www.aljazeera.com/wp-content/uploads/2025/07/afp_687e38353d23-1753102389.jpg?resize=730%2C410&quality=80",
//     category: "Environment",
//     publishedAt: "2026-01-14T10:00:00Z",
//   },
//   {
//     _id: "2",
//     title: "Bangladesh Wins Gold in International Sports",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhiQ8hJdHDH1Pn20q1vobwNYUqsmme02UsA&s",
//     category: "Sports",
//     publishedAt: "2026-01-13T18:30:00Z",
//   },
//   {
//     _id: "3",
//     title: "Tech Startup Raises $5M Investment",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9_9ncGXfpTqYc5sjwLRJYbyIZyBbKB5iZA&s",
//     category: "Business",
//     publishedAt: "2026-01-12T09:15:00Z",
//   },
// ];

// const BreakingNews = () => {
//   const mainNews = breakingNewsData[0];
//   const sideNews = breakingNewsData.slice(1);

//   return (
//     <section className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Main Breaking News */}
//         <Link href={`/news`} className="lg:col-span-2 group relative">
//           <div className="relative w-full h-64 lg:h-80">
//             <Image
//               src={mainNews.image}
//               alt={mainNews.title}
//               fill
//               className="object-cover rounded-lg"
//               priority
//             />
//             <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
//               BREAKING
//             </span>
//           </div>
//           <h2 className="mt-4 text-xl lg:text-2xl font-bold text-slate-900 group-hover:underline">
//             {mainNews.title}
//           </h2>
//           <p className="text-sm text-slate-500">
//             {new Date(mainNews.publishedAt).toDateString()}
//           </p>
//         </Link>

//         {/* Side Headlines */}
//         <div className="space-y-4 flex flex-col justify-between">
//           {sideNews.map((news) => (
//             <Link key={news._id} href={`/news`} className="flex gap-4 group">
//               <div className="relative w-24 h-20 flex-shrink-0">
//                 <Image
//                   src={news.image}
//                   alt={news.title}
//                   fill
//                   className="object-cover rounded"
//                 />
//               </div>
//               <div>
//                 <span className="text-xs text-red-600 font-medium uppercase">
//                   {news.category}
//                 </span>
//                 <h3 className="text-sm font-semibold text-slate-800 group-hover:underline">
//                   {news.title}
//                 </h3>
//                 <p className="text-xs text-slate-500">
//                   {new Date(news.publishedAt).toDateString()}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BreakingNews;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample dummy data
const breakingNewsData = [
  {
    _id: "1",
    title: "Bangladesh plane crash: What happened, what’s the latest",
    image:
      "https://www.aljazeera.com/wp-content/uploads/2025/07/afp_687e38353d23-1753102389.jpg?resize=730%2C410&quality=80",
    category: "Environment",
    publishedAt: "2026-01-14T10:00:00Z",
  },
  {
    _id: "2",
    title: "Bangladesh Wins Gold in International Sports",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhiQ8hJdHDH1Pn20q1vobwNYUqsmme02UsA&s",
    category: "Sports",
    publishedAt: "2026-01-13T18:30:00Z",
  },
  {
    _id: "3",
    title: "Tech Startup Raises $5M Investment",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9_9ncGXfpTqYc5sjwLRJYbyIZyBbKB5iZA&s",
    category: "Business",
    publishedAt: "2026-01-12T09:15:00Z",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const BreakingNews = () => {
  const mainNews = breakingNewsData[0];
  const sideNews = breakingNewsData.slice(1);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Breaking News */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <Link href={`/news`} className="group relative block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-64 lg:h-80"
            >
              <Image
                src={mainNews.image}
                alt={mainNews.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                BREAKING
              </span>
            </motion.div>

            <motion.h2
              className="mt-4 text-xl lg:text-2xl font-bold text-slate-900 group-hover:underline"
              whileHover={{ x: 4 }}
            >
              {mainNews.title}
            </motion.h2>

            <p className="text-sm text-slate-500">
              {new Date(mainNews.publishedAt).toDateString()}
            </p>
          </Link>
        </motion.div>

        {/* Side Headlines */}
        <div className="space-y-4 flex flex-col justify-between">
          {sideNews.map((news, i) => (
            <motion.div
              key={news._id}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/news`} className="flex gap-4 group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-24 h-20 flex-shrink-0"
                >
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover rounded"
                  />
                </motion.div>

                <div>
                  <span className="text-xs text-red-600 font-medium uppercase">
                    {news.category}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-800 group-hover:underline">
                    {news.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {new Date(news.publishedAt).toDateString()}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;
