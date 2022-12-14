import { useContext } from 'react'
import { Link} from 'react-router-dom';
import { loginContext }from './datashareContext'
function Adminhome() {
    const{adminlocalstorage}= useContext(loginContext)
    return ( 
        <>
        <h1 className="text-center" >Admin page</h1>
        {adminlocalstorage ?
    <h3 className="text-center" >hello  {adminlocalstorage}</h3>
    :
    <h3 className="text-center" >you have not rights this page ! please <Link to="/admin/singin" >Sing in</Link>  </h3>
    }
        
        </>
     );
}

export default Adminhome;