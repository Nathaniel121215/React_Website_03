import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import Support from "./components/Support";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import FQA from "./components/FQA";
import Contact from "./components/contactus";
// import MessengerCustomerChat from 'react-messenger-customer-chat';

import { MessengerChat } from "react-messenger-chat-plugin";

function App() {
  return (
    <div>
      {/* <MessengerCustomerChat
    pageId="115722257804565"
    appId="859517748662771"
  /> */}

<MessengerChat
    pageId="115722257804565"
    language="en_US"
    themeColor={"#cc4839"}
    // bottomSpacing={300}
    loggedInGreeting="Hi! How can we help you?"
    loggedOutGreeting="Hi! How can we help you?"
    greetingDialogDisplay={"show"}
    debugMode={true}
    onMessengerShow={() => {
      console.log("onMessengerShow");
    }}
    onMessengerHide={() => {
      console.log("onMessengerHide");
    }}
    onMessengerDialogShow={() => {
      console.log("onMessengerDialogShow");
    }}
    onMessengerDialogHide={() => {
      console.log("onMessengerDialogHide");
    }}
    onMessengerMounted={() => {
      console.log("onMessengerMounted");
    }}
    onMessengerLoad={() => {
      console.log("onMessengerLoad");
    }}
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
