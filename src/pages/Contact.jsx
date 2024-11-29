import { useState } from "react";
import { BsArrowClockwise, BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { PiInstagramLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import { sendEmail } from "../service/emailService";

export default function Contact() {
    const [assunto, setAssunto] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState('');

    const msg = {
        to: 'alsguert@gmail.com',
        subject: `ASSUNTO: ${assunto} | NOME: ${nome}`,
        message: `MENSAGEM: ${mensagem} | EMAIL: ${email}`,
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await sendEmail(msg);
            console.log('E-mail enviado com sucesso:', response);
        } catch (err) {
            setError(`Ocorreu um erro ao enviar o e-mail: ${err.message}`);
            console.error('Erro:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center text-black gap-5 lg:gap-10 font-semibold w-full px-5 md:px-20 lg:px-32 xl:px-52">
            <div className="flex lg:flex-row flex-col w-full grid-flow-col gap-10">
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-1">
                            <label className="text-white">Nome</label>
                            <input 
                                type="text" 
                                className="outline-none bg-white p-1 focus:ring-2 focus:ring-red-500 rounded-md" 
                                name="nome"
                                value={nome}
                                onChange={ (e) => setNome(e.target.value) }
                                required
                                />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-white">Email</label>
                            <input 
                                type="email" 
                                className="outline-none p-1 bg-white focus:ring-2 focus:ring-red-500 rounded-md" 
                                name="email"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value) }   
                                required 
                                />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-white">Assunto</label>
                            <input 
                                type="text" 
                                className="outline-none p-1 bg-white focus:ring-2 focus:ring-red-500 rounded-md" 
                                name="assunto"
                                value={assunto}
                                onChange={ (e) => setAssunto(e.target.value) }
                                required
                                />
                        </div>
                    </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col gap-1">
                        <label className="text-white">Mensagem</label>
                        <textarea 
                            className="outline-none resize-none p-1 bg-white focus:ring-2 h-48 focus:ring-red-500 rounded-md" 
                            name="mensagem"
                            value={mensagem}
                            onChange={ (e) => setMensagem(e.target.value) }
                            required
                            />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center text-white ">
                <button 
                    className="flex flex-row mb-5 items-center justify-center gap-2 border border-white rounded-md p-2 hover:border-red-500 hover:text-red-500 lg:w-2/12 w-2/6 " type="submit"
                >
                   {loading ? <BsArrowClockwise size={24} className="animate-spin" /> : 'Enviar'}
                </button>
                <span>{error && <p className="text-red-500">{error}</p>}</span>
            </div>
            <div className="flex gap-5 lg:gap-10 flex-row mt-5 lg:mt-0 text-white">
                <a href="http://www.github.com/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                    
                <BsGithub className="text-white hover:text-red-500 group-hover:text-red-500 text-5xl"/>
                    <p className="group-hover:text-red-500 ">Github</p>
                </a>
                <a href="http://www.linkedin.com/in/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <PiLinkedinLogoBold className="text-white text-5xl hover:text-red-500 group-hover:text-red-500 "/>
                    <p className="group-hover:text-red-500 ">Linkedin</p>
                </a>
                <a href="http://www.instagram.com/albertverso" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <PiInstagramLogoBold className="text-white text-5xl hover:text-red-500 group-hover:text-red-500 "/>
                    <p className="group-hover:text-red-500 ">Instagram</p>
                </a>
                <a href="mailto:alsguert@gmail.com" className="group transform hover:scale-110 transition-transform duration-300 flex flex-col gap-2 items-center justify-center">
                    <MdOutlineEmail className="text-white text-5xl hover:text-red-500 group-hover:text-red-500 "/>
                    <p className="group-hover:text-red-500 ">Email</p>
                </a>
            </div>
        </form>
    )
}