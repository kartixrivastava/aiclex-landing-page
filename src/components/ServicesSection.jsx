const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies",
    icon: "🌐",
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    icon: "📱",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic marketing solutions to grow your online presence and reach",
    icon: "📈",
  },
  {
    title: "AI Automation",
    description:
      "Intelligent automation solutions powered by artificial intelligence",
    icon: "🤖",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
