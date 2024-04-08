import React from "react";

const About = () => {
  return (
    <div className="h-[calc(100vh-112px)] p-20">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-landing2Xl font-semibold"
      >
        Martín Gette
      </h1>
      <h2
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="500"
        className="text-landingMd"
      >
        Full Stack Developer | Técnico SIG
      </h2>
      <p
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="500"
        className="text-lg"
      >
        Mi carrera se basa en la creación de soluciones innovadoras que fusionen
        los mundos digital y geoespacial para resolver problemas del mundo real.
        Mi pasión por la programación y la geoinformática se combina en
        proyectos que integran mapas interactivos, visualización de datos
        geoespaciales y funcionalidades web.
      </p>
    </div>
  );
};

export default About;
