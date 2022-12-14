import { useContext } from 'react'
import { Link} from 'react-router-dom';
import { loginContext }from './datashareContext'
function Home() {
    const{customerlocalstorage,singinlocalstorage}= useContext(loginContext)
    return ( 
        <>
        <h1 className='text-center' >Customer page</h1>
        {customerlocalstorage || singinlocalstorage ?
    <h3 className="text-center" >hello  {customerlocalstorage}{singinlocalstorage} </h3>
    :
    <h3 className="text-center">you have not rights this page ! please <Link to="/" >Sing in</Link>  </h3>
    }
        
        </>
     );
}

export default Home;