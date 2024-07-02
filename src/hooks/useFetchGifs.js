import { useState, useEffect } from "react";
import  {getGifs}  from "../helpers/getGifs";

useState

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //Funcion que ejecuta una funcion que trae las imagenes de un api, y luego las setea en el array images.
    const getImages = async () =>{
        const newImages = await getGifs(category);
         setImages(newImages)
         setIsLoading(false)
    }

  useEffect(()=>{       
    getImages();
  },[])
  
    return {
    
    images,
    isLoading

    }
}
