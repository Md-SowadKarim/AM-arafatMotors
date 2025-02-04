import axiosSecure from '.'

// add or update question data in db
export const addCourse = async (courseData,cid) => {
    ////console.log(courseData,cid,"data....................")
   const { data } = await axiosSecure.put(`/course?cid=${cid}`, courseData)
   return data
  }

  export const getAllCourse = async () => {
    const { data } = await axiosSecure('/allcourse')
    ////console.log(data)
    return data
  }

  export const getOneCourse = async cid => {
    const { data } = await axiosSecure(`/oneCourse/${cid}`) 
    return data
  }

  export const deleteOneCourse = async cid => {
    const { data } = await axiosSecure.delete(`/deleteOneCourse/${cid}`)
    return data
  }