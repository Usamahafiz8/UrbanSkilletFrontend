import React from "react";
import BlogCard from "./blogCard";
import Uheading2 from "../uHeading/Uheadings";
import Uheading3 from "../uHeading/uHeading3";

const Blogs = ({ blogContent }) => {
  console.log(blogContent);

  const firstThreeBlogs = blogContent.slice(0, 3);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        gap: "16px",
      }}
    >
      <Uheading3
        styles={{
          fontSize: "36px",
        }}
      >
        OUR LATEST NEWS & ARTICLE
      </Uheading3>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
        }}
      >
        {firstThreeBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
