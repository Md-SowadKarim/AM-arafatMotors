import axiosSecure from '.'

// add or update question data in db
export const addProfile = async (profileData,sid) => {
    console.log(profileData,sid)
    const { data } = await axiosSecure.put(`/profile?sid=${sid}`, profileData)
    return data
  }


  // Get specific about profile
export const getOneProfile = async email => {
    console.log(email)
    const { data } = await axiosSecure(`/oneProfile/${email}`)
    console.log(data)
    return data
  }
  export const deleteOneProfile = async sid => {
    const { data } = await axiosSecure.delete(`/deleteOneProfile/${sid}`)
    return data
  }

// get all users
export const getAllProfile = async () => {
  const { data } = await axiosSecure('/allProfile')
  return data
}