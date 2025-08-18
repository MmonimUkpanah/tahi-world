
import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"
import { useState } from "react";
export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

  return (
    


<nav className="bg-white fixed w-full border-b border-[#FF7B06] z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto py-2 px-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-[5rem]" alt="Logo" />
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Main Menu */}
        <div
          className={`w-full md:block md:w-auto md:ml-[10rem] lg:ml-[20rem] ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a href="#" className="block py-2 px-3 text-[#cc6205] rounded-sm md:p-0">
                Home
              </a>
            </li>
             <li>
              <a href="/shop" className="block py-2 px-3 text-[#cc6205] rounded-sm md:p-0">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="block py-2 px-3 text-[#cc6205] rounded-sm md:p-0">
                About
              </a>
            </li>
           
            <li>
              <a href="/contact" className="block py-2 px-3 text-[#cc6205] rounded-sm md:p-0">
                Contact
              </a>
            </li>
            <li className="lg:hidden">
              <a href="#" className="block text-[#cc6205] py-2 px-3 rounded-sm md:p-0">
                <img src={cart} alt="cart" className="h-[2rem] md:mt-[-0.2rem]" />
              </a>
            </li>
          </ul>
        </div>

        {/* Cart Icon (for large screens) */}
        <div className="lg:ml-auto hidden lg:block items-center space-x-3 rtl:space-x-reverse">
          <img src={cart} alt="cart" className="h-[2.5rem] mt-2" />
        </div>
      </div>
    </nav>






  )
}
