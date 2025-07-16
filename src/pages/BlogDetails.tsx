import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const post = location.state?.post;

  if (!post) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">
          Blog not found. Please access this page from the blog listing.
        </p>
      </div>
    );
  }

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
            Blog Details
          </h2>
          <div className="flex items-center text-[#06062b] font-medium">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="mx-2">&#x3e;</span>
            <span className="cursor-pointer" onClick={() => navigate("/blogs")}>
              Blogs
            </span>
            <span className="mx-2">&#x3e;</span>
            <span className="cursor-pointer">
              Blog Details
            </span>
          </div>
        </div>
      </div>
    <section className="bg-white py-10">
      <div className="w-[83%] max-md:w-full mx-auto px-4">
        <p className="text-sm text-purple-700 mb-3 uppercase tracking-wide">
          {new Date(post.date).toLocaleDateString("en-GB")}
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          {post.title}
        </h1>
        <img
          src={post.image}
          alt="Blog"
          className="w-full lg:w-[80%] mb-6 rounded-lg"
        />
        <hr className="my-6" />
        <p className="text-gray-700 text-base leading-7">
          {post.descpt}
        </p>
      </div>
    </section>
    
    </main>
  );
};

export default BlogDetails;
