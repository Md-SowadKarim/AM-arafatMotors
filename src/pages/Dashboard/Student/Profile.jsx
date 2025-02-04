import { useNavigate } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import { useState } from "react"
import { addQuestion } from "../../../api/question"
import AddUserFrom from "../../../components/Form/AddUserFrom"
import { addAbout, getOneAbout } from "../../../api/about"
import toast from "react-hot-toast"
import useAbout from "../../../hooks/useProfile"
import Loader from "../../../components/shared/Loader"
import { addProfile, getOneProfile } from "../../../api/profile"
import useProfile from "../../../hooks/useProfile"
import { useQuery } from "@tanstack/react-query"
import { getOneUser, updateDOB } from "../../../api/auth"
import { imageUpload } from "../../../api/utils"


const Profile = () => {

  const navigate = useNavigate()
   const { user } = useAuth()
   const { data: profile={} , refetch, } = useQuery({
    queryKey: ['oneProfile'],
    queryFn: async () => await getOneProfile(user?.email), 
  })
  const { data: oneUser={} , } = useQuery({
    queryKey: ['oneUser'],
    queryFn: async () => await getOneUser(user?.email), 
  })
  //console.log(profile)
  //console.log(oneUser,"lllllllllllllllllllllllllllll")
   const [preProfile,isLoading]=useProfile()

   var sid=""
   
   

  
  //  const {role,isLoading}=useRole(user.email)
  const [loading, setLoading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    const form = e.target
    const nam = form.name.value
    const phone = form.phone.value
   // const email = form.email.value
    const emergency = form.emergency.value
    const preaddress = form.preaddress.value
    const peraddress = form.peraddress.value
    const dob = form.dob.value
    const nid = form.nid.value
    const image = form.image.files[0]
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
      sid : user?.sid,
      dob : dob
    }
    if(preProfile.sid==undefined){
    // const sid2=Math.floor(Math. random() * (99999999-10000000+1)) + 10000000
      sid=oneUser?.sid
    }else{
      sid=preProfile.sid
    }
   
    
    const image_url = await imageUpload(image)
  
  const profileData = {
    "name": nam,
    "phone": phone,
    "email": user?.email,
    "emergency": emergency,
    "preaddress": preaddress,
    "peraddress": peraddress,
    "nid": nid,
    "dob": dob,
     // "image": uploadButtonText,
     "image":image_url.data.display_url,
    "host": host,
    "sid": sid,
  }

  // const mail=user?.email

    try {
      const data = await addProfile(profileData,sid)
      const data2 = await updateDOB(host)
      //console.log(data)
      //console.log(data2)
      setUploadButtonText('Uploaded!')
      toast.success('Profile Added!')
      navigate("/dashboard")
    refetch()
    } catch (err) {
      //console.log(err)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }

     console.table(profileData)
     setLoading(false)
   }


  // Handle Image button text
  const handleImageChange = image => {
    setUploadButtonText(image.name)
  }
if(isLoading)return <Loader/>
else
  return (
    <div>
      {/* <Helmet>
        <title>Create Biodata | Dashboard</title>
      </Helmet> */}

      {/* Form */}
     {
      preProfile?
        <div>
            
      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div class="flex flex-col justify-between md:w-[50%] leading-normal p-4">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ভেরিফিকেশনের জন্য জন্ম তারিখ আপডেট করুন </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Details-  {preProfile.sid}</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Name : {preProfile.name}</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Email : {preProfile.email}</p>
        
          <ul>
          <li className="flex gap-x-3 mt-4">
                                          <span className="text-left">
                                              <strong className="font-semibold text-gray-900">  More -  </strong>
      
                                          <p> •	Date Of Birth : {preProfile.dob} </p>
                                          <p> •	Nid Number : {preProfile.nid} </p>
                                          <p> •	 Present Address : {preProfile.preaddress} </p>
                                          <p> •	 Permanent Address : {preProfile.peraddress} </p>
                                          <p> •	Phone : {preProfile.phone} </p>
                                          <p> •	Emergency : {preProfile.emergency} </p>
                                          
                                         
                                           </span>
                                      </li>
          </ul>
              </div>
          <div className='md:w-[50%] p-2 text-center flex justify-center border-2 border-red-500 rounded-xl'>
         
 <img class="object-cover rounded-t-lg h-96 border-4 border-blue-500 rounded-xl md:w-100 md:rounded-none md:rounded-s-lg" src={preProfile.image} alt="image"/>
         
           
         
          </div>
           
      </a>
      
          </div>
      :<div>
      <div>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ভেরিফিকেশনের জন্য জন্ম তারিখ আপডেট করুন </h5>
             <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"> There is no profile with this email</h1>
      </div>
    </div>
     }
      <AddUserFrom
     
        handleSubmit={handleSubmit}
     
        // handleImageChange={handleImageChange}
        loading={loading}
        uploadButtonText={uploadButtonText}  
      />
    </div>
  )

}


export default Profile
