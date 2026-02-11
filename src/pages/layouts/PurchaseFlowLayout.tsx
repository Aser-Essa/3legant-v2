import { Outlet } from "react-router";

export default function PurchaseFlowLayout() {
  return (
    <div className="flex h-svh items-center justify-center">
      <p className="text-5xl text-red-500">PurchaseFlowLayout</p>
      <Outlet />
    </div>
  );
}
