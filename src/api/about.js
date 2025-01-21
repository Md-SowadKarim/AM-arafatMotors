import axiosSecure from '.'

// add or update question data in db
export const addAbout = async (profileData,email) => {
    console.log(profileData,email)
    const { data } = await axiosSecure.put(`/about?email=${email}`, profileData)
    return data
  }


  // Get specific about profile
export const getOneAbout = async email => {
    console.log(email)
    const { data } = await axiosSecure(`/oneabout/${email}`)
    console.log(data.ref)
    return data.ref
  }

  export const getUserAbout = async email => {
    console.log(email)
    const { data } = await axiosSecure(`/oneabout/${email}`)
    console.log(data.ref)
    return data
  }