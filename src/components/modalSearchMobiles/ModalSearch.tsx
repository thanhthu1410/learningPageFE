import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./modalSearch.scss"

function ModalSearch() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='modal-search-container'>
      <p onClick={handleShow}>
        Search
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='header-search-modal'>
            <input type='text' placeholder='enter key'/>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <p> Bạn đang tìm kiếm khoá học nào ^^ !</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalSearch;