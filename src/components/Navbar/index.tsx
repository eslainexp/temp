import { SettingOutlined } from "@ant-design/icons";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-ant-design";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button, Popover } from "antd";
import React from "react";
import { Settings } from "../Settings";
import { LABELS } from "../../constants";


// import UserDropdown from "./UserDropdown.js";

export default function Navbar() {
  const { connected } = useWallet();

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-1">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto">
            <WalletMultiButton type="primary" />
          </div>
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto">
          {connected ? <WalletDisconnectButton type="text" /> : null}
            <Popover
              placement="topRight"
              title={LABELS.SETTINGS_TOOLTIP}
              content={<Settings />}
              trigger="click"
              >
            <Button
              shape="circle"
              size="large"
              type="text"
              icon={<SettingOutlined />}
            />
            </Popover>
            </div>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            {/* <UserDropdown /> */}
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}