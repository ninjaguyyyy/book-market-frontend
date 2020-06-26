import React, { Suspense } from "react";
import logo from "../logo.svg";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import theme from "../theme";
const User = React.lazy(() => import("../features/User"));
const Seller = React.lazy(() => import("../features/Seller"));
const Admin = React.lazy(() => import("../features/Admin"));
const NotFound = React.lazy(() => import("../components/NotFound"));
const Home = React.lazy(() => import("../features/Home"));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Suspense fallback={<div>Loading</div>}>
                <BrowserRouter>
                    <Switch>
                        <Route component={Seller} path="/seller" />
                        <Route component={Admin} path="/admin" />
                        <Route component={User} path="/user" />
                        <Route component={Home} path="/" exact />
                        <Route component={NotFound} path="*" exact />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
