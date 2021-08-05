import React, { useState, useEffect } from 'react'
import Arrow from './images/icon-arrow.svg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'
import  Header from './components/header/Header'
import InfoBox from './components/info/InfoBox'


function App() {
  const [coord, setCoord] = useState([51.505,-1.09])
  const [map, setMap] = useState(null)
  const [ip, setIp] = useState("8.8.8.8")
  const [info, setInfo] = useState("")
  const handleClick =  e => {
    e.preventDefault()
    const fetchAPI = async () => {

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(`https://cors.bridged.cc/https://geo.ipify.org/api/v1?apiKey=at_8fy3MNAnz26K5KgtQpXdNAqNwQCSW&ipAddress=${ip}`, requestOptions)
        .then(response => response.json())
        .then(result =>result.location && setInfo(result))
    }
    fetchAPI()
  }


  useEffect(() => {
    if (map&&info.location) {
      map.flyTo([info.location.lat, info.location.lng], 14)
      setCoord([info.location.lat, info.location.lng])
    }
  }, [info]);


  return (
    <Container className="App">
      <Header title='Ip Adress Tracker' setIp={setIp} ip={ip}>
        <button type='submit' onClick={handleClick}> <img src={Arrow} alt="tracker" /></button>
      </Header>

      <div className='infoBox'>
        { info && <InfoBox
          ip={info.ip}
          location={info.location.city}
          timezone={info.location.timezone}
          isp={info.isp}
        />}
      </div>
      <Map center={coord} zoom={10} scrollWheelZoom={false} whenCreated={setMap} >

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coord}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </Container>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
  overflow:hidden;

  .infoBox{
    position:relative;
    display:flex;
    justify-content:center;
    width:100%;
    z-index:999;
  }
`
const Map = styled(MapContainer)`
  flex:1;
`
export default App;
