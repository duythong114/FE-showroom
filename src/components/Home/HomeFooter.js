import './HomeFooter.scss'

const HomeFooter = (props) => {
    return (
        <div className='home-footer-container'>
            <div className="map-footer">
            </div>

            <div className='home-footer'>
                <div className="social-list">
                    <a href='/#'><i className="fab fa-facebook"></i></a>
                    <a href='/#'><i className="fab fa-instagram"></i></a>
                    <a href='/#'><i className="fab fa-youtube"></i></a>
                    <a href='/#'><i className="fab fa-twitter"></i></a>
                    <a href='/#'><i className="fab fa-linkedin"></i></a>
                    <a href='/#'><i className="fab fa-pinterest-p"></i></a>
                </div>
                <div className="copyright">
                    &copy; 2024
                    <a
                        href="https://lnk.bio/ferrari"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://lnk.bio/ferrari
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter