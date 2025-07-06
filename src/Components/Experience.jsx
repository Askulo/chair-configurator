import React from 'react'
import { MeshReflectorMaterial, PresentationControls, Stage } from '@react-three/drei'

import { Suspense } from 'react'
import  Chair  from './Chair'

const Experience = () => {
   

  return (
    <PresentationControls
      global
       speed={1.5}
        zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}>
     {/* <Stage> */}

    
    <mesh  position={[0, -1, 0]}rotation={[-Math.PI /2, 0, 0]}>
        <planeGeometry args={[170, 170]}/>
        <MeshReflectorMaterial
           blur={[300, 100]}
           resolution={2048}
           mixBlur={1}
           mixStrength={10}
           roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
        />

    </mesh>

    <Suspense  fallback={null}>
     <Chair position={[-1, -1, 0]} />
    </Suspense>
     {/* </Stage> */}
      </PresentationControls>
  )
}

export default Experience
