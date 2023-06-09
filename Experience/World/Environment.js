import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap"
import GUI from 'lil-gui'; 

export default class Environment{
    constructor(){
        this.experience= new Experience();
        this.scene= this.experience.scene;
        this.resources = this.experience.resources;

        // this.gui = new GUI({ container: document.querySelector( '.hero-main' ) });
        this.obj= {
            colorObj:{r: 0,g:0,b:0,},
            intensity:3,

        };
        this.setSunlight();
        // this.setGUI();
    }

    setGUI(){
        this.gui.addColor(this.obj, "colorObj").onChange(()=>{
            this.sunLight.color.copy(this.obj.colorObj)
            this.ambientLight.color.copy(this.obj.colorObj)
            console.log(this.obj.colorObj);
        });
        this.gui.add(this.obj, "intensity",0,10).onChange(()=>{
            this.sunLight.intensity= this.obj.intensity;
            this.sunLight.ambientLight= this.obj.intensity;
        });
    }

    setSunlight(){
        this.sunLight = new THREE.DirectionalLight('#E19C9C',3);
        this.sunLight.castShadow= true;
        this.sunLight.shadow.camera.far= 10;
        this.sunLight.shadow.camera.near = 0.5;
        this.sunLight.shadow.mapSize.set(4096, 4096);
        this.sunLight.shadow.normalBias=0.01;
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);
        this.sunLight.position.set(-1.5,7,3);
        this.scene.add(this.sunLight);

        this.ambientLight= new THREE.AmbientLight("#ffffff",1)
      
        this.scene.add( this.ambientLight);
     

    }
    
    switchTheme(theme){
        if(theme==="dark"){
            GSAP.to(this.sunLight.color,{
                r: 0.18823529411764706,
                g: 0.1607843137254902,
                b: 0.396078431372549,

            });
            GSAP.to(this.ambientLight.color,{
                r: 0.18823529411764706,
                g: 0.1607843137254902,
                b: 0.396078431372549,
            });
            GSAP.to(this.sunLight, {
                intensity:0.78,
            });
            GSAP.to(this.ambientLight, {
                intensity:0.78,
            });
        }else{
            GSAP.to(this.sunLight.color,{
                r:255/255,
                g:156/255,
                b:156/255,
            });
            GSAP.to(this.ambientLight.color,{
                r:255/255,
                g:255/255,
                b:255/255,
            });
            GSAP.to(this.sunLight, {
                intensity:3,
            });
            GSAP.to(this.a1ntLight, {
                intensity:3,
            });
        }
    }
    
    resize(){ }

    update(){}

}
    