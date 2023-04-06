import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

import logo from './assets/background.svg'

export function App() {
  const myStyle = {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    width: '100vw',
    height: '100vh',
  };
  return (
    <div className=' flex flex-col justify-center w-screen h-screen' style={{ ...myStyle }}>
      
      <Header />
      <Form />

    </div>
  )
}

