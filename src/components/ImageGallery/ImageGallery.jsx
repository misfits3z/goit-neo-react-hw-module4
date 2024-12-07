import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'


export default function ImageGallery({images, openModal }) {
  return (
    <ul className={css.gallery}>
      {images.map((el) => (
        <ImageCard key={el.id} image={el} openModal={openModal} />
      ))}
    </ul>
    );
  }

