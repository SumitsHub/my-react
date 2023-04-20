import React from 'react'
import { useState } from 'react'
import { calculateDistance, versionTwo } from '../../utils/distance'

function DistanceCalculator() {
    const [coord1, setCoord1] = useState({lat: 47.2293832, lng: 8.6695983});
    const [coord2, setCoord2] = useState({lat: 47.4597584, lng: 8.7044876});
    const [distance, setDistance] = useState(0);
  return (
    <div>
        <h2>Distance Calculator</h2>
        <hr/>
        <label htmlFor="ltd1">Lattitue 1</label>
        <input id="ltd1" type="number" value={coord1.lat} onChange={(e)=> setCoord1((prev)=> {return {...prev, lat: e.target.value}})} aria-label='latitude 1' />
        <label htmlFor="lng1">Longitude 1</label>
        <input id="lng1" type="number" value={coord1.lng} onChange={(e)=> setCoord1((prev)=> {return {...prev, lng: e.target.value}})} aria-label='longitude 1'/>
        <br/>
        <label htmlFor="ltd2">Lattitue 2</label>
        <input id='ltd2' type="number" value={coord2.lat} onChange={(e)=> setCoord2((prev)=> {return {...prev, lat: e.target.value}})} aria-label='latitude 1' />
        <label htmlFor="lng2">Longitude 2   </label>
        <input id='lng2' type="number" value={coord2.lng} onChange={(e)=> setCoord2((prev)=> {return {...prev, lng: e.target.value}})} aria-label='longitude 1' />
        <br/>
        <button onClick={()=>{setDistance(versionTwo(coord1, coord2))}}>Calculate</button>
        <br/>
        <span>Distance - {distance}</span>
    </div>

  )
}

export default DistanceCalculator