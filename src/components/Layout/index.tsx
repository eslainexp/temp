import React from "react";
// import "./../../App.less";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { WalletModalProvider } from "@solana/wallet-adapter-ant-design";

import { LABELS } from "../../constants";
import { AppBar } from "../AppBar";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const { Header, Content } = Layout;

export const AppLayout = React.memo(({ children }) => {
  return (
    <WalletModalProvider>
      <div className="">
        <div title={LABELS.APP_TITLE}>
        <Sidebar />
          <Header className="App-Bar">
            <Link to="/">
              <div className="app-title">
                <h2>Solana DAPP</h2>
              </div>
            </Link>
            <AppBar />
            <Navbar />
          </Header>
          <div className="relative md:ml-64 bg-blueGray-100">
          <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              {/* Card stats */}
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="block w-full overflow-x-auto">
                  {/* All Paged Components */}
                  {children}    
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </WalletModalProvider>
  );
});
