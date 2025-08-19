import React, { useState } from "react";
import { Search, Heart, User, ShoppingBag, Menu } from "@deemlol/next-icons";
import Link from "next/link";

export default function Navbar() {

       // const NAVIGATION = [
       //        { heading: "SHOP", link: "/" },
       //        { heading: "SKILLS", link: "/Skills" },
       //        { heading: "STORIES", link: "/Stories" },
       //        { heading: "ABOUT", link: "/About" },
       //        { heading: "CONTACT", link: "/Contact" },
       // ];
       // const [navOpen, setNavOpen] = useState(false);
       // const [activeTab, setActiveTab] = useState("");

       // // Toggle menu visibility
       // const toggleNav = () => setNavOpen((prev) => !prev);

       return (
              <>
                     <header className="flex flex-col sm:items-center border-b border-gray-300 py-4 relative shadow-xl  sticky top-0 bg-white">
                            {/* Left Logo Icon */}

                            <div className="absolute left-1 flex items-center gap-3">
                                   {/* Hamburger Icon (Mobile) */}
                                   {/* 
                                   <button
                                          className="text-gray-600 sm:hidden w-10 h-10 relative focus:outline-none bg-white"
                                          onClick={toggleNav}
                                   >
                                          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                 <span
                                                        aria-hidden="true"
                                                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${navOpen ? "rotate-45" : "-translate-y-1.5"}`}
                                                 ></span>
                                                 <span
                                                        aria-hidden="true"
                                                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${navOpen ? "opacity-0" : ""}`}
                                                 ></span>
                                                 <span
                                                        aria-hidden="true"
                                                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${navOpen ? "-rotate-45" : "translate-y-1.5"}`}
                                                 ></span>
                                          </div>
                                   </button> */}

                                   {/* Logo Icon */}
                                   <div className="text-xl sm:pl-4">✾</div>
                                   <div className="h-8 border-l border-dashed border-blue-400"></div>
                            </div>

                            {/* Center Logo Text */}
                            <div>
                                   <h1 className="text-lg font-bold pt-1 pl-12 sm:pl-0">LOGO</h1>
                            </div>

                            {/* Right Icons */}
                            <div className="absolute right-4 top-6 flex items-center gap-2 sm:gap-4 text-lg">
                                   <Search className="cursor-pointer" />
                                   <Heart className="cursor-pointer" />
                                   <ShoppingBag className="cursor-pointer" />
                                   <User className="cursor-pointer" />
                            </div>
                            {/* Mobile Menu - Display when 'navOpen' is true */}
                            {/* <div className={`flex sm:hidden flex-col items-center w-full gap-4 font-semibold justify-end py-2 px-4 text-lg ${navOpen ? "" : "hidden"}`}>

                                   {NAVIGATION.map((item) => (
                                          <Link
                                                 href={item.link}
                                                 key={item.link}
                                                 className={`w-full hover:text-gray-600 ${activeTab === item.heading ? "text-gray-600 text-xl" : ""}`}
                                                 onClick={() => {
                                                        setActiveTab(item.heading);
                                                        setNavOpen(false); // Close the menu on item click
                                                 }}
                                          >
                                                 {item.heading}
                                          </Link>
                                   ))}
                            </div> */}

                            {/* Desktop Menu - Always visible on larger screens */}
                            {/* <div className={`sm:flex hidden items-center gap-4 lg:gap-8 font-semibold justify-end py-2 px-4 text-lg ${navOpen ? "invisible hidden" : ""}`}>

                                   {NAVIGATION.map((item) => (
                                          <Link
                                                 key={item.link}
                                                 href={item.link}
                                                 className={`hover:text-gray-600 lg:text-xl ${activeTab === item.heading ? "text-gray-600" : ""}`}
                                                 onClick={() => setActiveTab(item.heading)}
                                          >
                                                 {item.heading}
                                          </Link>
                                   ))}
                            </div> */}

                            <nav className="font-semibold text-sm duration-300 flex flex-row gap-4 sm:gap-8 mt-3" >
                                   <Link href="/" className="hover:text-blue-500">SHOP</Link>
                                   <Link href="/About" className="hover:text-blue-500">ABOUT</Link>
                                   <Link href="/Contact" className="hover:text-blue-500">CONTACT</Link>
                            </nav>

                     </header >

                     <div className=" flex justify-center pt-8 px-4 " >
                            <div className="flex flex-col ">
                                   <p className="text-lg sm:text-2xl flex justify-center font-semibold">DISCOVER OUR PRODUCTS</p>
                                   <p className="w-[280px] sm:w-[600px] text-center text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sunt reprehenderit sint quibusdam, tempora consectetur libero possimus nesciunt fugit officiis iste dolore.</p>
                            </div></div>

              </>
       )
}
