import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function Contact() {
  return <div>
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center mt-[7rem] mb-[5rem]a">
        <div>
          <h2 className="lg:text-7xl text-5xl text-[#cc6104] font-bold text-center center-text">Contact Us</h2>
        </div>
        <div>
          <form action="" method="post" className="flex flex-col lg:p-10 p-5 rounded-2xl bg-[#FFF1DE]  mt-10">
            <div>
              <h2 className="text-4xl font-bold shop-header">We'd love to hear from you</h2>
              <p className="shop-header">Reach out for complaints, feedback or support.</p>
              <p className="shop-header">We're just a tap away!</p>
            </div>
            <div className="mt-5">
              <label htmlFor="" className="block">Name</label>
              <input type="text" placeholder="Your Name" className="border rounded border-[#FF7B06] px-4 py-2 w-full lg:w-[500px]"/>
            </div>
            <div className="mt-5">
              <label htmlFor="" className="block">Email</label>
              <input type="email" placeholder="Your Email" className="border rounded border-[#FF7B06] px-4 py-2 w-full lg:w-[500px]"/>
            </div>
            <div className="mt-5">
              <label htmlFor="" className="block">Message</label>
              <textarea placeholder="Your Message" className="border rounded border-[#FF7B06] px-4 py-2 w-full lg:w-[500px] h-[150px]"></textarea>
            </div>
            <div className="mt-5">
              <button type="submit" className="bg-[#cc6104] rounded text-white px-6 py-2">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <Footer />
    </div>
     
    </div>;
    
}