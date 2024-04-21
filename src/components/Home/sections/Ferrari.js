import './Ferrari.scss'
import Slider from "react-slick";

const Ferrari = (props) => {
    return (
        <div className='ferrari-section-container'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='header-title'>FERRARI</span>
                    <button className='header-btn'><span>SEE MORE</span></button>
                </div>
                <div className='section-body'>
                    <Slider {...props.settings}>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background ferrari-img'></div>
                                <div className='img-content'>FERRARI 1</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background ferrari-img'></div>
                                <div className='img-content'>FERRARI 2</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background ferrari-img'></div>
                                <div className='img-content'>FERRARI 3</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background ferrari-img'></div>
                                <div className='img-content'>FERRARI 4</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background ferrari-img'></div>
                                <div className='img-content'>FERRARI 5</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background ferrari-img'></div>
                                <div className='img-content'>FERRARI 6</div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Ferrari