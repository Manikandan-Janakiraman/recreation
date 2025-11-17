export const Banner = () => {
    return (
        <banner>
             <div className="Content">
                    <div className="row">
                        <div className="column1-c">
                            <h4>Atlas Database</h4>
                            <p>MongoDB simplifies data management with its intuitive document model,
                                mapping unique objects to distinct documents. MongoDB Atlas eliminates complexity with
                                native support for full-text search, vector search, and stream processing. This empowers
                                developers to adapt data models quickly—driving faster innovation and improved productivity.
                            </p>
                            <button>Get Started</button>
                        </div>
                        <div className="column2">
                            <div className="row">
                            <img src="./src/new.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        </banner>
    )
}
export default Banner