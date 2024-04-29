import React, { useEffect } from 'react';
import './Booking.scss';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getBookingById } from '../../slices/bookingSlice'
import { cancelBooking } from '../../slices/bookingSlice'

const Booking = (props) => {
    const dispatch = useDispatch()
    const isLoadingBookingById = useSelector(state => state.booking.isLoadingBookingById)
    const detailBooking = useSelector(state => state.booking.detailBooking)
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        let userId = user?.id
        if (userId) {
            dispatch(getBookingById(userId))
        }
        // eslint-disable-next-line
    }, [])

    const handleCancelBookingBtn = async () => {
        let bookingId = detailBooking?.id
        if (bookingId) {
            let response = await dispatch(cancelBooking(bookingId))
            if (response
                && response.payload
                && response.payload.response
                && response.payload.response.data
                && response.payload.response.data.errorCode !== 0
            ) {
                toast.error(response.payload.response.data.errorMessage)
            }

            if (response && response.payload && response.payload.errorCode === 0) {
                toast.success(response.payload.errorMessage)
                let userId = user?.id
                if (userId) {
                    dispatch(getBookingById(userId))
                }
            }
        }
    }

    return (
        <div className='booking-container'>
            <div className='container'>
                <h1 className='booking-title'>YOUR BOOKING</h1>

                <table className="table table-hover customers mt-3">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">status</th>
                            <th scope="col">time</th>
                            <th scope="col">userName</th>
                            <th scope="col">carName</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    {isLoadingBookingById ?
                        <tbody>
                            <tr>
                                <td colSpan={6}><LoadingSpinner /></td>
                            </tr>
                        </tbody>
                        :
                        <tbody>
                            {detailBooking ?
                                <tr>
                                    <td>{detailBooking.id}</td>
                                    <td>{detailBooking.status}</td>
                                    <td>{detailBooking.time}</td>
                                    <td>{detailBooking?.User?.firstName}</td>
                                    <td>{detailBooking?.Car?.name}</td>
                                    <td>
                                        <div className='action-container'>
                                            <button
                                                onClick={() => handleCancelBookingBtn()}
                                                className='btn btn-danger'>
                                                Cancel
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                :
                                <tr>
                                    <td colSpan={6}>
                                        <h3
                                            style={{ textAlign: 'center' }}
                                        >
                                            You don't have any booking
                                        </h3>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    }
                </table>
            </div>
        </div>
    )
}

export default Booking;