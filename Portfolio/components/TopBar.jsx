import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <>
      <header className="topbar">
        <div className="logo">Jay Manning</div>
        <Link to="/" className="home">⌂</Link>
      </header>
    </>
  );
}