import { Header } from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import { useState } from "react";
import { render } from "@testing-library/react";

export const NAV_ITEMS = [
  {
    itemName: "About Me",
    component: <AboutMe />,
  },
  {
    itemName: "Portfolio",
    component: <Portfolio />,
  },
  {
    itemName: "Contact",
    component: <Contact />,
  },
  {
    itemName: "Resume",
    component: <Resume />,
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState(NAV_ITEMS[0].itemName);

  return (
    <div className="appBody">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {NAV_ITEMS.filter((item) => item.itemName === currentPage).map(
          (item) => item.component
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
