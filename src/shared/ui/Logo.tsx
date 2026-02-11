import { Link } from "react-router";
import { cn } from "../utils";

type LogoProps = {
  className: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <h1 className={cn(`text-2xl font-medium`, className)}>
      <Link to={"/"} className="flex">
        <span>3legant</span>
        <p>.</p>
      </Link>
    </h1>
  );
}
