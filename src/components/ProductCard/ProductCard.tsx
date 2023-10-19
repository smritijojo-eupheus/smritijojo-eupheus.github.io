import React from "react";
import ProductImage from "../../assets/ProductImage.jpg";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductCard = () => {
  return (
    <>
      <div className="p-3 group cursor-pointer">
        <div className="relative">
          <img
            src={ProductImage}
            alt="productimg"
            width="250px"
            height="270px"
          ></img>
          <div className="absolute -bottom-0 left-2 text-black  gap-1 bg-slate-300  hidden group-hover:flex">
            {["S", "M", "L", "XL", "XXL"].map((item: string) => {
              return (
                <div className="border-2 border-black rounded-sm p-1 w-[2.5rem] ">
                  {item}
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="border-2 border-black p-2 w-[3rem]">hii</div> */}
        <div className="">
          <a href="/">Levi's Essential Western Denim Shirt</a>
          <div className="flex justify-between">
            <div className="text-black font-bold">$150</div>
            <div className="hidden group-hover:block">
              <del className="text-slate-400 font-bold">$16.68</del>
            </div>
          </div>
        </div>
        <div className="hidden group-hover:block group-hover:animate-pulse">
          <Button variant="contained" className="!bg-black ">
            Add TO Cart
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
