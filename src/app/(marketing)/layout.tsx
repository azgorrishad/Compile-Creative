import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import CustomCursor from "@/components/marketing/CustomCursor";
import BookingModal from "@/components/marketing/BookingModal";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BookingModal />
    </>
  );
}
