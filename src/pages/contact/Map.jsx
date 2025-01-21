import { useEffect } from "react";

/* import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;  */


const Map = () => {

    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=22.813900;
        const lon=89.567231;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    }) 

   /*  const defaultProps = {
        center: {
            
     
          lat: 22.841930,
          lng: 89.558060
        },
        zoom: 11
    }; */
    return (
           <div className="my-2 border-2 border-blue-500 rounded-xl">
                
            
        

                        <iframe id="iframeId" height="300px" width="100%"></iframe>
         
        
      </div>
    );
};

export default Map ;