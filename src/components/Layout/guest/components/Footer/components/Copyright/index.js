import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Đồ án "}
            <Link color="inherit" to="https://material-ui.com/">
                Thiết kế phần mềm
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
