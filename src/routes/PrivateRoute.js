import { useEffect } from "react";
import {
    Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

const PrivateRoute = (props) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const history = useHistory()

    useEffect(() => {
        if (isLoggedIn === false) {
            history.push("/login")
            toast.error("You need to login")
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Route path={props.path} component={props.component} />
        </>
    )
}

export default PrivateRoute;