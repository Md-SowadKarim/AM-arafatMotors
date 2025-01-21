import { useNavigate } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import { useState } from "react"
import { addQuestion } from "../../../api/question"
import AddUserFrom from "../../../components/Form/AddUserFrom"
import { addAbout, getOneAbout } from "../../../api/about"
import toast from "react-hot-toast"
import useAbout from "../../../hooks/useProfile"
import Loader from "../../../components/shared/Loader"


const Profile = () => {

  const navigate = useNavigate()
   const { user } = useAuth()
   const [preProfile,isLoading]=useAbout()
   console.log(preProfile)

  console.log(isLoading)
   console.log(user)
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
    const name = form.name.value
    const age = form.age.value
    const address = form.address.value
    const who = form.who.value
   if(!preProfile){
    var ref = form.ref.value
   }

    const image = form.image.files[0]
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
     
    }
    //const image_url = await imageUpload(image)
if(preProfile){
  var profileData = {
    "name": name,
    "age": parseInt(age),
    "address": address,
    "who": who,
    "host": host,
    "image": uploadButtonText


  }
}else{
  var profileData = {
    "name": name,
    "age": parseInt(age),
    "address": address,
    "who": who,
    "ref": ref,
    "image": uploadButtonText,
    "host": host,
    "totalQuesAsk":0,
    "totalAns":0,
    "totalEarn":0,
    "totalAnsBuy":0,
    "totalSpent":0,
    "avgRating":0,
    "totalRef":0,
    "totalAllocation":0

  }
}
   

    try {
      const data = await addAbout(profileData,user?.email)
      console.log(data)
      setUploadButtonText('Uploaded!')
      toast.success('Question Added!')
    
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }

     console.table(profileData)
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
      <AddUserFrom
      preProfile={preProfile}
        handleSubmit={handleSubmit}
     
        handleImageChange={handleImageChange}
        loading={loading}
        uploadButtonText={uploadButtonText}
      />
    </div>
  )


}

export default Profile
