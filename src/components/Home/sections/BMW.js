import './BMW.scss'
import Slider from "react-slick";
import React from 'react';

const BMW = (props) => {
    return (
        <div className='BMW-section-container'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='header-title'>BMW</span>
                    <button className='header-btn'><span>SEE MORE</span></button>
                </div>
                <div className='section-body'>
                    <Slider {...props.settings}>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background bmw-img'></div>
                                <div className='img-content'>BMW 1</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background bmw-img'></div>
                                <div className='img-content'>BMW 2</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background bmw-img'></div>
                                <div className='img-content'>BMW 3</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background bmw-img'></div>
                                <div className='img-content'>BMW 4</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background bmw-img'></div>
                                <div className='img-content'>BMW 5</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background bmw-img'></div>
                                <div className='img-content'>BMW 6</div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default BMW