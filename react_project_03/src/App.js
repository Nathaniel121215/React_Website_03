import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import Support from "./components/Support";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import FQA from "./components/FQA";
import Contact from "./components/contactus";
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div>
      <MessengerCustomerChat
    pageId="115722257804565"
    appId="859517748662771"
  />
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Support/>
      <FQA/>
      <Pricing/>
      <Contact/>
      <Footer/>


    </div>
  );
}

export default App;
