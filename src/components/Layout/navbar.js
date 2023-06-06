import React from "react";
import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import { logout } from "../../utils/utils";

function NavBar() {
  return (
    <Header className="h-[70px] text-white flex gap-4 items-center justify-between bg-blue-950 text-center font-bold text-2xl w-full">
      <div className="flex gap-14 items-center">
        <img src="/assets/logo.png" alt="mera-lahore-logo" className="w-[130px] h-[100px]" />
      </div>
        <p className="m-0 hidden md:block">Admin Panel</p>
      {/*  <Button className="text-white bg-black" onClick={logout}>*/}
      {/*  Logout*/}
      {/*</Button>*/}
    </Header>
  );
}

export default NavBar;
