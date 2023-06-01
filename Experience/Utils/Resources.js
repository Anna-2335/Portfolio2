import * as THREE from "three";

import {EventEmitter} from "events";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader.js";
import Experience from "../Experience.js";


export default class Resources extends EventEmitter{
    constructor(assets){
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;
      
        this.assets= assets;

        this.items ={};
        this.queue= this.assets.length;
        this.loaded = 0;
    
        this.setLoaders();
        this.startLoading();
    }   

    setLoaders(){
        this.loaders= {}
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    }

    startLoading(){
        for(const asset of this.assets){
            if(asset.type === "glbModel"){
                this.loaders.gltfLoader.load(asset.path, (file)=>{
                    this.singleAssetLoaded(asset,file);
                });
            }
                // else if (asset.type ==="pngTexture"){ 
                //     this.loaders.textureLoader.load(asset.path, (texture) => {
                //         this.singleAssetLoaded(asset, texture);
                //     });
                // }
              }
            }
          
            //     this.video={}; 
            //     this.videoTexture={};

            //     this.video[asset.name]=document.createElement('video');
            //     this.video[asset.name].src = asset.path;
            //     this.video[asset.name].muted = true;
            //     this.video[asset.name].playsInline = true;
            //     this.video[asset.name].autoplay=true;
            //     this.video[asset.name].loop= true;
            //     this.video[asset.name].play();

            //     this.videoTexture[asset.name] = new THREE.videoTexture(this.video[assets.name]);
            //     this.videoTexture[asset.name].fipY=true;
            //     this.videoTexture[asset.name].minFilter=THREE.NearestFilter;
            //     this.videoTexture[asset.name].magFilter=THREE.NearestFilter;
            //     this.videoTexture[asset.name].GenerateMipmaps=false;
            //     this.videoTexture[asset.name].encoding= THREE.sRGBEncoding;

            //     this.singleAssetLoaded(asset,this.videoTexture[asset.name]);
            // }

        singleAssetLoaded(asset,file){
            console.log("asset loaded", asset.name);
            this.items[asset.name]=file;
            this.loaded++;
            console.log(file);
       
            console.log("asset is loading");

            if(this.loaded === this.queue){
                console.log("all assets are done");
                this.emit("ready");
                
            }
   
        }

}
