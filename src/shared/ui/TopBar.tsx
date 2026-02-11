import { useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import ArrowLink from "./ArrowLink";

export default function TopBar() {
  const [isVisable, setIsVisable] = useState(true);

  function handleClick() {
    setIsVisable(false);
  }

  if (!isVisable) return null;

  return (
    <div className="bg-surface-soft font-inter flex h-10 w-full items-center justify-center gap-3 text-sm font-semibold">
      <CiDiscount1 className="h-6 w-6" />
      <p className="">30% off storewide — Limited time! </p>
      <ArrowLink
        className={
          "border-accent-blue text-accent-blue font-medium max-sm:hidden"
        }
        to={"/shop"}
      >
        Shop Now
      </ArrowLink>
      <IoCloseOutline
        className="absolute right-4 h-5 w-5 cursor-pointer max-sm:relative max-sm:ml-5.5"
        onClick={handleClick}
      />
    </div>
  );
}
