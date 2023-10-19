import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TextField from "@mui/material/TextField/TextField";
import Person2Icon from "@mui/icons-material/Person2";
import Button from "@mui/material/Button/Button";

const Register = () => {
  return (
    <>
      <div className="  flex-col  w-screen min-h-screen">
        <Navbar />
        <div className="flex justify-center mt-[1rem] ">
          <div className="w-[40%]  py-5 px-3 border-2 border-black shadow-md shadow-gray-500">
            <div className="flex">
              <div className="mt-3">
                <Person2Icon />
              </div>

              <TextField label="First Name" className="!w-full" />
            </div>
            <div className="flex-col">
              <div>Second Name:</div>
              <TextField className="!w-full" />
            </div>
            <div className="flex-col">
              <div>Email:</div>
              <TextField className="!w-full" />
            </div>
            <div className="flex-col">
              <div>Phone:</div>
              <TextField className="!w-full" />
            </div>
            <div className="flex justify-center mt-3">
              <Button variant="contained">Register</Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Register;
