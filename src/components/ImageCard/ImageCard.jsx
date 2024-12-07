import css from './ImageCard.module.css'

export default function ImageCard ({image, openModal}){
  const handleClick = () => {
    openModal(image);
  }

    return(
        <div className={css.item}>
          
            <img 
            className={css.galleryImage} 
            src={image.urls.thumb} 
            alt={image.alt_description} 
            onClick={handleClick}
            />
          
        </div>

    )
}

