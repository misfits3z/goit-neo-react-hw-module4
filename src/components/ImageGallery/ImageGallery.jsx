import ImageCard from "../ImageCard/ImageCard";


export default function ImageGallery({images,openModal }) {
  return (
    <ul>
      {images.map((el) => (
        <ImageCard key={el.id} image={el} onClick={() => openModal(el)} />
      ))}
    </ul>
    );
  }

