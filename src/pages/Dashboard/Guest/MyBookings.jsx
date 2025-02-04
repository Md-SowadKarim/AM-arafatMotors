import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import { getBookings } from '../../../api/bookings'
import Loader from '../../../components/Shared/Loader'
import TableRow from '../../../components/Dashboard/Sidebar/TableRows/TableRow'


const MyBookings = () => {
  const { user, loading } = useAuth()
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['bookings', user?.email],
    enabled: !loading,
    queryFn: async () => await getBookings(user?.email),
  })
//console.log(bookings)
  if (isLoading) return <h1>Loading</h1>
  return (
    <>
      <Helmet>
        <title>My Request | Dashboard</title>
      </Helmet>

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                     Bio-Id
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                     Mobile 
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table Row Data */}{' '}
                  {bookings &&
                    bookings.map(booking => (
                      <TableRow key={booking._id} booking={booking} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyBookings
