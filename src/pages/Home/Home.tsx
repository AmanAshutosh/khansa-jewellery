import Hero from '../../components/sections/Hero/Hero';
import CategoryBento from '../../components/sections/CategoryBento/CategoryBento';
import CuratedMoment from '../../components/sections/CuratedMoment/CuratedMoment';
import SignaturePieces from '../../components/sections/SignaturePieces/SignaturePieces';
import JewelleryGallery from '../../components/sections/JewelleryGallery/JewelleryGallery';
import Craftsmanship from '../../components/sections/Craftsmanship/Craftsmanship';
import Assurance from '../../components/sections/Assurance/Assurance';
import SocialGallery from '../../components/sections/SocialGallery/SocialGallery';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <CategoryBento />
      <CuratedMoment />
      <SignaturePieces />
      <JewelleryGallery />
      <Craftsmanship />
      <Assurance />
      <SocialGallery />
    </div>
  );
}
