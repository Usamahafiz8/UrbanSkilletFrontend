import React from "react";
import MainHeadBaner from "./mainheadBaner";
import MainBanner from "./mainBanner";
import FollowUp from "./followup";
import MonthBurgerBaner from "./monthBurgerBaner";
import Blogs from "../../blogs";
import { BlogContent } from "../../content/blogContent";
import AddSection from "./addSection";
import useIsMobile800 from "../../mobileView/mobileView800";

const Indexpage = () => {
  const IsMobile = useIsMobile800();
  return (
    <div>
      <MainHeadBaner />
      <MainBanner />
      <FollowUp />
      {!IsMobile && <MonthBurgerBaner />}
      <AddSection />
      <Blogs blogContent={BlogContent} />
    </div>
  );
};

export default Indexpage;
