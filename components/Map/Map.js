import { MapContainer, TileLayer, useMap, Popup,  Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from '../../styles.module.css'

export default function Map (){
  const position = [51.505, -0.09]
  return  (  
  <div style={{width :'100%', textAlign:'-webkit-center'}}>
    <MapContainer className={styles.leaflet} center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
  )

}