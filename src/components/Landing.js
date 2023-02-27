// import "./loding-css.css"
import {NavLink} from "react-router-dom"
import "./landing.css"
const Landing = () =>{
    return(
    <div className="landingpage">
     <div className="poster">
        <img style={{height:"100%",width:"100%"}} src="https://learn.g2.com/hubfs/iStock-1163919598.jpg" alt="" />
     </div>
     <div className="welctext">
        {/* <h1>Welcome!! to INSTA-CLONE</h1> */}
        <p className="welcome"><b>WELCOME!!!</b></p>
        <p className="text">TO INSTA-CLONE</p>
        <NavLink  to="/post"><button >Enter</button></NavLink>
     </div>
    </div>
    )
}
export default Landing