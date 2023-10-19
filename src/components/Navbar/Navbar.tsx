import React from "react";
// import logo from "../images/logo.png";
import logo from "../../images/logo.png";
import { Menu, Disclosure } from "@headlessui/react";
import { Fragment } from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mr-[3rem] bg-slate">
        <div className="flex gap-1 mt-4">
          <Disclosure as="div" className="relative group">
            <>
              <Disclosure.Button className="hover:bg-red-400">
                {" "}
                Home
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="hidden group-hover:block">
                <div className="!flex-col absolute -bottom-[5rem] left-0 bg-pink-400 z-[9999] w-[50vh]">
                  <div>
                    <a href="/">1</a>
                  </div>
                  <div>
                    <a>2</a>
                  </div>
                  <div>
                    {" "}
                    <a>3</a>
                  </div>
                  <div>
                    <a>4</a>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          </Disclosure>

          <Disclosure as="div" className="relative group">
            {({ open }) => (
              <>
                <Disclosure.Button className="hover:bg-red-400 ">
                  {" "}
                  Pages
                </Disclosure.Button>

                <Disclosure.Panel
                  as="div"
                  className="hidden group-hover:block "
                >
                  <div className="!flex-col absolute -bottom-[5rem] left-0 bg-pink-400 z-[9999]">
                    <div>
                      <a>1</a>
                    </div>
                    <div>
                      <a>2</a>
                    </div>
                    <div>
                      {" "}
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="relative group">
            {({ open }) => (
              <>
                <Disclosure.Button> Men's</Disclosure.Button>
                <Disclosure.Panel as="div" className="hidden group-hover:block">
                  <div className="!flex-col absolute -bottom-[5rem] left-0 bg-pink-400 z-[9999]">
                    <div>
                      <a>my</a>
                    </div>
                    <div>
                      {" "}
                      <a>2</a>
                    </div>
                    <div>
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="relative group">
            {({ open }) => (
              <>
                <Disclosure.Button> Women's</Disclosure.Button>
                <Disclosure.Panel as="div" className="hidden group-hover:block">
                  <div className="!flex-col absolute -bottom-[5rem] left-0 bg-pink-400 z-[9999]">
                    <div>
                      <a>1</a>
                    </div>
                    <div>
                      <a>2</a>
                    </div>
                    <div>
                      {" "}
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="relative group">
            {({ open }) => (
              <>
                <Disclosure.Button> Categories</Disclosure.Button>
                <Disclosure.Panel as="div" className="hidden group-hover:block">
                  <div className="!flex-col absolute -bottom-[5rem] left-0 bg-pink-400 z-[9999]">
                    <div>
                      <a>1</a>
                    </div>
                    <div>
                      <a>2</a>
                    </div>
                    <div>
                      {" "}
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="relative group">
            {({ open }) => (
              <>
                <Disclosure.Button> Blogs</Disclosure.Button>
                <Disclosure.Panel as="div" className="hidden group-hover:block">
                  <div className="!flex-col absolute -bottom-[5rem] left-0 bg-pink-400 z-[9999]">
                    <div>
                      <a>1</a>
                    </div>
                    <div>
                      <a>2</a>
                    </div>
                    <div>
                      {" "}
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="">
          <img src={logo} height="" width="150px"></img>
        </div>
        <div className="flex gap-6 mt-4">
          <Disclosure as="div" className="relative">
            {({ open }) => (
              <>
                <Disclosure.Button> Search</Disclosure.Button>
                <Disclosure.Panel>
                  <div className="!flex-col absolute -bottom-[5rem] left-0 bg-pink-400 z-[9999]">
                    <div>
                      <a>1</a>
                    </div>
                    <div>
                      <a>2</a>
                    </div>
                    <div>
                      {" "}
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="relative group">
            {({ open }) => (
              <>
                <Disclosure.Button> Account</Disclosure.Button>
                <Disclosure.Panel as="div" className="hidden group-hover:block">
                  <div className="!flex-col absolute -bottom-[5rem] left-0 bg-slate-400 z-[9999]">
                    <div>
                      <a href="/account/register">Register</a>
                    </div>
                    <div>
                      <a>2</a>
                    </div>
                    <div>
                      {" "}
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="relative">
            {({ open }) => (
              <>
                <Disclosure.Button> My Cart</Disclosure.Button>
                <Disclosure.Panel>
                  <div className="!flex-col absolute -bottom-[5rem] left-0 bg-pink-400 z-[9999]">
                    <div>
                      <a>1</a>
                    </div>
                    <div>
                      <a>2</a>
                    </div>
                    <div>
                      {" "}
                      <a>3</a>
                    </div>
                    <div>
                      <a>4</a>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default Navbar;
