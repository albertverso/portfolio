import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import br from "../assets/brasil.png";
import eua from "../assets/eua.png";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tenta pegar o idioma do localStorage ou usa o idioma atual do i18n
  const storedLanguage = localStorage.getItem("selectedLanguage");
  const initialLanguage = storedLanguage || i18n.language || "pt";

  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  // Alterar o idioma apenas quando o usuário seleciona uma opção
  useEffect(() => {
    if (selectedLanguage !== i18n.language) {
      i18n.changeLanguage(selectedLanguage); // Altera o idioma no i18next

    }
  }, [selectedLanguage, i18n]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language) => {
    if (language !== selectedLanguage) {
      setSelectedLanguage(language); // Atualiza o estado
      localStorage.setItem("selectedLanguage", language); // Salva no localStorage
      i18n.changeLanguage(language); // Altera o idioma no i18next
      setIsOpen(false); // Fecha o dropdown após a seleção
      setTimeout(() => {
        window.location.reload(); // Recarrega a página após a troca de idioma
      }, 0); // Pequeno delay para garantir que o estado foi atualizado
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-9 right-5 md:right-20 lg:right-6" ref={dropdownRef}>
      <button
        className={`bg-black group text-white border hover:border-red-500 flex flex-row items-center justify-center gap-2 rounded-lg p-2 w-full ${isOpen ? "border-red-500" : "border-white"}`}
        onClick={toggleDropdown}
      >
        <img src={selectedLanguage === "pt" ? br : eua} alt="" width={20} />
        {isOpen ? <BsChevronUp className={`${isOpen && "text-red-500"}`} /> : <BsChevronDown className="group-hover:text-red-500" />}
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-black border border-white rounded-lg mt-1 z-10 overflow-hidden">
          <li
            className="flex flex-row items-center justify-center gap-2 text-white p-2 hover:bg-red-500 cursor-pointer"
            onClick={() => handleSelect("pt")}
          >
            PT
            <img src={br} alt="" width={20} />
          </li>
          <li
            className="flex flex-row items-center justify-center gap-2 text-white p-2 hover:bg-red-500 cursor-pointer"
            onClick={() => handleSelect("en")}
          >
            EN
            <img src={eua} alt="" width={20} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;