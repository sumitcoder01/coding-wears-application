"use client";
import { IoMdClose } from "react-icons/io";

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '91%',
  width: '90%',
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
};

export default function Modal({ isOpen, closeModal, children }) {
  return (
    <div
      style={OVERLAY_STYLES}
      className={`fixed inset-0 overflow-y-auto ${isOpen ? 'opacity-100' : 'opacity-0 invisible'}`}
    >
      <div className='bg-white rounded-md mx-auto p-3 shadow-lg' style={MODAL_STYLES}>
        <button
          className='absolute top-4 right-4 text-gray-600 hover:text-gray-800'
          onClick={closeModal}
        >
          <IoMdClose size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}
