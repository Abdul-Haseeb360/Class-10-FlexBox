import Herosection from "./components/HeroSection";
import Middlesection from "./components/MidelSection";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider"


export default function Home() {
  return (
   <>
   <Navbar/>
   <Herosection/>
   <Middlesection/>
   <Slider/>
   </>
  );
}
