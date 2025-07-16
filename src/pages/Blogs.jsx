import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogData = [
    {
      id: 1,
      title: "Introduction to BTJ Non Brokerage",
      image: "/blogs/introduction.jpg",
      descpt:
        "In today's fast-paced real estate and investment world, traditional brokerage models often come with high commissions and complex processes. BTJ Non Brokerage offers a fresh, making transactions more direct, transparent, and cost-effective.",
      date: "2025-04-13",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Why You Should Own a Property in 2025",
      image: "/blogs/prop3.jpg",
      descpt:
        "The real estate market is constantly evolving, and 2025 presents a unique opportunity for homebuyers and investors alike. If you’re still on the fence about purchasing a property, here are some compelling reasons why owning real estate in 2025 is a smart decision.",
      date: "2025-04-10",
      time: "2:30 PM",
    },
    {
      id: 3,
      title: "List Your Property On BTJ Non Brokerage",
      image: "/blogs/listing.jpg",
      descpt:
        "Looking to rent your property? Listing it on our website is a quick and easy way to reach a wider audience of potential renters. With our user-friendly platform, complete with high-quality photos and key information.",
      date: "2025-04-08",
      time: "1:15 PM",
    },
  ];

  return (
    <main>
      <div className="relative mt-[-70px] z-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(-45deg, #fcbfad, #c5face, #b6e8fa, #adf3e3, #f7b5ba, #cbabf5, #e9f5a5)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
          }}
        ></div>
        <div className="relative h-[250px] flex flex-col justify-end pb-12 px-4 md:px-32">
          <h2 className="text-[22px] max-md:leading-4 md:text-3xl font-bold text-[#06062b] mb-2 max-md:mb-2">
            Blogs
          </h2>
          <div className="flex items-center text-[#06062b] font-medium">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="mx-2">&#x3e;</span>
            <span className="cursor-pointer" onClick={() => navigate("/blogs")}>
              Blogs
            </span>
          </div>
        </div>
      </div>
      <section className="bg-white flex flex-col lg:flex-row mt-6 mb-6">
        <div className="flex flex-wrap gap-6 justify-center w-full p-6 max-md:p-4 rounded-lg shadow-sm">
          {blogData.map((post) => {
            const image = post.image || "/asset/image/blog/default-blog.jpg";
            return (
              <Link
                key={post.id}
                to={`/blog-details/${post.id}`}
                state={{ post }}
                className="w-full sm:w-[360px] transition-all"
              >
                <div className="flex flex-col bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition duration-300">
                  <div className="bg-cover bg-center">
                    <img src={image} alt="" className="h-[200px] w-full" />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-2xl font-semibold text-gray-800 transition truncate">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-md leading-6 tracking-wide">
                      {post.descpt}
                    </p>

                    <div className="text-[15px] text-gray-500 flex gap-2 mb-4 !mt-4">
                      <div className="border w-fit px-3 py-1 rounded-lg border-[#373373] text-[#373373]">
                        Apartment
                      </div>
                      <div className="border w-fit px-3 py-1 rounded-lg border-[#373373] text-[#373373]">
                        House
                      </div>
                      <div className="border w-fit px-3 py-1 rounded-lg border-[#373373] text-[#373373]">
                        Land
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Blog;
