import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const greatPlaceStyle = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
};

const AnyReactComponent = ({ type }) => {
  // console.log({type});
  let imgSrc  ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/800px-Map_pin_icon.svg.png";
  switch(type) {
    case 'type-01':
      imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/800px-Map_pin_icon.svg.png';
      break
    case 'type-02':
      imgSrc = 'https://cdn1.iconfinder.com/data/icons/free-98-icons/32/map-marker-512.png';
      break;
    default:
      imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/800px-Map_pin_icon.svg.png'
  }
  return <img src={imgSrc} alt ="marker" height="50" weight="50" style={greatPlaceStyle} />
}

export default function SimpleMap() {
  let defaultProps = {
    center: {
      lat: 19.9032832,
      lng: 77.5520256,
    },
    zoom: 10,
  };

  const [center, setCenter] = useState({lat: '', lng: ''})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({lat: position.coords.latitude, lng: position.coords.longitude})
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log({ map, maps });
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent lat={center.lat} lng={center.lng} type="type-01" />
        <AnyReactComponent lat={center.lat+0.10} lng={center.lng+0.10} type="type-02" />
        <AnyReactComponent lat={center.lat+0.20} lng={center.lng+0.20} type="type-03" />
        <AnyReactComponent lat={center.lat+0.30} lng={center.lng+0.30} type="type-02" />
        <AnyReactComponent lat={center.lat+0.40} lng={center.lng+0.40} type="type-01" />
      </GoogleMapReact>
    </div>
  );
}
