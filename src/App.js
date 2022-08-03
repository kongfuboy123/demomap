import React,{useState,useEffect} from 'react';
import ArrList from './ArrList';
// import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import {GoogleMap,Marker,useJsApiLoader,Polyline  } from '@react-google-maps/api'
function App() {
  const { isLoaded} = useJsApiLoader({
    googleMapsApiKey:process.env.REACT_APP_GOOGLEMAP_API_KEY 
  })
  // const center = { lat: 48.8584, lng: 2.2945 }
  // const center = { lat: -35.04217665300491, lng: 150.74464532325302 }
  const center = { lat: 0, lng: -180 }
  const onLoad = polyline => {
    console.log('polyline: ', polyline)
  };
  const data = [
    {lat: 37.772, lng: -122.214},
    {lat: 36.772, lng: -125.214},
    {lat: 35.772, lng: -130.214},
    {lat: 30.772, lng: -140.214},
    {lat: 28.772, lng: -143.214},
    {lat: 27.772, lng: -145.214},
    {lat: 21.291, lng: -157.821},
    {lat: 15.291, lng: -160.821},
    {lat: 11.291, lng: -167.821},
    {lat: 0.291, lng: -174.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
  ];
  const [arr,setArr] = useState([])
  const [toggle, setToggle] = useState(false)
  const path = [
    {lat: 37.772, lng: -122.214},
    {lat: 30.772, lng: -140.214},
    {lat: 21.291, lng: -157.821},
    {lat: 11.291, lng: -167.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
  ];
  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    // paths: [
    //   {lat: 37.772, lng: -122.214},
    //   {lat: 21.291, lng: -157.821},
    //   {lat: -18.142, lng: 178.431},
    //   {lat: -27.467, lng: 153.027}
    // ],
    zIndex: 1
  };
  
  const handleClick = ()=>{
    let t=null;
    setArr(arr=>[])
    clearTimeout(t)
    // for (let i=0; i<data.length; i++){
    //   t=setTimeout(() =>{
    //     setArr((arr)=>[...arr,data[i]])
    //   },1000*i)
    // }
    data.map((item,i)=>t=setTimeout(()=>{setArr(arr=>[...arr,item])},1000*i))
  }

  if(!isLoaded){
    return <div>loading...</div>
  }

  return (
  
    <div className='flex flex-col justify-center items-center '>
      <GoogleMap 
      center={center} 
      zoom={2} 
      mapContainerStyle={{width:'50vw', height:'50vh'}}
      options={{
        zoomControl:false,
        streetViewControl:false,
        mapTypeControl:false,
        // fullscreenControl:false
      }}
      >
        {/* <Marker position={center}/> */}
        < Polyline
        onLoad = {onLoad}
        path = {arr}
        options = {options}
        />
    </GoogleMap>
    <button className='bg-blue-500 border-2 px-4 py-2 rounded-lg hover:bg-blue-400 active:bg-blue-600' onClick={handleClick}>start</button>
    {/* <ArrList></ArrList> */}
    </div>
  )
}

export default App

