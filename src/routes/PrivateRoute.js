import { useEffect } from "react";
import {
    Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

const PrivateRoute = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const history = useHistory()

    useEffect(() => {
        if (isAuthenticated === false) {
            history.push("/login")
            toast.error("Please login to continue")
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