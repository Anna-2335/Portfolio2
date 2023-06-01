import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap"

export default class Floor{
    constructor(){
        this.experience= new Experience();
        this.scene= this.experience.scene;
        this.setFloor();
        this.setWall();


    }
    setFloor(){
        this.geometry = new THREE.PlaneGeometry(100,100);
        this.material = new THREE.MeshStandardMaterial({
            color: 0x253A51,
            side: THREE.BackSide,
            
        });
        this.plane=new THREE.Mesh(this.geometry,this.material);
        this.scene.add(this.plane);
        this.plane.rotation.x= Math.PI/2;
        this.plane.position.y=-1.5;
        this.plane.receiveShadow= true;
        
    }

    setWall(){
        this.geometry = new THREE.PlaneGeometry(200,100);
        this.material = new THREE.MeshStandardMaterial({
            color: 0x253A51,
            side: THREE.DoubleSide,
        });
        this.plane=new THREE.Mesh(this.geometry,this.material);
        this.scene.add(this.plane);
        this.plane.rotation.x = 90; 
        this.plane.rotation.z = 90; 
        this.plane.position.x = -5;
        this.plane.position.y = -6;
        this.plane.position.z = 2; 
      
        this.plane.receiveShadow = true;
        
    }
    resize(){ }

    update(){
}

}