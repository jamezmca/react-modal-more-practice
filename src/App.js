import React, { useRef } from 'react'
import './App.css'
import { Modal } from './Modal'

function App() {

  const modalRef = useRef()

  function openModal() {
    modalRef.current.openModal()
  }

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <p>lorem ispusmsadaklsjdalksjdalksjdalkdfja sldf ja</p>
        <button onClick={() => modalRef.current.close()}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
