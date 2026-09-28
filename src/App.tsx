import { MotionConfig } from 'framer-motion';
import { ShopProvider } from './context/ShopContext';
import AnnouncementBar from './components/layout/AnnouncementBar/AnnouncementBar';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';

export default function App() {
  return (
    // reducedMotion="user" makes every Framer animation respect the OS setting.
    <MotionConfig reducedMotion="user">
      <ShopProvider>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main">
          <Home />
        </main>
        <Footer />
      </ShopProvider>
    </MotionConfig>
  );
}
