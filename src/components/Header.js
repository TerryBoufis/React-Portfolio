import { NAV_ITEMS } from "../App";

const styles = {
  navBar: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
  },
  navItem: {
    marginLeft: "2rem",
  },
};

export function Header({ currentPage, setCurrentPage }) {
  return (
    <div>
      <h1>Terry Boufis</h1>
      <nav>
        <ul style={styles.navBar}>
          {NAV_ITEMS.map((item) => {
            return (
              <li
                key={item.itemname}
                onClick={() => setCurrentPage(item.itemName)}
                style={styles.navItem}
              >
                {item.itemName}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}


