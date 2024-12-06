import ImageCard from "../ImageCard/ImageCard";


export default function ImageGallery({images}) {
  return (
    <ul>
      {images.map((el) => (
        <ImageCard key={el.id} image={el}/>
      ))}
    </ul>
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