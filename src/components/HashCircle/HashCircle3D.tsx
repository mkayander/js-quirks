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
      onClick={(event) => setIsClicked(!isClicked)}
      onPointerOver={(event) => setIsHovered(true)}
      onPointerOut={(event) => setIsHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export const HashCircle3D: React.FC<HashCircleProps> = ({
  size = 428,
  items,
}) => {
  return (
    <div className="h-[60vh] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        {items?.map(({ id, rotation }) => (
          <Box key={id} position={[1.2, rotation / 50 - 4, 0]} />
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  );
};
