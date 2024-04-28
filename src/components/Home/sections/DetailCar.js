import './DetailCar.scss'
import React, { useEffect } from 'react';
import { getCarById } from '../../../slices/carSlice'
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const DetailCar = (props) => {
    let queryParameter = props.location.search
    let carId = queryParameter.split("?id=")[1]

    const dispatch = useDispatch()
    const isLoadingCarById = useSelector(state => state.car.isLoadingCarById)
    const detailCar = useSelector(state => state.car.detailCar)

    useEffect(() => {
        dispatch(getCarById(carId))
        // eslint-disable-next-line
    }, [carId])

    if (isLoadingCarById) {
        return (
            <LoadingSpinner />
        )
    } else {
        return (
            <div className='detail-car-container'>
                <div className='container'>
                    <h1 className='detail-car-title'>DETAIL CAR PAGE</h1>

                    {/* detail-car-content */}
                    {detailCar &&
                        <div className='detail-car row'>
                            <div className='img-car-container col-5'>
                                <div
                                    style={{ backgroundImage: `url(${detailCar.image})` }}
                                    className='img-car'>
                                </div>
                            </div>

                            <div className='info-car-container col-7'>
                                <div className='info-car'>
                                    <h2 className='car-name'>{detailCar.name}</h2>
                                    <h3>Description:</h3>
                                    <p className='car-description'> {detailCar.description}</p>
                                    <button className='btn btn-primary'>Booking</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default DetailCar;