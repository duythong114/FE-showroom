import {
    Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const user = useSelector(state => state.user.user)

    if (isAuthenticated && user) {
        return (
            <>
                <Route path={props.path} component={props.component} />
            </>
        )
    } else {
        return Redirect("/login")
    }
}

export default PrivateRoute;