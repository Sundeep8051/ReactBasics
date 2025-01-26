import React, { useState } from "react";
import ModalComponent from "./ModalComponent.jsx";
import Button from "../Button/ButtonComponent.jsx";

const ModelPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleCloseModal}>
        I Accept
      </Button>
    </div>
  );

  return (
    <div>
      <Button onClick={handleShowModal} primary>
        Show Modal
      </Button>
      {showModal && (
        <ModalComponent onClick={handleCloseModal} actionBar={actionBar}>
          <div>
            <p>Please accept the cookies</p>
          </div>
        </ModalComponent>
      )}
    </div>
  );
};
export default ModelPage;
