import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTruck,
  FaRecycle,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaShieldAlt,
  FaHandshake,
  FaUsers,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaLeaf,
  FaAward,
  FaStar,
} from "react-icons/fa";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const services = [
    {
      icon: <FaTruck className="text-5xl text-white mb-4" />,
      title: "Caçambas 4m³",
      description:
        "Caçambas estacionárias ideais para remoção de entulhos de construção, reforma e limpeza.",
      features: ["Capacidade de 4m³", "Entrega rápida", "Retirada no prazo"],
    },
    {
      icon: <FaRecycle className="text-5xl text-white mb-4" />,
      title: "Destinação Ecológica",
      description:
        "Destinação ambientalmente correta dos resíduos, seguindo todas as normas ambientais.",
      features: [
        "100% Legal",
        "Licenças atualizadas",
        "Responsabilidade ambiental",
      ],
    },
    {
      icon: <FaClock className="text-5xl text-white mb-4" />,
      title: "Atendimento 24h",
      description:
        "Atendimento disponível 24 horas para emergências e agendamentos.",
      features: ["Suporte 24h", "Agendamento flexível", "Resposta rápida"],
    },
    {
      icon: <FaShieldAlt className="text-5xl text-white mb-4" />,
      title: "Segurança Total",
      description:
        "Todos os procedimentos seguem rigorosamente as normas de segurança.",
      features: [
        "Seguro completo",
        "Equipe treinada",
        "Equipamentos certificados",
      ],
    },
  ];

  const stats = [
    {
      number: "15+",
      label: "Anos de Experiência",
      icon: <FaAward className="text-3xl text-green-600 mb-2" />,
    },
    {
      number: "50+",
      label: "Caçambas Disponíveis",
      icon: <FaTruck className="text-3xl text-green-600 mb-2" />,
    },
    {
      number: "1000+",
      label: "Clientes Satisfeitos",
      icon: <FaStar className="text-3xl text-green-600 mb-2" />,
    },
    {
      number: "100%",
      label: "Destinação Legal",
      icon: <FaLeaf className="text-3xl text-green-600 mb-2" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header/Navbar */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-green-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 rounded-xl">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
                  Neltec
                </h1>
                <p className="text-sm md:text-base text-green-600 font-semibold">
                  Entulhos
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#sobre"
                className="text-gray-700 hover:text-green-600 font-semibold transition-colors duration-300"
              >
                Sobre
              </a>
              <a
                href="#servicos"
                className="text-gray-700 hover:text-green-600 font-semibold transition-colors duration-300"
              >
                Serviços
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-green-600 font-semibold transition-colors duration-300"
              >
                Contato
              </a>
              <button
                onClick={handleLoginRedirect}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Sistema Interno
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-green-200 rounded-b-2xl">
              <div className="px-4 pt-2 pb-4 space-y-2">
                <a
                  href="#sobre"
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                >
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                >
                  Serviços
                </a>
                <a
                  href="#contato"
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                >
                  Contato
                </a>
                <button
                  onClick={handleLoginRedirect}
                  className="w-full text-left px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all font-semibold"
                >
                  Sistema Interno
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-lg animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-10 w-20 h-20 bg-white rounded-full blur-md animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-green-100 font-semibold">
                  <FaLeaf className="mr-2" />
                  Sustentabilidade em Primeiro Lugar
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Locação de <span className="text-green-300">Caçambas</span>
                  <br />
                  <span className="text-green-200">Sustentáveis</span>
                </h1>

                <p className="text-xl md:text-2xl text-green-100 font-light leading-relaxed">
                  Soluções ecológicas para descarte de entulho em Taboão da
                  Serra
                </p>

                <p className="text-lg text-white/90 max-w-lg leading-relaxed">
                  Há mais de 15 anos oferecendo o melhor serviço de locação de
                  caçambas com destinação 100% ecológica e responsabilidade
                  ambiental.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-2xl">
                  <FaWhatsapp className="mr-3 text-green-600 group-hover:animate-bounce" />
                  Solicitar Orçamento
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center justify-center group">
                  <FaLeaf className="mr-3 group-hover:animate-pulse" />
                  Conheça Nossos Serviços
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                  alt="Caçamba Neltec"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                />

                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-2xl animate-bounce">
                  <div className="text-center">
                    <div className="text-3xl font-bold">4m³</div>
                    <div className="text-sm font-semibold">Capacidade</div>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-md p-4 rounded-xl">
                  <FaRecycle className="text-3xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Números que <span className="text-green-600">Impressionam</span>
            </h2>
            <p className="text-xl text-gray-600">
              Mais de uma década cuidando do meio ambiente
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-700 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="py-20 bg-gradient-to-br from-green-600 to-green-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Cuidando do{" "}
                  <span className="text-green-300">Meio Ambiente</span> há 15
                  Anos
                </h2>
                <p className="text-xl leading-relaxed text-green-100">
                  A <strong className="text-white">Neltec Entulhos</strong> é
                  referência em locação de caçambas sustentáveis em Taboão da
                  Serra e região. Nossa missão é oferecer soluções ecológicas e
                  práticas para o descarte responsável de entulhos.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                  <FaHandshake className="text-green-300 text-3xl mb-4" />
                  <h3 className="font-bold text-xl mb-2">
                    Compromisso Ambiental
                  </h3>
                  <p className="text-green-100 text-sm">
                    100% dos resíduos com destinação ecológica certificada
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                  <FaUsers className="text-green-300 text-3xl mb-4" />
                  <h3 className="font-bold text-xl mb-2">
                    Equipe Especializada
                  </h3>
                  <p className="text-green-100 text-sm">
                    Profissionais qualificados em gestão ambiental
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-white text-green-700 px-8 py-4 rounded-full hover:bg-green-50 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <FaLeaf className="inline mr-2" />
                  Nossa História Sustentável
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
                  alt="Caminhão Neltec"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos{" "}
              <span className="text-green-600">Serviços Sustentáveis</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas e ecológicas para todas as suas
              necessidades de descarte de entulhos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-green-100 text-lg">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-green-100">
                      <div className="w-3 h-3 bg-green-300 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="py-20 bg-gradient-to-br from-green-700 to-green-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em <span className="text-green-300">Contato</span>
            </h2>
            <p className="text-xl text-green-100">
              Estamos prontos para oferecer a melhor solução sustentável para
              você!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaWhatsapp className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-2xl font-bold mb-2">(11) 99999-9999</p>
              <p className="text-green-200">Atendimento 24 horas</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-2xl font-bold mb-2">(11) 4777-8888</p>
              <p className="text-green-200">Segunda a Sexta</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p className="text-xl font-bold mb-2">Taboão da Serra - SP</p>
              <p className="text-green-200">Atendemos toda a região</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-green-700 px-12 py-4 rounded-full font-bold text-xl hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
              <FaWhatsapp className="inline mr-3" />
              Solicitar Orçamento Agora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                  <FaLeaf className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Neltec Entulhos</h3>
                  <p className="text-green-400 font-semibold">
                    Sustentabilidade em Ação
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Há mais de 15 anos oferecendo as melhores soluções sustentáveis
                em locação de caçambas para Taboão da Serra e região.
              </p>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                  <FaWhatsapp className="text-xl" />
                </button>
                <button className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                  <FaPhone className="text-xl" />
                </button>
                <button className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                  <FaEnvelope className="text-xl" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-green-400">
                Serviços Sustentáveis
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <FaLeaf className="mr-2 text-green-500" /> Locação de Caçambas
                </li>
                <li className="flex items-center">
                  <FaRecycle className="mr-2 text-green-500" /> Destinação
                  Ecológica
                </li>
                <li className="flex items-center">
                  <FaTruck className="mr-2 text-green-500" /> Coleta Sustentável
                </li>
                <li className="flex items-center">
                  <FaClock className="mr-2 text-green-500" /> Atendimento 24h
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-green-400">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <FaWhatsapp className="mr-2 text-green-500" /> (11) 99999-9999
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-green-500" /> (11) 4777-8888
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-green-500" />{" "}
                  contato@neltec.com
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-green-500" /> Taboão da
                  Serra - SP
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="mb-2">
              &copy; 2025 Neltec Entulhos. Todos os direitos reservados.
            </p>
            <p className="text-sm flex items-center justify-center">
              <FaLeaf className="mr-2 text-green-500" />
              Desenvolvido com amor pelo meio ambiente
              <FaLeaf className="ml-2 text-green-500" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
