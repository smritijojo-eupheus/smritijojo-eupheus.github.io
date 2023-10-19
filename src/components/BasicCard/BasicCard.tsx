import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ListIcon from "@mui/icons-material/List";
import Progression from "../Charts/CircularProgression";
import ItemCard from "./ItemCard";

const BasicCard = (props: any) => {
  console.log(props);

  return (
    <div
      className="flex-col bg-slate-100   gap-y-[1rem] rounded-md shadow-sm shadow-slate-300"
      style={{
        width: props.width,
        backgroundColor: props.bgColor,
        height: props.height,
      }}
    >
      <div className="flex justify-between p-2">
        <div
          style={{ backgroundColor: props.color }}
          className="rounded-md p-1"
        >
          {props.bgColor === "#CCFFCC" ? (
            <VisibilityIcon />
          ) : (
            // ) : props.bgColor === "#E0E0E0" ? (
            //   <div className="">
            //     <h3>Products Sold</h3> 900 Products
            //     {/* {props.title} */}
            //   </div>
            // ) : (
            // "Income":
            <div> {props.title}</div>
          )}
        </div>
        <div>
          {props.title === "Sold Today" || props.title === "Last Order" ? (
            <div>
              {" "}
              <a>View All</a>
            </div>
          ) : (
            <ListIcon />
          )}
        </div>
      </div>

      <div className="flex justify-between p-2">
        {props.title === "Sold Today" || props.title === "Last Order" ? (
          <div className="">{props.items}</div>
        ) : (
          <div>
            <div>
              {props.bgColor === "#CCFFCC" ? (
                <div>{props.title}</div>
              ) : (
                <div>Today</div>
              )}

              <div className="text-black font-bold">1696</div>
            </div>
            {props.bgColor === "#CCFFCC" ? (
              <div className="text-blue-500">+45%</div>
            ) : (
              <div>{/* <Progression /> */}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicCard;
