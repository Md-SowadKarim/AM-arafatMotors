import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

//import useRole from '../../hooks/useRole'
import { Helmet } from 'react-helmet-async';
//import { addQuestion } from '../../api/question'
import { toast } from 'react-hot-toast';

import useAuth from '../../../hooks/useAuth';
import AddCourseForm from '../../../components/Form/AddCourseForm';
import { addQuestion } from '../../../api/question';
import { addCourse } from '../../../api/course';
import { imageUpload } from '../../../api/utils';

const AddCourse = () => {
  const navigate = useNavigate()
   const { user } = useAuth()
   console.log(user)
  //  const {role,isLoading}=useRole(user.email)
  const [loading, setLoading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

 

  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const details = form.details.value
    const price = form.price.value
    const duration = form.duration.value
    const lesson = form.lesson.value
    const cid = form.cid.value
    const dt = form.dt.value
    const practical = form.practical.value
    const mechanical = form.mechanical.value
  
    const image = form.image.files[0]
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
     
    }
    const image_url = await imageUpload(image)

    const courseData = {
      "title": title,
      "details": details,
      "price": parseInt(price),
      "lesson": parseInt(lesson),
      "duration": duration,
      "cid": cid,
      "dt": dt,
      "practical": practical,
      "mechanical": mechanical,
      // "image": uploadButtonText,
      "image":image_url.data.display_url,
      "host": host,
    

    }

    try {
      const data = await addCourse(courseData,cid)
      console.log(data)
      setUploadButtonText('Uploaded!')
      toast.success('Course Added!')
    
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }

     console.table(courseData)
   }


  // Handle Image button text
  const handleImageChange = image => {
    setUploadButtonText(image.name)
  }

  return (
    <div>
      {/* <Helmet>
        <title>Create Biodata | Dashboard</title>
      </Helmet> */}

      {/* Form */}
      <AddCourseForm
        handleSubmit={handleSubmit}
     
        handleImageChange={handleImageChange}
        
        uploadButtonText={uploadButtonText}
       
      />
    </div>
  )


}

export default AddCourse
