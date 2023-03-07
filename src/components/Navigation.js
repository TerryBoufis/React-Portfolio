import { Header, NAV_ITEMS } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState(NAV_ITEMS[0].itemName);

  const onNavItemClick = (itemName) => {
    setCurrentPage(itemName);
  };

  const renderCurrentPage = () => {
    if (currentPage === "About Me") {
      return <AboutMe />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    }

    for (const navItem of NAV_ITEMS) {
      if (currentPage === navItem.itemName) {
        return navItem.component;
      }
    }
  };

  return (
    <div>
      <Header onNavItemClick={onNavItemClick} />
      <section>{renderCurrentPage()}</section>
      <Footer />
    </div>
  );
}
