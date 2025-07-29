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
  FaPlay,
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
      icon: <FaTruck className="text-4xl text-primary-600" />,
      title: "Caçambas 4m³",
      description:
        "Caçambas estacionárias ideais para remoção de entulhos de construção, reforma e limpeza.",
      features: ["Capacidade de 4m³", "Entrega rápida", "Retirada no prazo"],
    },
    {
      icon: <FaRecycle className="text-4xl text-primary-600" />,
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
      icon: <FaClock className="text-4xl text-primary-600" />,
      title: "Atendimento 24h",
      description:
        "Atendimento disponível 24 horas para emergências e agendamentos.",
      features: ["Suporte 24h", "Agendamento flexível", "Resposta rápida"],
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-600" />,
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
    { number: "15+", label: "Anos de Experiência" },
    { number: "50+", label: "Caçambas Disponíveis" },
    { number: "1000+", label: "Clientes Satisfeitos" },
    { number: "100%", label: "Destinação Legal" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="https://www.neltecentulhos.com.br/assets/logoNeltec-Csyxl2JC.png"
                alt="Neltec Logo"
                className="h-8 md:h-10 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                  Neltec
                </h1>
                <p className="text-xs md:text-sm text-primary-600 font-medium">
                  Entulhos
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#sobre"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Sobre
              </a>
              <a
                href="#servicos"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Serviços
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Contato
              </a>
              <button
                onClick={handleLoginRedirect}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Sistema Interno
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#sobre"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                >
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                >
                  Serviços
                </a>
                <a
                  href="#contato"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                >
                  Contato
                </a>
                <button
                  onClick={handleLoginRedirect}
                  className="w-full text-left px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Sistema Interno
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg hero-pattern overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white space-y-6 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Locação de <span className="text-green-300">Caçambas</span> em
                  Taboão da Serra
                </h1>
                <p className="text-xl md:text-2xl text-green-100 font-light">
                  Soluções rápidas e eficientes para descarte de entulho
                </p>
                <p className="text-lg text-white/90 max-w-lg">
                  Há mais de 15 anos oferecendo o melhor serviço de locação de
                  caçambas com destinação ecológica e atendimento 24 horas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  <FaWhatsapp className="mr-2 group-hover:animate-bounce" />
                  Solicitar Orçamento
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center group">
                  <FaPlay className="mr-2 group-hover:animate-pulse" />
                  Ver Serviços
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-up">
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 glass-effect">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                  alt="Caçamba Neltec"
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white p-4 rounded-xl float-animation">
                  <div className="text-center">
                    <div className="text-2xl font-bold">4m³</div>
                    <div className="text-sm">Capacidade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Tradição e Confiança em{" "}
                  <span className="text-primary-600">Taboão da Serra</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A <strong>Neltec Entulhos</strong> é referência em locação de
                  caçambas em Taboão da Serra e região há mais de 15 anos. Nossa
                  missão é oferecer soluções práticas e sustentáveis para o
                  descarte de entulhos de construção, reforma e limpeza.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <FaHandshake className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Compromisso</h3>
                    <p className="text-gray-600 text-sm">
                      Pontualidade e qualidade em cada serviço
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaUsers className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Experiência</h3>
                    <p className="text-gray-600 text-sm">
                      Equipe especializada e qualificada
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Conheça Nossa História
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
                alt="Caminhão Neltec"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-primary-600">Serviços</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para todas as suas necessidades de
              descarte de entulhos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 card-hover shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em <span className="text-primary-600">Contato</span>
            </h2>
            <p className="text-lg text-gray-600">
              Estamos prontos para atender você. Solicite seu orçamento!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Informações de Contato
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                      <FaWhatsapp className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        (11) 99999-9999
                      </p>
                      <p className="text-sm text-gray-600">WhatsApp 24h</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        (11) 4777-8888
                      </p>
                      <p className="text-sm text-gray-600">Telefone fixo</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        contato@neltec.com
                      </p>
                      <p className="text-sm text-gray-600">E-mail</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Taboão da Serra - SP
                      </p>
                      <p className="text-sm text-gray-600">
                        Atendemos toda a região
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  Horário de Atendimento
                </h4>
                <p className="text-gray-600">Segunda a Sexta: 7h às 18h</p>
                <p className="text-gray-600">Sábado: 8h às 12h</p>
                <p className="text-primary-600 font-medium">Emergências: 24h</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Solicite seu Orçamento
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Endereço da Obra
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Rua, número, bairro..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Entulho
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Entulho de Construção</option>
                      <option>Entulho de Reforma</option>
                      <option>Entulho de Demolição</option>
                      <option>Limpeza de Terreno</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Observações
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Detalhes sobre o serviço..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg"
                  >
                    Enviar Solicitação
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://www.neltecentulhos.com.br/assets/logoNeltec-Csyxl2JC.png"
                  alt="Neltec Logo"
                  className="h-8 w-auto filter brightness-0 invert"
                />
                <div>
                  <h3 className="text-xl font-bold">Neltec Entulhos</h3>
                  <p className="text-gray-400 text-sm">Locação de Caçambas</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Há mais de 15 anos oferecendo as melhores soluções em locação de
                caçambas para Taboão da Serra e região.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <FaWhatsapp />
                </button>
                <button className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <FaPhone />
                </button>
                <button className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <FaEnvelope />
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Locação de Caçambas</li>
                <li>Retirada de Entulho</li>
                <li>Destinação Ecológica</li>
                <li>Atendimento 24h</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li>(11) 99999-9999</li>
                <li>(11) 4777-8888</li>
                <li>contato@neltec.com</li>
                <li>Taboão da Serra - SP</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Neltec Entulhos. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">
              Desenvolvido com ❤️ para o meio ambiente
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
