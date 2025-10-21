import React from 'react';


const CardDeOferta = ({ nomeProduto, icone, info, linkWhatsapp }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm mx-auto transform hover:scale-[1.02] transition duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <span className="text-4xl text-orange-500">{icone}</span> 
        <h3 className="text-2xl font-bold text-blue-800">{nomeProduto}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{info}</p>
      
      <a 
        href={linkWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition duration-200 uppercase"
      >
        Aproveitar Oportunidade
      </a>
    </div>
  );
};


const Hero = ({ id }) => {
  
  const whatsappLinkEquipe = "https://wa.me/SEU_NUMERO_AQUI?text=Ol%C3%A1%2C%20equipe%20NOME_DA_CORRETORA%2C%20gostaria%20de%20falar%20sobre%20os%20produtos%20e%20servi%C3%A7os%20que%20voc%C3%AAs%20oferecem.";
  
  const ofertaEstatica = {
    nomeProduto: "Seguro Auto Completo",
    info: "Cobertura total contra roubo, furto e colisão com assistência 24h.",
    linkWhatsapp: "https://wa.me/SEU_NUMERO_AQUI?text=Ol%C3%A1%2C%20equipe%20NOME_DA_CORRETORA%2C%20gostaria%20de%20contratar%20o%20Seguro%20Auto%20Completo."
  };

  return (
    <section id={id} className="relative bg-gray-900 text-white pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="absolute inset-0 bg-black opacity-40"></div> 

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          <div className="lg:w-7/12 text-center lg:text-left mb-10 lg:mb-0">
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Proteção Completa. <br className="hidden md:inline"/> Sua Tranquilidade é o Nosso Plano.
            </h1>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8">
              Somos a parceira que você precisa para cuidar do seu futuro, do seu patrimônio e da sua saúde. Conte com uma equipe especializada.
            </p>
            
            <a 
              href={whatsappLinkEquipe}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 text-lg uppercase"
            >
              Falar com a Equipe
            </a>
          </div>

          <div className="lg:w-5/12">
            <CardDeOferta 
              nomeProduto={ofertaEstatica.nomeProduto}
              icone="🛡️"
              info={ofertaEstatica.info}
              linkWhatsapp={ofertaEstatica.linkWhatsapp}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;