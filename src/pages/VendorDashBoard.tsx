import React from "react";
import BasicCard from "../components/BasicCard/BasicCard";
import ItemCard from "../components/BasicCard/ItemCard";
// import item1 from "../../assets/item1.jpg";
// import item2 from "../../assets/item2.jpg";/
import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpg";
import Map from "../components/Map/Map";

const DashBoard = () => {
  return (
    <>
      <div className="flex gap-[5%] min-h-screen w-screen ">
        <div className="flex-col w-1/6 bg-slate-400">
          <div>dashboard</div>
          <div>Products</div>
          <div>Customer</div>
          <div>Transaction</div>
          <div>Setting</div>
          <div>Sign Out</div>
        </div>
        <div className="flex">
          <div className="flex-col ">
            <div className="flex gap-x-[1rem] w-full my-[2rem] ">
              <BasicCard
                title="views"
                color="#B2FF66"
                width="250px"
                bgColor="#CCFFCC"
              />
              <BasicCard
                title="views"
                color="#FF00FF"
                width="250px"
                bgColor="#CCFFCC"
              />
              <BasicCard
                title="views"
                color="#FF9933"
                width="250px"
                bgColor="#CCFFCC"
              />
            </div>
            <div>
              <BasicCard width="780px" bgColor="#FFE5CC" title="Income" />
            </div>
            <div className="my-6">
              <div className="font-bold text-4xl">Top Category</div>
              <div className="flex justify-between mt-4">
                <div>
                  <BasicCard
                    width="200px"
                    bgColor="#E0E0E0"
                    title="Products Sold"
                    height="240px"
                  />
                </div>
                <div>
                  <BasicCard
                    title="Sold Today"
                    bgColor="#E0E0E0"
                    width=""
                    items={<ItemCard />}
                    height="240px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <BasicCard
            title="Last Order"
            bgColor="#FFFF66"
            items={<ItemCard title="Last Order" image={item1} />}
            height="300px"
            width="250px"
          />
          <div className="w-[100px] mt-7 h-[200px]">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
