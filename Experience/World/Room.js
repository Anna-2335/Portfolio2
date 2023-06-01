import * as THREE from "three";

import Experience from "../Experience.js";
import GSAP from "gsap"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";


export default class Room{
    constructor(){
        this.experience= new Experience();
        this.scene= this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room;
        this.actualRoom= this.room.scene
        
        this.lerp={
            current:0,
            target:0,
            ease:0.1,
        };
        
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

        this.setModel();
        // this.loadAssets();
        this.setAnimation();
        this.onMouseMove();
        // this.loadModel();
        
    }

    

    setModel(){
     
// Load other texture files as needed
        this.actualRoom.children.forEach(child=>{
            child.castShadow = true;
            child.receiveShadow = true;
            if (child instanceof THREE.Group){
                child.children.forEach((groupchild)=>{
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                    console.log("casting shadow");
                })
            }
      
        });
        const width = 1;
        const height = 1;
        const intensity = 1;
        const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
        rectLight.position.set( -10.5622, 20.658 , 8.40013 );
        this.scene.add( rectLight )

        const rectLightHelper = new RectAreaLightHelper( rectLight );
        rectLight.add( rectLightHelper );


        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.11,0.11,0.11);
         this.actualRoom.position.y = -1;
    }

    setAnimation(){
        this.mixer= new THREE.AnimationMixer(this.actualRoom);
        this.swim= this.mixer.clipAction(this.room.animations[0])
        this.swim.play();

    }
    onMouseMove(){
        window.addEventListener("mousemove", (e)=>{
            this.rotation=((e.clientX-window.innerWidth/2)*2)/window.innerWidth;
            this.lerp.target = this.rotation;

            console.log(e.clientX,this.rotation);
        })
    };

    resize(){ }

    update(){

        this.lerp.current=GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );
        this.actualRoom.rotation.y = this.lerp.current;

        this.mixer.update(this.time.delta* 0.0009);
    }

}

    