import axiosSecure from '.'

// Save user data in database
export const saveUser = async user => {
  const sid2=Math.floor(Math. random() * (99999999-10000000+1)) + 10000000
      const sid="SID"+sid2
  const currentUser = {
    name: user.displayName,
    email: user.email,
    role: 'student',
    status: 'Verified',
    sid:sid,
    dob:""
  }
  console.log(currentUser )
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)

  return data
}

// Get token from server
export const getToken = async email => {
  const { data } = await axiosSecure.post(`/jwt`, { email })
  console.log('Token received from server------>', data)
  return data
}

// Clear token from browser
export const clearCookie = async () => {
  const { data } = await axiosSecure.get('/logout')
  return data
}

// Get user role
export const getRole = async email => {
  const { data } = await axiosSecure(`/user/${email}`)
  return data.role
}
// Get specific
export const getOneUser = async email => {
  const { data } = await axiosSecure(`/oneuser/${email}`)
  return data
}
// Get specific
export const verifyUser = async email => {
  const { data } = await axiosSecure(`/verifyuser/${email}`)
  return data
}

// Get Specific User 
export const getPremiumRequest = async email => {
  const { data } = await axiosSecure(`/user/${email}`)
  return data
}

// get all users
export const getAllUsers = async () => {
  const { data } = await axiosSecure('/users')
  return data
}

// Save user data in database
export const updateRole = async ({ email, rolee }) => {
  const currentUser = {
    email,
    role:rolee,
    status: 'Verified',
  }
  console.log(currentUser)
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser)
  return data
}

// Save user data in database
export const updateDOB = async ({ email, dob }) => {
  const currentUser = {
    email,
    dob:dob,
    status: 'Verified',
  }
  console.log(currentUser)
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser)
  return data
}

// become a host
export const becomeHost = async email => {
  const currentUser = {
    email,
    status: 'Requested',
  }
  console.log("aita ki console hbe na....",currentUser)
  const { data } = await axiosSecure.put(`/users/${email}`, currentUser)
  return data
}

export const makePremium =async email=>{
  const {data}=await axiosSecure.put(`/makepremium/${email}`)
  return data
}