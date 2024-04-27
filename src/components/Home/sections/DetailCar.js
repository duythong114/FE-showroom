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
            <div className='detail-car-container container'>
                {detailCar &&
                    <h1>Car: {detailCar.name}</h1>
                }
            </div>
        )
    }
}

export default DetailCar;