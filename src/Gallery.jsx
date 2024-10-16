import './Gallery.css';
import images from '../backend/mock/gameData.json'

const Gallery = () => {
    return (
        <div className="gallery">
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <img src={image.image} alt={image.description} className="image"/>
            <a href={image.image} className="link">
              <div className="overlay">
                  <div>{image.description}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    )
}

export default Gallery;