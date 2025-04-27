"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import Section2 from "./sections/Section2";
import Section6 from "./sections/Section6";

interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: any;
  resources: boolean;
}

function Overview() {

 

  return (
    <div>
      <HeroSection />
      <Section2 />
      <Section6 />
    </div>
  );
}

export default Overview;
