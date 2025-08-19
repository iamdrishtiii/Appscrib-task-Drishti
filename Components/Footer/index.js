// components/Footer.jsx
import { Instagram, Linkedin } from "@deemlol/next-icons";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcApplePay, FaCcStripe } from "react-icons/fa6";
import { SiGooglepay } from "react-icons/si";

export default function Footer() {
       return (
              <footer className="bg-black text-white px-10 py-10 w-full">
                     {/* Top Section */}
                     <div className=" mx-auto grid md:grid-cols-2 gap-8 border-b border-white pb-6 flex r">

                            {/* Subscribe */}
                            <div className="flex flex-row">
                                   <div className="lg:w-1/2"></div>
                                   <div className="lg:w-1/2">
                                          <h3 className="font-semibold mb-2 text-sm">BE THE FIRST TO KNOW</h3>
                                          <p className="text-xs mb-3">Sign up for updates from mettā muse.</p>
                                          <div className="flex">
                                                 <input
                                                        type="email"
                                                        placeholder="Enter your e-mail..."
                                                        className="w-full p-2 text-black bg-white text-sm outline-none"
                                                 />
                                                 <button className="bg-gray-800 px-4 py-2 text-sm">SUBSCRIBE</button>
                                          </div>
                                   </div>
                            </div>


                            {/* Contact Info */}
                            <div className="flex flex-row">
                                   <div className="lg:w-1/2">
                                          <h3 className="font-semibold mb-2 text-sm">CONTACT US</h3>
                                          <p className="text-xs">+44 221 133 5360</p>
                                          <p className="text-xs mb-4">customercare@mettamuse.com</p>

                                          <h3 className="font-semibold mb-2 text-sm">CURRENCY</h3>
                                          <p className="flex items-center gap-1 text-xs">
                                                 🇺🇸 USD
                                          </p>
                                          <p className="text-[10px] mt-1">
                                                 Transactions will be completed in Euros and a currency reference is available on hover.
                                          </p>
                                   </div>
                                   <div className="lg:w-1/2"></div>
                            </div>
                     </div>

                     {/* Bottom Section */}
                     <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mt-6 text-xs">

                            {/* Column 1 */}
                            <div>
                                   <h3 className="font-semibold mb-2">mettā muse</h3>
                                   <ul className="space-y-1">
                                          <li>About Us</li>
                                          <li>Stories</li>
                                          <li>Artisans</li>
                                          <li>Boutiques</li>
                                          <li>Contact Us</li>
                                          <li>EU Compliances Docs</li>
                                   </ul>
                            </div>

                            {/* Column 2 */}
                            <div>
                                   <h3 className="font-semibold mb-2">QUICK LINKS</h3>
                                   <ul className="space-y-1">
                                          <li>Orders & Shipping</li>
                                          <li>Join/Login as a Seller</li>
                                          <li>Payment & Pricing</li>
                                          <li>Return & Refunds</li>
                                          <li>FAQs</li>
                                          <li>Privacy Policy</li>
                                          <li>Terms & Conditions</li>
                                   </ul>
                            </div>

                            {/* Column 3 */}
                            <div>
                                   <h3 className="font-semibold mb-2">FOLLOW US</h3>
                                   <div className="flex gap-3 text-lg">
                                          <Instagram />
                                          <Linkedin />
                                   </div>
                            </div>

                            {/* Column 4 */}
                            <div>
                                   <h3 className="font-semibold mb-2">mettā muse ACCEPTS</h3>
                                   <div className="flex gap-2 text-2xl">
                                          <SiGooglepay />
                                          <FaCcMastercard />
                                          <FaCcVisa />
                                          <FaCcAmex />
                                          <FaCcApplePay />
                                          <FaCcStripe />
                                   </div>
                            </div>
                     </div>

                     {/* Copyright */}
                     <div className="text-center text-[10px] text-gray-500 mt-6">
                            Copyright © 2023 mettamuse. All rights reserved.
                     </div>
              </footer>
       );
}
