import {
    Switch,
    Route
} from "react-router-dom";

import Home from "../components/Home/Home";
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import User from '../components/ManageUser/User'
import Car from "../components/Car/Car";
import Payment from "../components/Payment/Payment";
import Personal from "../components/Personal/Personal";
import DetailUser from "../components/ManageUser/DetailUser";
import PrivateRoute from "./PrivateRoute";


const AppRoutes = () => {
    return (
        <>
            <Switch>
                <PrivateRoute path="/personal" component={Personal} />
                <PrivateRoute path="/car" component={Car} />
                <PrivateRoute path="/payment" component={Payment} />

                <PrivateRoute path="/user" exact component={User} />
                <PrivateRoute path="/user/detail/:id" component={DetailUser} />

                <Route path="/" exact>
                    <Home />
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