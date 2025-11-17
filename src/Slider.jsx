import aiImage from '../src/assets/ai.svg'
import paymentImage from '../src/assets/fs.png'
import consumer from '../src/assets/mc.png'

export const Slider = () => {
    return (
        <>


            <div className="slidecontainer">

                <div className="rowslider">
                    <div className="slide1">
                        <img className="images" src={aiImage} alt="" />
                        <h4>Build AI-powered applications</h4>
                        <p>MongoDB delivers agile, real-time and secure capabilities essential for developers
                            to create transformative AI-powered experiences.
                            It’s architected for the new generation of modern applications.
                        </p><a href="">Learn More </a>
                    </div>
                    <div className="slide2">
                        <img className="images" src={paymentImage} alt="" />
                        <h4>Ensure always-on secure, and available payments </h4>
                        <p>MongoDB delivers agile, real-time and secure capabilities essential for developers
                            to create transformative AI-powered experiences.
                            It’s architected for the new generation of modern applications.
                        </p><a href="">Learn More </a>
                    </div>
                    <div className="slide3">
                        <img className="images" src={consumer} alt="" />
                        <h4>Modernize Consumer experience</h4>
                        <p>MongoDB delivers agile, real-time and secure capabilities essential for developers
                            to create transformative AI-powered experiences.
                            It’s architected for the new generation of modern applications.
                        </p><a href="">Learn More </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slider