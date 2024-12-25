import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "./context";
import { TiThMenu } from "react-icons/ti";


export default function NavBar() {
  const { setIsUpdate, setIsDelete, setMenuOpen, menuOpen } =
    useContext(DataContext);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close the menu for md and larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between p-5 h-[70px] w-full bg-green-800 text-white">
      <div className="font-bold text-xl ">Crud</div>
      <div>
        <ul
          className={`${
            menuOpen
              ? "flex flex-col absolute top-[70px] right-0 w-[30%] p-4 bg-green-700 text-xl transition duration-300 ease-in-out "
              : "hidden"
          } md:flex md:gap-5  text-xl md:visible ` }
          
        >
          <li className="hover:text-blue-500 hover:underline">
            <NavLink
              to="/Crud"
              onClick={() => {
                setIsUpdate(false);
                setIsDelete(false);
                setMenuOpen(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-blue-500 hover:underline ">
            <NavLink
              to="/View"
              onClick={() => {
                setIsUpdate(false);
                setIsDelete(false);
                setMenuOpen(false);
              }}
            >
              view
            </NavLink>
          </li>
          <li className="hover:text-blue-500 hover:underline">
            <Link to="/View">
              <button
                onClick={() => {
                  setIsUpdate(true);
                  setIsDelete(false);
                  setMenuOpen(false);
                }}
                className="hover:text-blue-500 hover:underline"
              >
                Update
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setIsDelete(true);
                setIsUpdate(false);
                setMenuOpen(false);
              }}
              className="hover:text-blue-500 hover:underline"
            >
              <Link to="/View">Delete</Link>
            </button>
          </li>
          <li className="hover:text-blue-500 hover:underline">
            <Link to="/">Log Out</Link>
          </li>
        </ul>
      </div>
      <button
        className="md:hidden text-2xl "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <TiThMenu />
      </button>
    </div>
  );
}
