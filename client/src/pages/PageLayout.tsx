import { PageLayoutProp } from "../types/types";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileNavBar from "../components/MobileNavBar";

function PageLayout({ children }: PageLayoutProp) {
  return (
    <div className="flex flex-col">
      <NavBar />
      <MobileNavBar />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
