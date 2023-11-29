"use client"
import React, { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CameraControls from "../../../Utils/Camera";
import Layout3D from "./Layout3D";
import annotations from "../../../data/Position3D/annotations.json";
import ButtonGoToView from '../components/ButtonGoToView';
import ButtonHomeView from "../components/ButtonHomeView";

import style from '../../../styles/pages/project05/main/style.module.css'

export default function Main(){
    const [position, setPosition] = useState({ x: -180, y: 105, z: -190 });
    const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });

    function GoToView(idx) {
        setPosition(annotations[idx].position);
        setTarget(annotations[idx].target);
      }
    
    return(
        <>
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
                <ButtonGoToView gotoView={GoToView} />
                <CameraControls position={position} target={target} />
                </Canvas>
                <ButtonHomeView gotoView={GoToView} />
            </Suspense>
        </div>      
        <div className={style.portrait}> 
            <h2> Turn the Device for active the SCADA 3D</h2>
        </div>  
        </>    
    )
}