import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full border-b  bg-white flex justify-between items-center p-4">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
