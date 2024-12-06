import {  useEffect, useState } from 'react'
// import SearcBar from './components/SearchBar/SearchBar'
import './App.css'

import getImages from './services/api'
import ImageGallery from './components/ImageGallery/ImageGallery'



export default function App (){
  const [images, setImages] = useState([])


  useEffect(()=>{
    const getSome = async () => {
      const data = await getImages
      setImages(data.results)
    }
    getSome()
  },[])


  return(
    <ImageGallery images={images} />
  );

}



// const App = () => {
//   const [query, setQuery] = useState("");
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [totalImages, setTotalImages] = useState(0);

//   const search = async (query) => {
//     setQuery(query);
//     setPage(1);
//     setImages([]);
//   };

//   const getNextPage = async () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   useEffect(() => {
//     const fetchImages = async () => {
//       setIsLoading(true);
//       setError(false);

//       try {
//         const { data } = await getImages(query, page); // Виклик API
//         if (page === 1) {
//           setImages(data.results);
//           setTotalImages(data.total);
//         } else {
//           setImages((oldData) => [...oldData, ...data.results]);
//         }
//       } catch (err) {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (query) fetchImages();
//   }, [page, query]);

//   return (
//     <>
//       <SearchBar search={search} />
//       <div>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error fetching images.</p>}
//         <ul>
//           {images.map((image) => (
//             <li key={image.id}>
//               <img src={image.urls.small} alt={image.alt_description} />
//             </li>
//           ))}
//         </ul>
//         {images.length < totalImages && (
//           <button onClick={getNextPage}>Load More</button>
//         )}
//       </div>
//     </>
//   );
// };

