import { MenuList } from "../components/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css"

function Menu({ openModal }) {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            menuItem={menuItem}
            openModal={openModal} // Pass openModal to MenuItem
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
