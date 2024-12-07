import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ image, closeModal }) {
  const customStyles = {
    content: {
      backgroundColor: '#222', // Темний фон модального вікна
      color: '#fff',           // Світлий текст
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',    // Закруглені кути
      padding: '20px',         // Відступи
      width: '80%',
      maxWidth: '600px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Напівпрозорий чорний фон поза модалкою
    },
  };

  if (!image) return null;

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <button onClick={closeModal} className={css.closeButton}>
        &times;
      </button>
      <div className={css.modalContent}>
        <img
          className={css.modalImage}
          src={image.urls.regular}
          alt={image.alt_description}
        />
        <div className={css.imageInfo}>
          <p className={css.description}><strong>Description:</strong> {image.alt_description || 'No description available'}</p>
          <p className={css.likes}><strong>Likes:</strong> {image.likes}</p>
        </div>
      </div>
    </Modal>
  );
}


