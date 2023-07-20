import "./header.css";
import img from './images/iam.jpg';
export default function Headers()
{
    return (
        <div className="k1">
       <div className="main">
        <div className="first">admin login</div>
        <div className="f1"><input type="text" placeholder="Enter Email " /></div>
        <div className="f1"><input type="password" placeholder="Enter password " /></div>
        <div className="button"><button>submit</button></div>
      </div>
        </div>
    )
}