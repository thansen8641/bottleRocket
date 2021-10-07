import React, { useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';




const GoogleMap = (props) => {
  const { restaurantSelected } = props
  const [lat, setLat] = useState(restaurantSelected.location.lat)
  const [long, setLong] = useState(restaurantSelected.location.lng)
  console.log('lat', lat, 'long', long)


  useEffect(() => {
    setLat(restaurantSelected.location.lat)
    setLong(restaurantSelected.location.lng)
  }, [restaurantSelected])


  return (
    <div style={{ height: "400px", zIndex: 3 }}>
      {}
      <Map
        google={props.google}
        zoom={20}
        initialCenter={{ lat: lat, lng: long }}
        style={{ height: "39%" }}
      >

        <Marker position={{ lat: lat, lng: long }} />

        {/* <Marker onClick={this.onMarkerClick}
        name={'Current location'} />

      <InfoWindow onClose={this.onInfoWindowClose}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow> */}
      </Map>
    </div>
  )
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFXuyAJXgU2_7ydtTmjKpSlK8R34mt0m0'
})(GoogleMap)