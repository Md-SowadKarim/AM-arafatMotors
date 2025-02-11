
import image from "../../../public/image/imggakkery4.jpg"
import image1 from "../../../public/image/imggallery1.jpg"
import image2 from "../../../public/image/imggallary2.jpg"
import image3 from "../../../public/image/imggallary3l.jpg"
import image4 from "../../../public/image/imggallery6.jpg"
import image5 from "../../../public/image/imggallery5.jpg"
import image6 from "../../../public/image/new.jpg"

const ImgGallary = () => {
    return (
        <section className="py-6 dark:bg-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto">
        {/* <h1 className="text-4xl font-bold leadi text-center mb-4 sm:text-4xl">Image Gallery</h1>
        <hr className="h-1 w-[60%] bg-blue-500 mb-8  mx-auto" /> */}
         <span className="relative flex justify-center mb-9 ">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-blue-500 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white px-6 text-4xl my-8 font-semibold ">Image Gallary</span>
                </span>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                <img className="object-cover w-full border-4 border-blue-500 rounded-xl dark:bg-gray-500 aspect-square" src={image6} />
                <img className="object-cover w-full border-4 border-blue-500 rounded-xl dark:bg-gray-500 aspect-square" src={image1} />
                <img className="object-cover w-full border-4 border-blue-500 rounded-xl dark:bg-gray-500 aspect-square" src={image2} />
                <img className="object-cover w-full border-4 border-blue-500 rounded-xl dark:bg-gray-500 aspect-square" src={image3} />
                <img className="object-cover w-full border-4 border-blue-500 rounded-xl dark:bg-gray-500 aspect-square" src={image4} />
                <img className="object-cover w-full border-4 border-blue-500 rounded-xl dark:bg-gray-500 aspect-square" src={image5} />
            </div>
        </div>
    </section>
    );
};

export default ImgGallary;