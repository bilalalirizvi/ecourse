import React from "react";
import {
  TransparentPricing,
  GetStartedNow,
  WhatYouWillLearn,
  Footer,
} from "../screens";

const Pricing = () => {
  return (
    <>
      <TransparentPricing />
      <GetStartedNow color={"white"} />
      <WhatYouWillLearn color={"white"} />
      <Footer />
    </>
  );
};

export default Pricing;
