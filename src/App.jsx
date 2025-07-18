import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AppDownload from "./pages/AppDownload";
import Subscription from "./pages/Subscription";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import TermsAndCondition from "./pages/TermsAndConditions";
import Blogs from "./pages/Blogs";
import HelpSupport from "./pages/HelpSupport";
import ContactUs from "./pages/ContactUs";
import SiteMap from "./pages/SiteMap";
import BlogDetails from "./pages/BlogDetails";
import Listing from "./pages/Listing";
import ListingDetails from "./pages/ListingDetails";
import Account from "./components/Account";

function Layout() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/account";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/app-download" element={<AppDownload />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/cookie-policy" element={<CookiesPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndCondition />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/site-map" element={<SiteMap />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing-details" element={<ListingDetails />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
