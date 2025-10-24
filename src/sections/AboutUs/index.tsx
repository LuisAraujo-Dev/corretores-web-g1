import { Target, Eye, Handshake } from 'lucide-react'; 
import type { FC } from 'react';
import type { SectionProps } from '../../types/index.js';
import TeamPhoto from "../../images/equipe.webp"

const mvvData = [
  {
    icon: Target,
    title: "Missão",
    text: "Oferecer soluções de proteção e planejamento financeiro personalizadas, garantindo a segurança e tranquilidade dos nossos clientes em todos os momentos da vida.",
    color: "text-blue-600"
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser reconhecida como a corretora líder em confiança e inovação no mercado, expandindo nosso alcance através de tecnologia e excelência no atendimento.",
    color: "text-orange-500"
  },
  {
    icon: Handshake,
    title: "Valores",
    text: "Ética e transparência em todas as negociações; Compromisso com o cliente; Inovação contínua e Respeito mútuo.",
    color: "text-gray-700"
  },
];

const AboutUs: FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          
          <div className="lg:w-1/2">
            <div className="h-64 lg:h-96 rounded-lg shadow-xl overflow-hidden">
                <img 
                    src={TeamPhoto} 
                    alt="Foto da Equipe ou Escritório da Corretora"
                    className="w-full h-full object-cover" 
                />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-800 mb-4">
              Mais de 10 Anos Cuidando do Seu Amanhã
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Nascemos da paixão por proteger e orientar. Desde a fundação em 2014, a [Nome da Corretora] se estabeleceu com o objetivo claro de simplificar o universo dos seguros e serviços financeiros. Nossa história é marcada pela busca incessante das melhores parcerias e pela construção de um relacionamento de confiança com cada cliente.
            </p>
            <p className="text-lg text-gray-600">
              Ao longo dos anos, crescemos e evoluímos, mas a essência permanece a mesma: uma equipe dedicada e especializada, pronta para oferecer as soluções mais adequadas para sua vida, sua família e seu patrimônio. Continuamos comprometidos em ser o seu porto seguro nas grandes decisões.
            </p>
          </div>
        </div>
        
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-800">
                Nosso Compromisso: Missão, Visão e Valores
            </h2>
            <p className="text-gray-600 mt-2">Os pilares que sustentam a nossa corretora e guiam nosso trabalho diário.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mvvData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              <div className={`flex justify-center mb-4`}>
                <item.icon className={`w-10 h-10 ${item.color}`} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              
              <p className="text-gray-500 text-base">{item.text}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;