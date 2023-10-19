import React from "react";
import { Slider } from "../components/Slider/slider";
import mainpage from "./images/mainpage.jfif";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ProductImage from "../assets/ProductImage.jpg";
import RadioButtons from "../components/RadioCard/RadioCard";
import { Button } from "@mui/joy";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CallIcon from "@mui/icons-material/Call";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Footer from "../components/Footer/Footer";

const Website = () => {
  return (
    <div className=" flex flex-col  w-screen min-h-screen  ">
      <div className="flex justify-center items-center bg-slate-200 p-1 w-full ">
        $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE BAG
        WITH PURCHASES $250+
      </div>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        {/* <img src={mainpage} className="w-full h-1/2"></img> */}
        <Slider />
      </div>

      <div className="mt-[5%] ml-[5%]">
        <div className="flex justify-center text-[3rem] animate-bounce">
          WE LOVE {""}
          <div className="hover:text-red-700">
            <FavoriteIcon />
          </div>
        </div>
        <div className="flex gap-[5%] flex-wrap mt-[5%]">
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
        </div>
        <div className="min-h-1/2 !ml-0">
          <video playsInline autoPlay loop muted>
            <source
              src="https://images.vinovathemes.com/prestashop_salehub/video_1.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div>
          <div className="flex justify-center text-[3rem] animate-bounce my-[4rem]">
            FEATURED PRODUCTS
          </div>
          <div className="flex gap-[5%] ">
            <div>
              <img
                src={ProductImage}
                alt="ProductImage"
                width="600px"
                height="100px"
              ></img>
            </div>
            <div className="flex-col w-[30%] p-4 mt-[5%]">
              <a href="/" className="text-[1.5rem]">
                Levi's Essential Western Denim Shirt
              </a>
              <div className="text-black font-bold">$150</div>
              <div className="hidden group-hover:block">
                <del className="text-slate-400 font-bold">$16.68</del>
              </div>
              <div className="my-[2.5rem]">
                <label>color:</label>
                <RadioButtons />
              </div>

              <div className="my-[1rem]">
                <Button className="!bg-slate-400 w-full">ADD TO CART</Button>
              </div>
              <div>
                <Button className="!bg-black w-full">ADD TO CART</Button>
              </div>
              <div className="my-[1rem]">
                Steele's Lena Dress features a smocked bust, off the shoulder
                sleeves with eyelet design, and mini cut skirt with raw hem.
              </div>
              <div className="my-[1rem]">
                <ul className="list-disc my-2">
                  <li>MACHINE WASH AT MAX.TEMP. 30° C - NORMAL PROCESS</li>
                  <li>DO NOT BLEACH</li>
                  <li>DO NOT TUMBLE DRY</li>
                  <li>IRON AT MAX. TEMP. OF 110° C WITHOUT STEAM</li>
                  <li>DO NOT DRY CLEAN</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center text-[3rem] my-[3rem] animate-bounce">
              FROM OUR BLOG
            </div>

            {/* blog cards  */}
            <div className="flex flex-wrap gap-[20%]">
              <div className="relative">
                <div className="">
                  <img
                    src={ProductImage}
                    width="250px"
                    height="270px"
                    className="shadow-md shadow-black"
                  />
                </div>
                <div className="absolute -bottom-[10rem] left-[2rem] w-[270px] h-[270px] bg-white p-4 shadow-md shadow-gray-400">
                  <div>
                    <h3 className="text-black font-bold ">
                      How To Be "Good With Money" According to Four Female
                      Financial Experts{" "}
                    </h3>
                  </div>
                  <div className="my-4 ">
                    Sed ac malesuada mauris. Donec et vulputate ex. Morbi auctor
                    lectus felis, vitae luctus lectus dignissim et. Donec...
                  </div>
                  <div className="flex justify-between mt-3">
                    <div>
                      <PersonIcon
                        fontSize="small"
                        className="text-[8px] font-bold text-black"
                      />
                      By DemoDemo
                    </div>
                    <div>
                      <CalendarTodayIcon fontSize="small" />
                      Dec 21 2021
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="">
                  <img
                    src={ProductImage}
                    width="250px"
                    height="270px"
                    className="shadow-md shadow-black"
                  />
                </div>
                <div className="absolute -bottom-[10rem] left-[2rem] w-[270px] h-[270px] bg-white p-4 shadow-md shadow-gray-400">
                  <div>
                    <h3 className="text-black font-bold ">
                      How To Be "Good With Money" According to Four Female
                      Financial Experts{" "}
                    </h3>
                  </div>
                  <div className="my-4 ">
                    Sed ac malesuada mauris. Donec et vulputate ex. Morbi auctor
                    lectus felis, vitae luctus lectus dignissim et. Donec...
                  </div>
                  <div className="flex justify-between mt-3">
                    <div>
                      <PersonIcon fontSize="small" className="text-[8px]" />
                      By DemoDemo
                    </div>
                    <div>
                      <CalendarTodayIcon fontSize="small" />
                      Dec 21 2021
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="">
                  <img
                    src={ProductImage}
                    width="250px"
                    height="270px"
                    className="shadow-md shadow-black"
                  />
                </div>
                <div className="absolute -bottom-[10rem] left-[2rem] w-[270px] h-[270px] bg-white p-4 shadow-md shadow-slate-400">
                  <div>
                    <h3 className="text-black font-bold ">
                      How To Be "Good With Money" According to Four Female
                      Financial Experts{" "}
                    </h3>
                  </div>
                  <div className="my-4 ">
                    Sed ac malesuada mauris. Donec et vulputate ex. Morbi auctor
                    lectus felis, vitae luctus lectus dignissim et. Donec...
                  </div>
                  <div className="flex justify-between mt-3">
                    <div>
                      <PersonIcon fontSize="small" className="text-[8px]" />
                      By DemoDemo
                    </div>
                    <div>
                      <CalendarTodayIcon fontSize="small" />
                      Dec 21 2021
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-[15%]">
                <div className="">
                  <img
                    src={ProductImage}
                    width="250px"
                    height="270px"
                    className="shadow-md shadow-black"
                  />
                </div>
                <div className="absolute -bottom-[10rem] left-[2rem] w-[270px] h-[270px] bg-white p-4 shadow-md shadow-slate-400">
                  <div>
                    <h3 className="text-black font-bold ">
                      How To Be "Good With Money" According to Four Female
                      Financial Experts{" "}
                    </h3>
                  </div>
                  <div className="my-4 ">
                    Sed ac malesuada mauris. Donec et vulputate ex. Morbi auctor
                    lectus felis, vitae luctus lectus dignissim et. Donec...
                  </div>
                  <div className="flex justify-between mt-3">
                    <div>
                      <PersonIcon fontSize="small" className="text-[8px]" />
                      By DemoDemo
                    </div>
                    <div>
                      <CalendarTodayIcon fontSize="small" />
                      Dec 21 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-slate-400 mt-[11rem] h-[0.2rem] w-[97%] " />
          <div className="flex justify-between  py-[3rem] pr-[2.5rem] ">
            <div>
              <span className="hover:animate-pulse hover:text-blue-500">
                <LocalShippingIcon />
              </span>
              <span className="text-black font-bold">Free Shipping</span>
              <span className="ml-2">on all US order or order above $99</span>
            </div>
            <div>
              <span className="hover:animate-pulse hover:text-blue-500 ">
                <CallIcon />
              </span>
              <span className="text-black font-bold">Support 24/7:</span>
              <span>Contact us 24 hours a day, 7 days a week</span>
            </div>
            <div>
              <span className="hover:animate-pulse hover:text-blue-500 ">
                <CompareArrowsIcon />
              </span>
              <span className="text-black font-bold ">days Return:</span>
              <span>Simply return it within 30 days for an exchange.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 !ml-0">
        <Footer />
      </div>
    </div>
  );
};

export default Website;
