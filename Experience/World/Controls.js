import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

//when i want the rotation around the mesh
export default class Controls{
    constructor(){
        this.experience= new Experience();
        this.scene= this.experience.scene;
        this.sizes= this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera= this.experience.camera;
        this.room= this.experience.world.room.actualRoom;
        GSAP.registerPlugin(ScrollTrigger)
 

         
        // this.progress= 0;
        // this.dummyCurve= new THREE.Vector3(0,0,0);
     

        // this.lerp={
        //     current:0,
        //     target:0,
        //     ease:0.1,
        // };
        // this.position= new THREE.Vector3(0,0,0);
        // this.lookAtPosition= new THREE.Vector3(0,0,0);
        
        // this.directionalVector= new THREE.Vector3(0,0,0);
        // this.staticVector= new THREE.Vector3(0,-1,0);
        // this.crossVector= new THREE.Vector3(0,0,0);

        this.setPath();
        // this.onWheel();
    };

    setPath(){
        console.log(this.room)
        this.timeline = new GSAP.timeline();
        this.timeline.to(this.room.position,{
            //to uppdate something on resize that is dependent on resize  use the funcitonal valu ()=>
            x:() =>{
                return this.sizes.width *0.0026;
            },
            scrollTrigger:{
                trigger: ".first-move",
                markers:true,
                start:"top top",
                end: "bottom bottom",
                scrub: 0.7,
                invalidateOnRefresh: true,
            },
        });

    }

    // setPath(){
    //     this.curve = new THREE.CatmullRomCurve3( [
    //         new THREE.Vector3( 0, 0, 0 ),
    //         new THREE.Vector3( 0, 0, -5 ),
    //         new THREE.Vector3( 5, 0, 0 ),
    //         new THREE.Vector3( 0, 0, 5 ),
    //     ],true );


    //     const points = this.curve.getPointAt(1, this.dummyCurve );
    //     const geometry = new THREE.BufferGeometry().setFromPoints( points );

    //     const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

    //     // Create the final object to add to the scene
    //     const curveObject = new THREE.Line( geometry, material );
    //     this.scene.add(curveObject);
    // }
    setAnimation(){
       
    }

    // onWheel(){
    //     window.addEventListener("wheel",(e)=>{
    //         if(e.deltaY>0){
    //             this.lerp.target +=0.01;
    //             this.back=false;
    //         }
    //         else{
    //             this.lerp.target -=0.01;
    //             this.back=true;
    //             if(this.progress <0){
    //                 this.progress = 1;
        
    //             }
    //         }
    //     });
    // }

    update(){
        // this.lerp.current=GSAP.utils.interpolate(
        //     this.lerp.current,
        //     this.lerp.target,
        //     this.lerp.ease
        // );

        // this.curve.getPointAt(this.lerp.current %1, this.position);
        // this.camera.orthographicCamera.position.copy(this.position);

        // this.directionalVector.subVectors(
        //     this.curve.getPointAt((this.lerp.current%1)+0.00001),
        // this.position);
        // this.directionalVector.normalize();
        // this.crossVector.crossVectors(
        //     this.directionalVector,this.staticVector);
        
        // this.crossVector.multiplyScalar(100000);
        // this.camera.orthographicCamera.lookAt(0,0,0);
        
        // // if(this.back){
        // //     this.lerp.target -=0.001;
        // // }else{
        // //     this.lerp.target +=0.001;
        // // }
        
   
    }

}

    