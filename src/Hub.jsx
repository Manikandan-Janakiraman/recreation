import atlas from '../src/assets/atlas.svg'
import skills from '../src/assets/skills.svg'
import idp from '../src/assets/idp.svg'
export const Hub = () => {
    return (
        <>


            <div className="maincontainer">
                             
                <div className="row">
                    <div className="part1">
                        <img src={atlas} alt="" />
                        <h4>Start with Atlas</h4>
                        <p>Explore MongoDB Atlas fundamentals,
                            from the document model to indexing strategies, to ensure your application's success.</p>
                        <a href="">Access the guide</a>
                    </div>
                    <div className="part2">
                        <img src={skills} alt="" />
                        <h4>MongoDB Atlas skills</h4>
                        <p>Explore MongoDB Atlas fundamentals,
                            from the document model to indexing strategies, to ensure your application's success.</p>
                        <a href="">Start Learning</a>
                    </div>
                    <div className="part3">
                        <img src={idp} alt="" />
                        <h4>Atlas into your IDP</h4>
                        <p>Explore MongoDB Atlas fundamentals,
                            from the document model to indexing strategies, to ensure your application's success.</p>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hub