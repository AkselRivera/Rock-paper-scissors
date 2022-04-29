
import {  Modal } from 'react-bootstrap';
import rules from '../../images/image-rules.svg';

import styles from './modal.module.css';

function ModalComponent(props) {

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton >
          <Modal.Title fill id="contained-modal-title-vcenter" >
          
            <span className={styles.modtitle}>
                Rules
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className={styles.modbody}>
                <img src={rules} alt=''/>
            </div>
        </Modal.Body>
        
      </Modal>
    );
  }

  
export default ModalComponent;