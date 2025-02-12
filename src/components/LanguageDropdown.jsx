import React, { useEffect, useRef, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import br from '../assets/brasil.png';
import eua from '../assets/eua.png';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'PT');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    localStorage.setItem('selectedLanguage', language); 
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-9 right-5 md:right-20 lg:right-6" ref={dropdownRef}>
      <button
        className={`bg-black group text-white border hover:border-red-500 flex flex-row items-center justify-center gap-2 rounded-lg p-2 w-full ${isOpen ? 'border-red-500' : 'border-white'}`}
        onClick={toggleDropdown}
      >
        <img src={selectedLanguage === 'PT' ? br : eua} alt="" width={20} />
        {isOpen ? <BsChevronUp className={`${isOpen && 'text-red-500'}`}  /> : <BsChevronDown className='group-hover:text-red-500'/>}
      </button>
      
      {isOpen && (
        <ul className="absolute w-full bg-black border border-white rounded-lg mt-1 z-10 overflow-hidden">
          <li
            className="flex flex-row items-center justify-center gap-2 text-white p-2 hover:bg-red-500 cursor-pointer"
            onClick={() => handleSelect('PT')}
          >
            PT
            <img src={br} alt="" width={20} />
          </li>
          <li
            className="flex flex-row items-center justify-center gap-2 text-white p-2 hover:bg-red-500 cursor-pointer"
            onClick={() => handleSelect('IN')}
          >
            IN
            <img src={eua} alt="" width={20} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
