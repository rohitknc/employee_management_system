import './ds.css';
import {Link,Outlet} from 'react-router-dom';
import { AiFillDashboard,AiOutlineLogout, AiOutlineTable} from "react-icons/ai";
import {FcManager } from "react-icons/fc";
import {CgProfile } from "react-icons/cg";
export default function Dashboard()
{ 
    return (
<>
<div className="m1">
<div className="fc1">
<div className='title'>admin dashboard</div>
<div className='links'>
<ul>
   <li><AiFillDashboard className='pk'></AiFillDashboard><Link to='/dashboard' className='lk'>Dashboard</Link></li>
    <li><FcManager className='pk'></FcManager><Link to='/dashboard/manage' className='lk'>Employees</Link></li>
    <li><CgProfile className='pk'></CgProfile><Link to='/dashboard/profile' className='lk'>profile</Link></li>
    <li ><AiOutlineLogout className='pk'></AiOutlineLogout><span>Logout</span></li>
</ul>
</div>
</div>
<div className="fc2">
   <Outlet></Outlet>
</div>
</div>
</>
    )
    
}