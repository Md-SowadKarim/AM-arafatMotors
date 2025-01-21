import axiosSecure from '.'

// add or update question data in db
export const addQuestion = async (questionData,email) => {
    console.log(questionData,email)
    const { data } = await axiosSecure.put(`/question?email=${email}`, questionData)
    return data
  }

  export const getOneQuestion = async id => {
    const { data } = await axiosSecure(`/oneQuestion/${id}`)
    return data
  }