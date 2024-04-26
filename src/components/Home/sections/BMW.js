import './BMW.scss'
import Slider from "react-slick";
import React, { useEffect } from 'react';
import { getBmwCar } from '../../../slices/carSlice'
import { useDispatch, useSelector } from 'react-redux';

const BMW = (props) => {
    const dispatch = useDispatch()
    const bmwCarList = useSelector(state => state.car.bmwCarList)

    useEffect(() => {
        dispatch(getBmwCar())
        // eslint-disable-next-line
    }, [])

    return (
        <div className='BMW-section-container'>
            <div className='section-container container mt-5'>
                <div className='section-header'>
                    <span className='header-title'>BMW</span>
                    <button className='header-btn'><span>SEE MORE</span></button>
                </div>
                <div className='section-body'>
                    <Slider {...props.settings}>
                        {bmwCarList && bmwCarList.length > 0 &&
                            bmwCarList.map((item, index) => (
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

export default BMW