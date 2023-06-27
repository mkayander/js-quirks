import { CircleModel } from "@/components/3d-models/Circle";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";
import { HashCircleProps } from "./hashingTypes";

const Box = (props: any) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>();
  // Hold state for hovered and clicked events
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={isClicked ? 1.5 : 1}
      onClick={() => setIsClicked(!isClicked)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export const HashCircle3D: React.FC<HashCircleProps> = ({ items }) => {
  return (
    <div className="h-[60vh] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        {/*<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />*/}
        {/*<pointLight position={[-10, -10, -10]} />*/}
        <CircleModel />
        <OrbitControls
          minAzimuthAngle={Math.PI / -2.2}
          maxAzimuthAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 10}
          maxPolarAngle={Math.PI / 1.1}
          minDistance={6}
          maxDistance={10}
        />
      </Canvas>
    </div>
  );
};
