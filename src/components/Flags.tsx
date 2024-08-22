import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three'; 
function Flag() {
  const { scene, animations } = useGLTF('/3FlagsF.glb'); // Adjust path as needed
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      // Loop over each action in the actions object and play it
      Object.keys(actions).forEach((key) => {
        const action = actions[key];
        if (action) {
          action.play();
        }
      });
    }
  }, [actions]);

  return(
    <primitive 
    object={scene}
    scale={[0.3,0.3,0.3]}
    position={[-0.8,0,2]}
    />);
}

export default function App() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight />
      <directionalLight position={[300, 100, 500]} />
      <Flag />
    </Canvas>
  );
}