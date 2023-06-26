import React from 'react';

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = React.createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => {}, // Provide a default empty function for setIsOpen
});

export default ModalContext;
