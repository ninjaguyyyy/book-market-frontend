import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./components/TabPanel";
import SliderTab from "./components/SliderTab";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginTop: "100px",
        marginBottom: "100px",
    },
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function InfoTab(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab label="Xem trước" {...a11yProps(0)} />
                    <Tab label="Mô tả" {...a11yProps(1)} />
                    <Tab label="Đang phát triển" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <SliderTab imgs={props.previews} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.des}
            </TabPanel>
            <TabPanel value={value} index={2}>
                Đang phát triển
            </TabPanel>
        </div>
    );
}
