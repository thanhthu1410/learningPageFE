import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./modalvideo.scss"
function ModalVideo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='active_video_icon' onClick={handleShow}>
        <i className="fa-solid fa-caret-right"></i>
      </button>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About my course </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <iframe width="100%" height="380px" src="https://www.youtube.com/embed/I4R78pAANHE?si=3D4xLPvpoRIOxY3F" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalVideo;