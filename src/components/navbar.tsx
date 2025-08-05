
import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"
export default function Navbar() {
 

  return (
    


<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-[5rem]" alt=" Logo" />
        
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto md:ml-[10rem] lg:ml-[20rem] pt-5" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-[#FF7B06]  rounded-sm  md:p-0  " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-[#FF7B06]  rounded-sm  md:p-0 ">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-[#FF7B06]  rounded-sm  md:p-0 ">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-[#FF7B06]  rounded-sm  md:p-0 ">Contact</a>
        </li>
        <li className="lg:hidden">
          <a href="#" className="block  text-[#FF7B06]  py-2 px-3 rounded-sm  md:p-0 "><img src={cart} alt="cart" className="h-[3rem] md:mt-[-0.8rem] "/></a>
        </li>
        
      </ul>
    </div>
    <div className="lg:ml-auto hidden lg:block items-center space-x-3 rtl:space-x-reverse">
        <img src={cart} alt="cart" className="h-[3rem] mt-3"/>
    </div>
  </div>
</nav>






  )
}
