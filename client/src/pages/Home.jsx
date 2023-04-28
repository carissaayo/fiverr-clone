import React from "react";
import About from "../components/HomeComponents/About";
import Featured from "../components/HomeComponents/Featured";
import Partners from "../components/HomeComponents/Partners";
import Projects from "../components/HomeComponents/Projects";
import Slider from "../components/HomeComponents/Slider";

const Home = () => {
  return (
    <div className="">
      <Featured />
      <Partners />
      <Slider/>
      <About/>
      <Projects/>
    </div>
  );
};

export default Home;
