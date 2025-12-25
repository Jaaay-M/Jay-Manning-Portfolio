import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <>
      <header className="topbar">
        <div className="logo">Jay Manning</div>
        <div className="burger" onClick={() => {
          document.getElementById("menu").classList.toggle("open");
        }}>
          ☰
        </div>
      </header>

      <nav className="menu" id="menu">
        <Link to="/">Home</Link>
        <Link to="/CarDealership">Car Dealership</Link>
        <Link to="/GrapheneTrace">Graphene Trace</Link>
      </nav>
    </>
  );
}