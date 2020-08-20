import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     (async function () {
    //         console.log("hehe");
    //     })();
    //     return () => {
    //         // cleanup
    //     };
    // }, []);

    return (
        <Route
            {...rest}
            render={(props) =>
                isLogin() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/user/login" />
                )
            }
        />
    );
};

export default connect(null, null)(PrivateRoute);
