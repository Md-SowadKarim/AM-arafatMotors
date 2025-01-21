import axiosSecure from '.'

// add or update question data in db
export const addOrder = async (orderData,oid) => {
    console.log(orderData,oid,"data....................")
   const { data } = await axiosSecure.put(`/order?oid=${oid}`, orderData)
   return data
  }

  export const getUserOrder = async (uemail) => {
    console.log(uemail,"data....................")
    const { data } = await axiosSecure(`/userOrder/${uemail}`)
    console.log(data)
    return data
  }
  export const getAllOrder = async () => {
    const { data } = await axiosSecure('/allOrder')
    console.log(data)
    return data
  }

  export const getOneOrder = async oid => {
    const { data } = await axiosSecure(`/oneOrder/${oid}`) 
    return data
  }

  export const deleteOneCourse = async cid => {
    const { data } = await axiosSecure.delete(`/deleteOneCourse/${cid}`)
    return data
  }

  export const deleteOneOrder = async oid => {
    const { data } = await axiosSecure.delete(`/deleteOneOrder/${oid}`)
    return data
  }