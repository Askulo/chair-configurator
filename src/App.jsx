import { Canvas } from '@react-three/fiber'
import './App.css'
import Lights from './Components/Lights'
import Suzanne from './Components/Suzanne'
import { OrbitControls } from '@react-three/drei'
import Experience from './Components/Experience'
import { Environment } from '@react-three/drei'
import Configurator from './Components/Configurator'
import { CustomizationProvider } from './contexts/Customization'




function App() {

 
  
  return (
    <CustomizationProvider>
    <>
    <Canvas camera={{ position: [0, 5, 5] }}  >
      <color attach="background" args={['#101010']} />
      <Experience/>
      {/* <Lights />
      <Suzanne />
      <gridHelper /> */}
      <Environment preset='city'/>
      <fog  attach='fog' args={["#101010", 10, 10]}/>
      <OrbitControls />
    </Canvas>
    <Configurator/>
  </>
      </CustomizationProvider>
  )
}

export default App
