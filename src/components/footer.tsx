import logo from "@/assets/logo.svg";
import whatsapp from "@/assets/WhatsappLogo.svg";
import instagram from "@/assets/InstagramLogo.svg";
import tiktok from "@/assets/TiktokLogo.svg";
export default function Footer() {


  return (
    <div className="bg-[#FFF1DE] px-4 py-8">
        <div className="grid grid-cols-2 content-center md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className="shop-header">
                <h2 className="text-2xl">Quicklinks</h2>
                <p className="text-base">About Us</p>
                <p className="text-base">Shop</p>
                <p className="text-base">Sign Up</p>
                <p className="text-base">Contact</p>
            </div>
            <div className="shop-header">
              <p className="text-2xl">Categories</p>
              <p className="text-base">Parfait</p>
              <p className="text-base">Yoghurt</p>
              <p className="text-base">Cake</p>
              <p className="text-base">Juices</p>
              <p className="text-base">Sandwich</p>
              <p className="text-base">Contact Us</p>
            </div>
            <div className="shop-header">
                <p className="text-2xl">Follow Us</p>
                <span className="">Whatsapp </span><img src={whatsapp} className="inline w-5" alt="whatsapp" /><br />
                <span>Instagram </span><img src={instagram} className="inline w-5"  alt="whatsapp" /> <br />
                <span>Tiktok </span><img src={tiktok} alt="whatsapp" className="inline w-5"  />
            </div>
        </div>
        <div className="mt-8 shop-header">
            <p>© 2025 Tahi Fresh. All rights reserved.</p>
        </div>
    </div>
    









  )
}
