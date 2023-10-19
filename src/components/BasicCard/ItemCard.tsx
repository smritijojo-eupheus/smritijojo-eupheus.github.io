import React from "react";
import item1 from "../../assets/item1.jpg";
import item2 from "../../assets/item2.jpg";

const ItemCard = (props: any) => {
  console.log(props.title);
  console.log(props.image);
  ///try to take image using props///

  const data = [{ image: item1 }, { image: item2 }];
  return (
    <>
      <div className="flex-col ">
        {data.map((item: any) => (
          <div className="flex gap-[2rem]">
            <div className="">
              <img src={item.image} width="80px" height="60px"></img>
            </div>

            <div>
              <h3>Men's Shoes</h3>
              items:150
            </div>
            <div>$10k</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemCard;
