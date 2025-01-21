import React, { useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { addCourse, getOneCourse } from '../../../api/course'
import { useQuery } from '@tanstack/react-query'
import AddCourseForm from '../../../components/Form/AddCourseForm'
import Loader from '../../../components/shared/Loader'
import EditCourseForm from '../../../components/Form/EditCourseForm'
import useAuth from '../../../hooks/useAuth'
import toast from 'react-hot-toast'
import { imageUpload } from '../../../api/utils'

const EditCourse = () => {
    const navigate=useNavigate()
      const [load, setLoad] = useState(false)
      const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
      const { user } = useAuth()
    const data=useLoaderData()
    const d=useParams()
    const { data: course={} , refetch,loading } = useQuery({
        queryKey: ['oneCourse'],
        queryFn: async () => await getOneCourse(d.cid), 
      })
      console.log(course)
    console.log(d.cid)
    console.log(data)
refetch()
    const handleSubmit = async e => {
        setLoad(true)
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const details = form.details.value
        const price = form.price.value
        const duration = form.duration.value
        const lesson = form.lesson.value
        const cid = form.cid.value
      
     //   const image = form.image.files[0]
        const host = {
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email,
         
        }
      
       
    
        const courseData = {
          "title": title,
          "details": details,
          "price": parseInt(price),
          "lesson": parseInt(lesson),
          "duration": duration,
          "cid": course.cid,
          "host": host,
        
    
        }
    
        try {
          const data = await addCourse(courseData,cid)
          console.log(data)
          setUploadButtonText('Uploaded!')
          toast.success('Course Updated!')
          refetch()
        //   window.location.reload();
          navigate("/dashboard/manage-order")
        
        
        } catch (err) {
          console.log(err)
          toast.error(err.message)
        } finally {
          setLoad(false)
        }
    
         console.table(courseData)
       }
    
    
      // Handle Image button text
      const handleImageChange = image => {
        setUploadButtonText(image.name)
      }



    if(load) return <Loader/>
    else
  return (
    <div>
        
       <EditCourseForm
        handleSubmit={handleSubmit}
     data={course}
      
       
        
      
      />
    </div>
  )
}

export default EditCourse
