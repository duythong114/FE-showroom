import './Lamborghini.scss'
import Slider from "react-slick";

const Lamborghini = (props) => {
    return (
        <div className='lamborghini-section-container'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='header-title'>LAMBORGHINI</span>
                    <button className='header-btn'><span>SEE MORE</span></button>
                </div>
                <div className='section-body'>
                    <Slider {...props.settings}>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background lamborghini-img'></div>
                                <div className='img-content'>LAMBORGHINI 1</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background lamborghini-img'></div>
                                <div className='img-content'>LAMBORGHINI 2</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background lamborghini-img'></div>
                                <div className='img-content'>LAMBORGHINI 3</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background lamborghini-img'></div>
                                <div className='img-content'>LAMBORGHINI 4</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background lamborghini-img'></div>
                                <div className='img-content'>LAMBORGHINI 5</div>
                            </div>
                        </div>
                        <div className='img-container px-3'>
                            <div className='img-customize'>
                                <div className='img-background lamborghini-img'></div>
                                <div className='img-content'>LAMBORGHINI 6</div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Lamborghini