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
  console.log(profile)
  console.log(oneUser,"lllllllllllllllllllllllllllll")
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
      console.log(data)
      console.log(data2)
      setUploadButtonText('Uploaded!')
      toast.success('Profile Added!')
    refetch()
    } catch (err) {
      console.log(err)
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
      preProfile? <div> 
      <h1>{profile.name}</h1>
      <h1>{profile.preaddress}</h1>
      <h1>{profile.peraddress}</h1>
    </div> :<div>
      <h1>there is no profile with this email</h1>
    </div>
     }
      <AddUserFrom
     
        handleSubmit={handleSubmit}
     
        handleImageChange={handleImageChange}
        loading={loading}
        uploadButtonText={uploadButtonText}  
      />
    </div>
  )

}


export default Profile
