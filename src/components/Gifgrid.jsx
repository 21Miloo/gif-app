import GifItem from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"


const Gifgrid = ({category}) => {
  
    //Custom Hook
    const {images, isLoading} = useFetchGifs(category)

  return (  
    <>
      <h2>{category}</h2>

        {
            isLoading && (<h2>Loading...</h2>)
        }

      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))    
        }
      </div>
    </>
  );
}

export default Gifgrid