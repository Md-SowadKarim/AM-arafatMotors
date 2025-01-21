import useAuth from './useAuth'
import { getRole } from '../api/auth'
import { useQuery } from '@tanstack/react-query'
import { getOneAbout } from '../api/about'
import { getOneProfile } from '../api/profile'
const useProfile = () => {
  const { user, loading } = useAuth()
  const { data: preProfile, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getOneProfile(user?.email),
    queryKey: ['preProfile'],
  })

  return [preProfile, isLoading]
}

export default useProfile
