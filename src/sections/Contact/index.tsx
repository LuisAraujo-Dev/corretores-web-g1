import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import type { FC } from "react";
import type { SectionProps } from "../../types/index.js";
import { CORRETORA_INFO } from "../../utils/whatsappLinkGenerator.js";

const Contact: FC<SectionProps> = ({ id }) => {

  const currentYear = new Date().getFullYear();

  return (
    <section id={id} className="pt-20 lg:pt-32 bg-gray-100">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-800">
            Fale Conosco
          </h2>
          <p className="text-gray-600 mt-2">Entre em contato para cotações, dúvidas ou agendar uma visita.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações Diretas</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-gray-700">Endereço</p>
                            <p className="text-gray-600">Rua da Corretagem, 1234 - Sala 501</p>
                            <p className="text-gray-600">Centro, São Paulo - SP, 01000-000</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-gray-700">Telefones</p>
                            <p className="text-gray-600">Geral: (11) 3000-1234</p>
                            <p className="text-gray-600">WhatsApp: {CORRETORA_INFO.telefone.replace('55', '+')} (Ex: +61 99876-5432)</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-gray-700">E-mail</p>
                            <p className="text-gray-600">contato@{CORRETORA_INFO.nome.toLowerCase().replace(' ', '')}.com.br</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h3>
                <form 
                    onSubmit={(e) => { 
                        e.preventDefault(); 
                        alert('Formulário enviado! (A funcionalidade de envio de email requer integração com um backend.)');
                    }}
                >
                    <div className="space-y-4">
                        <input type="text" placeholder="Seu Nome" required 
                               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        <input type="email" placeholder="Seu Email" required 
                               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        <input type="text" placeholder="Assunto" required 
                               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        <textarea placeholder="Sua Mensagem" rows={4} required 
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                        
                        <button type="submit"
                                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition duration-200">
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>

        </div>
      </div>
      
      <footer className="bg-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
          
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} {CORRETORA_INFO.nome}. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-orange-500 transition duration-200">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-orange-500 transition duration-200">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-orange-500 transition duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;