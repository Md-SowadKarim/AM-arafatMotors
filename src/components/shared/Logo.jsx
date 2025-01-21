import { Link } from 'react-router-dom'
import logoImg from '../../assets/image/logo3.png'
const Logo = () => {
  return (
    <Link to='/'>
       <div className='flex bg-white rounded-2xl  items-center relative'>
              <img
              //  className='hidden md:block '
                src={logoImg}
                alt='logo'
                width='200'
                height='100'
              />
              <h1 className='absolute left-12 '></h1>
              </div>
    
    </Link>
  )
}

export default Logo
