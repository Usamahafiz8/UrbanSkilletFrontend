import React from "react";
import BlogCard from "./blogCard";
import Uheading2 from "../uHeading/Uheadings";
import Uheading3 from "../uHeading/uHeading3";
import useIsMobile800 from "../mobileView/mobileView800";

const Blogs = ({ blogContent }) => {
  const IsMobile = useIsMobile800();
  const firstThreeBlogs = blogContent.slice(0, IsMobile ? 1 : 3);

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
          fontSize: IsMobile ? "28px" : "36px",
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
