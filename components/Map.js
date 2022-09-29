import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';
import { MapPinIcon } from '@heroicons/react/24/outline';
import "mapbox-gl/dist/mapbox-gl.css";



function Map({searchResults}) {

  const [selectedLocation, setSelectedLocation] = useState({});

  const [showPopup, setPopup] = React.useState(true);

const coordinates = searchResults.map((result) => ({
  longitude: result.long,
  latitude: result.lat,
}));
 
const center = getCenter(coordinates);

const [viewState, setViewState] = React.useState({
  width:"100%",
  height:"100%",
  longitude: center.longitude,
  latitude: center.latitude,
  zoom: 8,
});



  return (
   <ReactMapGL
   mapStyle='mapbox://styles/flyingkitties/cl8ka0kkf003914pfbr6c3bws'
   mapboxAccessToken={process.env.mapbox_key}
  {...viewState}
  onMove= {evt => setViewState(evt.viewState)}
  >
{searchResults.map((result) => (
  <div key={result.long} >
    <Marker
    longitude = {result.long}
    latitude= {result.lat}
    offsetLeft={-20}
    offsetTop={-10}
      >
      <p
      role="img"
      onClick={showPopup && (() => setSelectedLocation(result)) }
      className='cursor-pointer text-2xl animate-bounce'
      aria-label="push-pin"
      >📌</p>
    </Marker>

    {selectedLocation.long === result.long ? (
      <Popup 
      onClose={() => setSelectedLocation({})}
      closeOnClick={false}
      latitude={result.lat}
      longitude={result.long}
      className='card rounded-xl bg-red-400 shaddow-lg shaddow-red-400 '
      > 
      <div className=''>
      <label className=" text ">{result.title}</label>
      </div>
      {console.log(result.title)}
      </Popup>
    ):(false)}
  </div>
))}

 </ReactMapGL>
  

  );
}

export default Map
