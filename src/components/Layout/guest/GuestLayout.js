import React from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import StickyFooter from "./components/Footer";

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
