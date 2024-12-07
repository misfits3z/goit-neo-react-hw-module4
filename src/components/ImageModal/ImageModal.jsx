import Modal from 'react-modal';

export default function ImageModal({ image, closeModal }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <h2>Image Details</h2>
        
        <div>
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
      </Modal>
    </div>
  );
}



