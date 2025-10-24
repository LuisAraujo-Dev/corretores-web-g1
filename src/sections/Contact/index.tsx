import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import type { FC } from "react";
import type { SectionProps } from "../../types/index.js";
import { CORRETORA_INFO } from "../../utils/whatsappLinkGenerator.js";
import LaLogo from '../../images/la-logo.png'

const Contact: FC<SectionProps> = ({ id }) => {
  const googleMapsIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.443702127264!2d-46.65709938538356!3d-23.552885484683074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c77e8e5d23%3A0x6b1c7f4e91c7f6b!2sAvenida%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1633536000000!5m2!1spt-BR!2sbr";
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

              <div className="mb-8 rounded-xl overflow-hidden shadow-lg h-64 lg:h-96 w-full">
                <iframe
                  src={googleMapsIframeUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Corretora"
                ></iframe>
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

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} {CORRETORA_INFO.nome}. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-sm ">
              <a
                href="https://personal-portifolio-khaki.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
              >
                <p>Feito por Luís Araújo</p>
                <img src={LaLogo} alt="Logomarca LA" className=" h-10 w-auto brightness-200" />
              </a>
            </div>
          </div>

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