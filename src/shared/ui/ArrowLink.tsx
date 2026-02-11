import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router";
import { cn } from "../utils";
import type React from "react";

type ArrowLinkProps = {
  to: string;
  className: string;
  children: React.ReactNode;
};

function ArrowLink({ to, className, children }: ArrowLinkProps) {
  return (
    <Link
      to={to}
      target="_blank"
      className={cn(
        `font-inter flex items-center gap-1 border-b border-neutral-900 leading-7 font-medium max-sm:text-sm max-sm:leading-6`,
        className,
      )}
    >
      <span>{children}</span>
      <IoArrowForward />
    </Link>
  );
}

export default ArrowLink;
