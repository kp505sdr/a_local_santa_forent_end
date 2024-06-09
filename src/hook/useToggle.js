import { useState } from "react";

const useToggle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };
  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  return {
    isModalOpen,
    setIsModalOpen,
    openModal,
    closeModal,
    isModalOpen1,
    setIsModalOpen1,
    openModal1,
    closeModal1,
    openModal2,
    closeModal2,
    isModalOpen2,
    setIsModalOpen2,
  };
};

export default useToggle;
