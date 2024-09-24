import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';



function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    console.log("clicked");
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

 return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <span>A span</span>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      { modalIsOpen && <Modal />}
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
