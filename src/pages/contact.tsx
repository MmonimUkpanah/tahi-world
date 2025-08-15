import Navbar from "@/components/navbar";
import cup from "@/assets/cup.svg";
import Footer from "@/components/footer";
export default function Shop() {
  return <div>
    <div className="">
      <div className="">
        <Navbar />
      </div>
     <div className="shop">
        <div className="mt-[7rem]">
          <h1 className="lg:text-6xl text-3xl text-[#FF7B06] font-bold text-center center-text">Our <span className="underline underline-offset-10">Menu</span> </h1>
        </div>
        <div>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-5">
            <span className="lg:text-2xl text-[#1F1E1E] shop-header">PARFAIT</span>
            <span className="lg:text-2xl text-[#1F1E1E] shop-header">YOGHURT</span>
            <span className="lg:text-2xl text-[#1F1E1E] shop-header">CAKE</span>
            <span className="lg:text-2xl text-[#1F1E1E] shop-header">SANDWICH</span>
            <span className="lg:text-2xl text-[#1F1E1E] shop-header">JUICES</span>
            <span className="lg:text-2xl text-[#1F1E1E] shop-header">SNACKS</span>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-3 lg:mx-[100px] gap-5 lg:gap-10 ">
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-3 lg:mx-[100px] gap-5 lg:gap-10 ">
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-3 lg:mx-[100px] gap-5 lg:gap-10 ">
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
            <div>
              <div>
                <img src={cup} alt="" className="w-full mt-10"/>
              </div>
              <div className="bg-[#FFF1DE] px-2 py-3 mt-[-5px] shop-header shadow-md">
                <p>Parfait &#8358;2500</p>
              </div>
            </div>
          </div>
        </div>
     </div>
    </div>
    <div className="mt-10">
      <Footer />
    </div>
     
    </div>;
    
}