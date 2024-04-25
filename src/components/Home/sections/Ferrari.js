import './Ferrari.scss'
import Slider from "react-slick";
import React, { useEffect } from 'react';
import { getFerrariCar } from '../../../slices/carSlice'
import { useDispatch, useSelector } from 'react-redux';

const Ferrari = (props) => {
    const dispatch = useDispatch()
    const ferrariCarList = useSelector(state => state.car.ferrariCarList)

    useEffect(() => {
        dispatch(getFerrariCar())
        // eslint-disable-next-line
    }, [])

    return (
        <div className='ferrari-section-container'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='header-title'>FERRARI</span>
                    <button className='header-btn'><span>SEE MORE</span></button>
                </div>
                <div className='section-body'>
                    <Slider {...props.settings}>
                        {ferrariCarList && ferrariCarList.length > 0 &&
                            ferrariCarList.map((item, index) => (
                                <div className='img-container px-3' key={`bmw-${index}`}>
                                    <div className='img-customize'>
                                        <div
                                            style={{ backgroundImage: `url(${item.image})` }}
                                            className='img-background'>
                                        </div>
                                        <div className='img-content'>{item.name}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Ferrari