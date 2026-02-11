// import FlyMenu from "./FlyMenu";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <div className="flex h-15 w-full items-center justify-between bg-white px-40 max-lg:px-20 max-md:px-10 max-sm:px-8">
      <div className="flex items-center gap-1">
        {/* <FlyMenu /> */}
        <Logo className={"max-sm:text-base"} />
      </div>
      <NavLinks />
      {/* <Icons /> */}
    </div>
  );
}

export default Header;
