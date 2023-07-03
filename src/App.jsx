import './App.css'
import googleButton from './assets/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png'


const navigate = url => window.location.href = url

const auth = async () =>{

  const response = await fetch('http://127.0.0.1:3000/request', {method: "post"})
    
  const data = await response.json()
  navigate(data.url)

}


function App() {
  return (
    <>

    </>
  )
}

export default App
