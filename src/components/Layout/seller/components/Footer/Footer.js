import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Typography, Link } from "@material-ui/core";

const Footer = (props) => {
    const { className, ...rest } = props;

    return (
        <div {...rest} className={clsx("root", className)}>
            <Typography variant="body1">
                &copy;{" "}
                <Link component="a" href="https://devias.io/" target="_blank">
                    Devias IO
                </Link>
                . 2019
            </Typography>
            <Typography variant="caption">
                Created with love for the environment. By designers and
                developers who love to work together in offices!
            </Typography>
        </div>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
