import React from "react";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";

function GuestLayout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <StickyFooter />
        </div>
    );
}

GuestLayout.propTypes = {};

export default GuestLayout;
