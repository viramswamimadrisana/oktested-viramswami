import Image from "next/image";
import TempleHistory from "../components/TempleHistory";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TempleSchedule from "../components/TempleSchedule";
import BooksSection from "../components/Books";
import PhotoGallery from "../components/PhotoGallery";
import DonationCTA from "@/components/DonationCTA";
import Footer from "@/components/Footer";
import VideoGallery from "@/components/VideoGallery";
import LocationAndDeveloper from "@/components/LocDev";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <div>
      
      <HeroSection/>
           <PhotoGallery/>
           <VideoGallery/>
           <DonationCTA/>
      <TempleSchedule/>
      <TempleHistory/>
      <BooksSection/>
      <SocialMedia/>
      <LocationAndDeveloper/>

  
    </div>
  );
}
