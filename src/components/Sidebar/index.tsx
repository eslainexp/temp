import { SettingOutlined } from "@ant-design/icons";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-ant-design";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button, Popover } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { LABELS } from "../../constants";
import { Settings } from "../Settings";
import "./index.less"

// import NotificationDropdown from "./NotificationDropdown.js";
// import UserDropdown from "./UserDropdown.js";

export default function Sidebar() {
  const { connected } = useWallet();

  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-hidden md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div>
            <WalletMultiButton style={{ fontSize: '16px', width: '100%', margin: 0, padding: 0 }} type="primary" />
          </div>        
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Solona
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="inline-block relative">
              {/* <UserDropdown /> */}
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Tailwind Starter Kit
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="group menu-section"
                  to="/"
                >
                  <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i> Home
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="group menu-section active"
                  to="/dashboard"
                >
                  <i className="fas fa-tv opacity-75 mr-2 text-sm"></i> NFT Board
                </Link>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            <div>
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
          </div>
        </div>
      </nav>
    </>
  );
}