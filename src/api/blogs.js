import axiosSecure from '.'

// add or update question data in db
export const addBlog = async (blogData,bid) => {
    ////console.log(blogData,bid,"data....................")
   const { data } = await axiosSecure.put(`/blog?bid=${bid}`, blogData)
   return data
  }

  export const getAllBlog = async () => {
    const { data } = await axiosSecure('/allblog')
    ////console.log(data)
    return data
  }

  export const getOneBlog = async bid => {
    const { data } = await axiosSecure(`/oneBlog/${bid}`)
    return data
  }

  export const deleteOneBlog = async bid => {
    const { data } = await axiosSecure.delete(`/deleteOneBlog/${bid}`)
    return data
  }