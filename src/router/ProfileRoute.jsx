import { Navigate } from 'react-router-dom'
import useProfile from '../hooks/useProfile'
import Loader from '../components/shared/Loader'




const ProfileRoute = ({ children }) => {
  const [preProfile,isLoading]=useProfile()

  if (isLoading) return <Loader />
  if (preProfile != null) return children
  return <Navigate to='dashboard/my-profile' />
}

export default ProfileRoute