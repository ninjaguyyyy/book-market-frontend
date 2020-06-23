import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useMediaQuery } from "@material-ui/core";

import Sidebar from "./components/SideBar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import "./SellerLayout.scss";

const SellerLayout = (props) => {
    const { children } = props;

    const [openSidebar, setOpenSidebar] = useState(false);

    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    };

    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };

    return (
        <div className="SellerLayout">
            <Topbar onSidebarOpen={handleSidebarOpen} />
            <Sidebar onClose={handleSidebarClose} />
            <main className="content">
                {children}
                <Footer />
            </main>
        </div>
    );
};

SellerLayout.propTypes = {
    children: PropTypes.node,
};

export default SellerLayout;
