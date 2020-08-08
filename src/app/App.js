import { ThemeProvider } from "@material-ui/styles";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "../theme";
import "./App.scss";

const User = React.lazy(() => import("../features/User"));
const Seller = React.lazy(() => import("../features/Seller"));
const Buyer = React.lazy(() => import("../features/Buyer"));
const Shop = React.lazy(() => import("../features/Shop"));
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
                        <Route component={Buyer} path="/buyer" />
                        <Route component={Shop} path="/shop" />
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
