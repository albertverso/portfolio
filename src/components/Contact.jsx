import { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { PiInstagramLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import { sendEmail } from "../service/emailService";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function Contact({sectionRef}) {
    const [assunto, setAssunto] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const msg = {
        to: 'alsguert@gmail.com',
        subject: `ASSUNTO: ${assunto} | NOME: ${nome}`,
        message: `MENSAGEM: ${mensagem} | EMAIL: ${email}`,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await sendEmail(msg);
            setSuccess(true);
            setAssunto('');
            setEmail('');
            setMensagem('');
            setNome('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            setError(`Ocorreu um erro ao enviar o e-mail: ${err.message}`);
            console.error('Erro:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {success && (
                <div className="fixed top-0 left-0 w-full h-full flex items-start justify-end pt-10 pr-10 bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-md shadow-lg text-center">
                        <p className="text-black font-semibold">{t("messageSent")}</p>
                    </div>
                </div>
            )}
            <form onSubmit={handleSubmit} ref={sectionRef} className="flex flex-col justify-center items-start text-black gap-1 lg:gap-5 font-semibold w-full">
                <h1 className="text-3xl underline underline-offset-4 text-white hover:text-red-500 hover:cursor-pointer">{t("contact")}</h1>
                <div className="flex lg:flex-row flex-col w-full grid-flow-col gap-5 lg:gap-10 px-5">
                        <div className="flex flex-col gap-5 w-full mt-4 lg:mt-0">
                            <div className="flex flex-col gap-1">
                                <label className="text-white">{t("name_contact")}:</label>
                                <input 
                                    type="text" 
                                    className="outline-none font-normal bg-white p-1 focus:ring-2 focus:ring-red-500 rounded-md" 
                                    name="nome"
                                    value={nome}
                                    onChange={ (e) => setNome(e.target.value) }
                                    required
                                    placeholder={t("name_contact")}
                                    />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-white">{t("email_contact")}:</label>
                                <input 
                                    type="email" 
                                    className="outline-none font-normal p-1 bg-white focus:ring-2 focus:ring-red-500 rounded-md" 
                                    name="email"
                                    value={email}
                                    onChange={ (e) => setEmail(e.target.value) }   
                                    required 
                                    placeholder={t("email_contact")}
                                    />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-white">{t("subject_contact")}:</label>
                                <input 
                                    type="text" 
                                    className="outline-none font-normal p-1 bg-white focus:ring-2 focus:ring-red-500 rounded-md" 
                                    name="assunto"
                                    value={assunto}
                                    onChange={ (e) => setAssunto(e.target.value) }
                                    required
                                    placeholder={t("subject_contact")}
                                    />
                            </div>
                        </div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col gap-1">
                            <label className="text-white">{t("message_contact")}:</label>
                            <textarea 
                                className="outline-none font-normal resize-none p-1 bg-white focus:ring-2 h-48 focus:ring-red-500 rounded-md" 
                                name="mensagem"
                                value={mensagem}
                                onChange={ (e) => setMensagem(e.target.value) }
                                required
                                placeholder={t("message_contact")}
                                />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center justify-center text-white ">
                    <button 
                        disabled={loading}
                        className={`flex flex-row my-4 items-center justify-center gap-2 border border-white rounded-md p-2 hover:border-red-500 hover:text-red-500 lg:w-2/12 w-2/6 ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}
                        type="submit"
                    >
                    {loading ?  
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <span>{t("sending")}</span>
                            <AiOutlineLoading3Quarters size={24} className="animate-spin w-full" /> 
                        </div> 
                        : <p className="text-center w-full">{t("send_contact")}</p>}
                        
                    </button>
                    <span>{error && <p className="text-red-500">{error}</p>}</span>
                </div>
                <div className="flex gap-5 lg:gap-10 flex-row mt-5 lg:mt-0 items-center justify-center w-full text-white">
                    <a href="http://www.github.com/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                        
                    <BsGithub className="text-white hover:text-red-500 group-hover:text-red-500 text-5xl"/>
                        <p className="group-hover:text-red-500 ">Github</p>
                    </a>
                    <a href="http://www.linkedin.com/in/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                        <PiLinkedinLogoBold className="text-white text-5xl hover:text-red-500 group-hover:text-red-500 "/>
                        <p className="group-hover:text-red-500 ">Linkedin</p>
                    </a>
                    {/* <a href="http://www.instagram.com/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                        <PiInstagramLogoBold className="text-white text-5xl hover:text-red-500 group-hover:text-red-500 "/>
                        <p className="group-hover:text-red-500 ">Instagram</p>
                    </a> */}
                    <a href="mailto:alsguert@gmail.com" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center">
                        <MdOutlineEmail className="text-white text-5xl hover:text-red-500 group-hover:text-red-500 "/>
                        <p className="group-hover:text-red-500 ">Email</p>
                    </a>
                </div>
            </form>
        </>
    )
}