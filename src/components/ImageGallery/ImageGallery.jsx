import ImageCard from "../ImageCard/ImageCard";


export default function ImageGallery() {
  return (
      <div>
  {images.map((el) => (
    <li key={el.id}>
      <a href={el.urls.full} target="_blank" rel="noopener noreferrer">
        <img src={el.urls.thumb} alt={el.alt_description} />
      </a>
    </li>
  ))}
</div>
    );
  }

// export default function ImageGallery({images}) {
//     return (
//         <ul className=''>
//         {images.map((image) => {
//           return (
//             <li key={image.id}>
//               <ImageCard image={image}  />
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }