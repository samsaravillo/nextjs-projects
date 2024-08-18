import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';
import { MdClose } from 'react-icons/md';

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }

  return (
    <>
      <div className={classes.backdrop}>
        <dialog open className={classes.modal}>
          <MdClose className={classes.closeIcon} onClick={closeHandler} />
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
