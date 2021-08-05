import styled from 'styled-components'

function InfoBox({ip, location, timezone, isp}){
  return(
    <Container>
      <div>
        <h1>ip adress</h1>
        <p>{ip}</p>
      </div>
      <div>
        <h1>location</h1>
        <p>{location}</p>
      </div>
      <div>
        <h1>timezone</h1>
        <p>{timezone}</p>
      </div>
      <div>
        <h1>isp</h1>
        <p>{isp}</p>
      </div>

    </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  margin:auto;
  padding:1em;
  background:white;
  border-radius:10px;
  border:pink solid 3px;
  z-index:99999;
  transform:translateY(-50%);

  div{
  position:relative;
  padding:.33em;
    text-align:center;
  }
  h1{
    text-transform:uppercase;
    color:grey;
    font-size:.5em;
  }
  p{
    font-size:1em;
  }

  @media(min-width:500px){
    
  flex-direction:row;

  div{
    position:relative;
    padding:1em;
  }

  &>div:after{
    display:block;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    right:0;
    content:'';
    height:60%;
    width:1px;
    background-color:black;
  }

  &>div:last-child:after{
    display:none;
  }

`


InfoBox.defaultProps = {
  ip:'0.0.0',
  location:'Aulnay',
  timezone:'UTC +01:00',
  isp:"spaceX"
}
export default InfoBox
