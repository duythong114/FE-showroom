import {
    Switch,
    Route
} from "react-router-dom";

import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import User from '../components/User/User'
import Car from "../components/Car/Car";
import Payment from "../components/Payment/Payment";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
    return (
        <>
            <Switch>
                <PrivateRoute path="/user" component={User} />
                <PrivateRoute path="/car" component={Car} />
                <PrivateRoute path="/payment" component={Payment} />

                <Route path="/" exact>
                    <h1>Home Page</h1>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="*">
                    404 NOT FOUND
                </Route>
            </Switch>
        </>
    )
}

export default AppRoutes;