import {  useEffect, useState } from 'react'

import './App.css'

import getImages from './services/api'
import ImageGallery from './components/ImageGallery/ImageGallery'
import SearcBar from './components/SearchBar/SearchBar'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageModal from './components/ImageModal/ImageModal'


export default function App (){
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [totalImages, setTotalImages] = useState(0)
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);



  const search = async (query) =>{
    setQuery(query)
    setPage(1)
    setImages([])
    setError(false)
   
  }

const getNextPage = async () => {
  setPage((prevPage) => prevPage + 1);

  };

const openModal = (image) => {
    setSelectedImage(image)
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(false)
  };

useEffect(() => {
  const fetchImages = async () => {
    
    try {
      setIsLoading(true);
      setError(false)
      const { data } = await getImages(query, page);
      console.log("API Response:", data);

      if (page === 1) {

        setImages(data.results);
        setTotalImages(data.total);
        
      } else {

        setImages((prevImages) => [...prevImages, ...data.results]);
      }
    } catch (error) {
      setError(true);
      console.error("Error fetching images:", error); 
    } finally {
      setIsLoading(false);
    }
  };

  if (query) {
    fetchImages(); 
  }
}, [query, page]);


  return(
    <>
    <SearcBar search={search}/>
   
    {images.length > 0 ? <ImageGallery images={images} openModal={openModal} /> : !loading && query && <p>No results..</p>}
    {loading && <Loader/>}
    {error && (
        <ErrorMessage/>
      )}
    {images.length > 0 && images.length < totalImages && <LoadMoreBtn getNextPage={getNextPage}/>}
    {modalIsOpen && selectedImage && (<ImageModal
        image={selectedImage}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />)}
    </>
  );
}



