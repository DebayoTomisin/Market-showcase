import Download from "./components/Download";
import SectionWrapper from "./components/SectionWrapper";
import Features from "./components/Features";
import assets from "./assets";
import styles from "./styles/Global";

function App() {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTS. 
        Start selling and growing your collection today."
        desc="Buy, Store, collect NFTS, exchange & earn crypto. Join 15+ million users on the ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Clean User Interface Marketplace. "
        desc="Experience seemless transactions and a clean user interface. Smooth and easy to use."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment."
        desc="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store"
        desc="The app contains two screens. The first screen lists all NFTs while the second one shows the details of the chosen NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by : <span className="bold">DebayoTomisin</span>
        </p>
      </div>
    </>
  );
}

export default App;
