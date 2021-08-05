import BackgroundHeader from '../../images/pattern-bg.png' 
import styled from 'styled-components'

function Header({title, setIp, ip, children}){
  const handleChange = e => {
    setIp(e.target.value)
  }
  return(
    <Container background = {BackgroundHeader}>
      <h1> {title} </h1>
      <form >
        <input type="text" value={ip} onChange={handleChange} />
        {children}


      </form>
    </Container>
    )
}
const Container = styled.header`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:250px;
  background-image:url(${({background}) =>  background});
  h1{
    font-size:1em;
    margin: 1em 0;
    color:white;
  }
  input{
    height:100%;
    width:100%;
    padding:1em;
    background:transparent;
    border:none;
    outline:none;
  }
  input:focus{

  }

  form{
    display:flex;
    position:relative;
    overflow:hidden;
    border-radius:5px;
    background:white;
  }
  button{
    border:none;
    display:flex;
    align-items:center;
    padding:1em;
    background-color:black;
  }

`

export default Header
