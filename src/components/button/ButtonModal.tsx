import { useState } from 'react';
import ModalAbout from '@components/modals/Modal';

const ButtonModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        id="buttonModal"
        className="button-read text-sm px-6 py-2 font-bold text-white rounded-full bg-gradient-to-tr from-violet-300 to-pink-400 hover:opacity-75 transition-all duration-300"
      >
        <span className="flex items-center gap-1">Read More</span>
      </button>

      <ModalAbout isOpen={openModal} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default ButtonModal;
