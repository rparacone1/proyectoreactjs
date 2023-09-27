import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <h4>Clothing</h4>
      <ul className="categories">
        <li>Inicio</li>
        <li>Mujer</li>
        <li>Hombre</li>
        <li>Niños</li>
      </ul>
      <CartWidget />
    </div>
  );
};
