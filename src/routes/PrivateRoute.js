import {
    Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const user = useSelector(state => state.user.user)
    const history = useHistory()

    useEffect(() => {
        history.push('/login')
        // eslint-disable-next-line
    }, [])

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