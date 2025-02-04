import React, { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

//import useRole from '../../hooks/useRole'
import { Helmet } from 'react-helmet-async';
//import { addQuestion } from '../../api/question'
import { toast } from 'react-hot-toast';

import useAuth from '../../../hooks/useAuth';
import AddCourseForm from '../../../components/Form/AddCourseForm';
import { addQuestion } from '../../../api/question';
import { addCourse } from '../../../api/course';
import AddBlogForm from '../../../components/Form/AddBlogForm';
import { imageUpload } from '../../../api/utils';
import Loader from '../../../components/shared/Loader';
import { addBlog, getOneBlog } from '../../../api/blogs';
import EditBlogForm from '../../../components/Form/EditBlogForm';
import { useQuery } from '@tanstack/react-query';

const EditBlogs = () => {
   
  const navigate = useNavigate()
   const { user } = useAuth()
   //console.log(user)
   const d=useParams()
   const { data: blog={} , refetch } = useQuery({
       queryKey: ['oneBlog'],
       queryFn: async () => await getOneBlog(d.bid), 
     })
  //  const {role,isLoading}=useRole(user.email)
  const [loading, setLoading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
  const [uploadButtonText2, setUploadButtonText2] = useState('Upload Image2')
  const [uploadButtonText3, setUploadButtonText3] = useState('Upload Image3')
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })
  const [urgent,setUrgent]=useState(false)

  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    const form = e.target
    const title1 = form.title1.value
    const details1 = form.details1.value
    const title2 = form.title2.value
    const details2 = form.details2.value
    const title3 = form.title3.value
    const details3 = form.details3.value
    const bid = form.bid.value
    const date = form.date.value
  
  
  
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
     
    }
    // const image_url1 = await imageUpload(image1)
    // const image_url2 = await imageUpload(image2)
    // const image_url3 = await imageUpload(image3)

    const blogData = {
      "title1": title1,
      "details1": details1,
      "title2": title2,
      "details2": details2,
      "title3": title3,
      "details3": details3,
      "date": date,
      "bid": bid,
    //   "image1": uploadButtonText,
    //   "image2": uploadButtonText2,
    //   "image3": uploadButtonText3,
    //  "image1":image_url1.data.display_url,
    //  "image2":image_url2.data.display_url,
    //  "image3":image_url3.data.display_url,
      "host": host,
    

    }

    try {
        
      const data = await addBlog(blogData,bid)
      //console.log(data)
    
      toast.success('Blogs Updated!')
      refetch()
      navigate("/dashboard/manage-blogs")
    
    } catch (err) {
      //console.log(err)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }

     console.table(blogData)
    
     setLoading(false)
   }


  // Handle Image button text
  const handleImageChange = image => {
    setUploadButtonText(image.name)
  }
   // Handle Image button text
   const handleImageChange2 = image => {
    setUploadButtonText2(image.name)
  }
   // Handle Image button text
   const handleImageChange3 = image => {
    setUploadButtonText3(image.name)
  }
if(loading) return <Loader/>
else
  return (
    <div>
      {/* <Helmet>
        <title>Create Biodata | Dashboard</title>
      </Helmet> */}

      {/* Form */}
      <EditBlogForm
        handleSubmit={handleSubmit}
        data={blog}
        handleImageChange={handleImageChange}
        handleImageChange2={handleImageChange2}
        handleImageChange3={handleImageChange3}
        loading={loading}
        uploadButtonText={uploadButtonText}
        uploadButtonText2={uploadButtonText2}
        uploadButtonText3={uploadButtonText3}
        setUrgent={setUrgent}
        urgent={urgent}
      />
    </div>
  )


}

export default EditBlogs
