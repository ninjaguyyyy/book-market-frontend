import React, { Suspense } from "react";
import logo from "../logo.svg";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const User = React.lazy(() => import("../features/User"));
const NotFound = React.lazy(() => import("../components/NotFound"));
const Home = React.lazy(() => import("../features/Home"));

function App() {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route component={User} path="/user" />
                    <Route component={Home} path="/" exact />
                    <Route component={NotFound} path="*" exact />
                </Switch>
                <Footer />
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
