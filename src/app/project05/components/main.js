"use client"
import React, { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CameraControls from "../../../Utils/Camera";
import Layout3D from "./Layout3D";

import style from '../../../styles/pages/project05/main/style.module.css'

export default function Main(){
    const [position, setPosition] = useState({ x: -180, y: 105, z: -190 });
    const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });
    
    return(
        <div className={style.container}> 
            <Suspense fallback={null}>
                <Canvas
                className="canvas"
                camera={{
                    position: [0, 10, -120],
                    fov: 22,
                    aspect: 1.77,
                    filmOffset: 1.8,
                }}
                shadows
                >
                <directionalLight intensity={1.5} position={[5, 5, -10]} />
                <directionalLight intensity={1.8} position={[-5, 5, -10]} />
                <directionalLight intensity={1.5} position={[0, 5, 10]} />
                <directionalLight intensity={0.5} position={[-10, 0, 10]} />
                <OrbitControls />
                <Layout3D />
                <CameraControls position={position} target={target} />
                </Canvas>
            </Suspense>
        </div>        
    )
}