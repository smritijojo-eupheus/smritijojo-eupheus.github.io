import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import sliderPage1 from "../../assets/sliderPage1.jpg";
import sliderPage2 from "../../assets/sliderPage2.jpg";
import sliderPage3 from "../../assets/sliderPage3.jpg";
// import sliderPage3 from "../assets/sliderPage3.jpg";
// import sliderPage4 from "../assets/sliderPage4.jpg";
import sliderPage4 from "../../assets/sliderPage4.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Slider = () => {
  return (
    <AutoplaySlider
      cancelOnInteraction={false}
      interval={3000}
      play={true}
      animation="fallAnimation"
      className="!h-[500px] "

      // sx={{ height: "50px" }}
    >
      <div data-src={sliderPage1} className="h-[300px]" />
      <div data-src={sliderPage2} className="h-[300px]" />
      <div data-src={sliderPage3} className="h-[300px]" />
      <div data-src={sliderPage4} className="h-[300px]" />
    </AutoplaySlider>
  );
};
