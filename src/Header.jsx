export const Header = () => {
    return (

<header>
    <div className="mainhead">
        <div className="parent">
            <div className="child">
                <button>New</button> &nbsp; &nbsp;
                <span>Mongo DB: Build your AI future on Mongo DB. Faster with Mongo DB.</span>
                <a href="">Learn More</a>
            </div>

        </div>

        <div className="child2">
            &lt; &nbsp; &gt;
        </div>
    </div>

    <div className="navbar">
        <div className="container">
            <div className="nav">
                <img src="./src/logo.svg" alt="" />
                <a href="">Products</a>
                <a href="">Resources</a>
                <a href="">Solutions</a>
                <a href="">Company</a>
                <a href="">Pricing</a>
            </div>

            <div className="nav2">
                {/* <a href="">Eng</a>
              <a href="">Support</a>
              <a href="">Sign In</a> */}
                <button>Get Started</button>
            </div>
        </div>
    </div>
    <hr />


</header>
    )
}
export default Header