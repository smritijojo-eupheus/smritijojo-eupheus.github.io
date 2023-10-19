import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between  mt-[5%] px-[2.5rem]">
        <div className="flex gap-[5rem]">
          <div className="flex-col">
            <div className="text-black font-bold text-2xl">Salehub</div>
            <div>We’re available by phone +123-456-789</div>
            <div>info@example.com</div>
            <div>Monday till Friday 10 to 6 EST</div>
          </div>
          <div className="flex-col">
            <div className="text-black font-bold text-2xl">About Us</div>
            <div>
              <a href="/">About Us</a>
            </div>
            <div>
              <a href="/">Contact Us</a>
            </div>
            <div>
              <a href="/">Factories</a>
            </div>
            <div>
              <a href="/">Careers</a>
            </div>
            <div>
              <a href="/">Help and advice</a>
            </div>
            <div>
              <a href="/">Shipping and return</a>
            </div>
            <div>
              <a href="/">Terms and Condition</a>
            </div>{" "}
            <div>
              <a href="/">Refund Policy</a>
            </div>
          </div>
          <div className="flex-col">
            <div className="text-black font-bold text-2xl">Our Shop</div>
            <div>
              <a href="/">New arrival</a>
            </div>
            <div>
              <a href="/">Top Trending</a>
            </div>
            <div>
              <a href="/">Autumn Collection</a>
            </div>
            <div>
              <a href="/">Back In Stock</a>
            </div>
            <div>
              <a href="/">SwimWear</a>
            </div>
            <div>
              <a href="/">Denim</a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-black font-bold text-2xl">NewsLetter</div>
          Receive our weekly newsletter. For dietary content, fashion insider
          and the best offers.
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
