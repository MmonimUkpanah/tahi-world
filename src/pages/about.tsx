import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import about from '@/assets/about.svg'
import photo from '@/assets/photo.svg'
export default function Shop() {
  return <div>
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="bg-[#fff1de]">
        <div className="about lg:pt-[10rem] pt-[8rem] pb-[5rem] pl-4 pr-4 grid grid-cols-1 lg:grid-cols-2 lg:ml-[10rem] lg:mr-[10rem] lg:gap-[5rem] gap:1rem">
      <div className="">
        <h2 className="center-text text-4xl text-[#d9843b]">About <span className="underline underline-offset-6">Us</span></h2>
        <p className="shop-header mt-2">At Tahi Fresh, we believe good food should be fresh, tasty, and feel like home.
We make everything with care. From our creamy parfaits and thick yoghurts to refreshing juices, pancakes, sandwiches, and more. Every item is made fresh daily using natural ingredients with no shortcuts.
Whether you're grabbing a quick bite or treating yourself to something sweet, we're here to give you that satisfying experience every single time.</p>
      </div>
      <div className="mt-5 lg:mt-0">
        <img src={about} alt="about" className="w-full" />
      </div>
     </div>
      </div>
     <div className="testimonial mb-[10rem] ]">
        <div className="flex items-center justify-center ml-2.5 mr-2.5 ">
          <h2 className="center-text text-4xl text-[#d9843b] mt-[5rem]">What do our customers say about <span className="underline underline-offset-6">Us</span>? </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:mx-[10rem] mx-4 mt-10">
          <div className="border border-[#FFE272] bg-[#fff1de] rounded-[22px] p-5 lg:p-10">
            <div>
              The parfait was so fresh 
              and creamy. You can tell
              it’s made with care.
              I’ve ordered three times already
            </div>
             <div className="bg-[white] rounded-full mt-10">
              <span><img src={photo} alt="photo" className="inline rounded-full" /><span className="ml-5 text-[#cc6104] shop-header font-bold">Chindinma A</span> </span>
            </div>
          </div>
          <div className="border border-[#FFE272] bg-[#fff1de] rounded-[22px] p-5 lg:p-10">
            <div>
              The parfait was so fresh 
              and creamy. You can tell
              it’s made with care.
              I’ve ordered three times already
            </div>
             <div className="bg-[white] rounded-full mt-10">
              <span><img src={photo} alt="photo" className="inline rounded-full" /><span className="ml-5 text-[#cc6104] shop-header font-bold">Chindinma A</span> </span>
            </div>
          </div>
          <div className="border border-[#FFE272] bg-[#fff1de] rounded-[22px] p-5 lg:p-10">
            <div>
              The parfait was so fresh 
              and creamy. You can tell
              it’s made with care.
              I’ve ordered three times already
            </div>
            <div className="bg-[white] rounded-full mt-10">
              <span><img src={photo} alt="photo" className="inline rounded-full" /><span className="ml-5 text-[#cc6104] shop-header font-bold">Chindinma A</span> </span>
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