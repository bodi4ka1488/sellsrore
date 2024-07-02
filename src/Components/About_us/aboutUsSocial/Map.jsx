import React, {useMemo} from 'react'
import {GoogleMap, MarkerF, useLoadScript} from '@react-google-maps/api';
import classes from "./Map.module.css";



export default function Map() {
    const {isLoaded} =
        useLoadScript({googleMapsApiKey: "AIzaSyAuPEVVFiRqFtEN8Zle5pOG33RahL0Ijr0"});
    if (!isLoaded) return <div>loading...</div>
return <Map1 />
}
function Map1(){

    const center = useMemo(() =>({lat:50.4501, lng:30.5234}), [])
    return <GoogleMap
    zoom={15}
    center={center}
    mapContainerClassName={classes.mapContainer}>
        <MarkerF position={center}/>
    </GoogleMap>
}
