import React from "react";
import MainHeadBaner from "./mainheadBaner";
import MainBanner from "./mainBanner";
import FollowUp from "./followup";
import MonthBurgerBaner from "./monthBurgerBaner";
import Blogs from "../../blogs";
import { BlogContent } from "../../content/blogContent";

const Indexpage = () => {
  return (
    <div>
      <MainHeadBaner />
      <MainBanner />
      <FollowUp />
      <MonthBurgerBaner />
      <Blogs blogContent={BlogContent} />
    </div>
  );
};

export default Indexpage;
