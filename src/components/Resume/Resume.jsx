import React from "react";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { BiCurrentLocation } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdLink } from "react-icons/io";

import Photo from "../../assets/img/photo.png";

const Resume = (props) => {
  const { darkMode, toggleDarkMode } = props;
  return (
    <div className=" h-fit font-poppins bg-white transition duration-300 dark:bg-slate-900 dark:text-gray-100">
      <div
        className="flex flex-col sm:flex-row justify-around items-center bg-slate-400 dark:bg-slate-900"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div
          onClick={toggleDarkMode}
          className="transition-all duration-300 hover:translate-x-1 m-4 rounded-md drop-shadow-md bg-slate-400 dark:bg-slate-900 cursor-pointer p-1 ease-in-out"
        >
          {darkMode ? <BiMoon size="30px" /> : <BiSun size="30px" />}
        </div>
        <div className="text-center pt-8 pb-2 sm:pb-8">
          <h1 className="text-5xl">FERNANDO MARTIN GETTE</h1>
          <hr className="my-4" />
          <h2 className="text-2xl">FULL STACK DEVELOPER / TECNICO GIS</h2>
        </div>
        <div
          className="flex flex-col flex-wrap text-sm"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span className="flex items-baseline py-2">
            <BiLogoTelegram
              style={{ minWidth: "1em", marginInlineEnd: "1rem" }}
            />
            <a
              href="https://t.me/mapgeogis"
              target="_black"
              className="flex items-baseline hover:underline hover:translate-x-1 transition-all duration-300"
            >
              +54 9 2284 69-3672
            </a>
          </span>
          <span className="flex items-baseline py-2">
            <BiLogoGmail style={{ minWidth: "1em", marginInlineEnd: "1rem" }} />
            <a
              href="mailto:contacto@mapgeogis.com"
              target="_black"
              className="flex items-baseline hover:underline hover:translate-x-1 transition-all duration-300"
            >
              martin.gette.5@gmail.com
            </a>
          </span>
          <span className="flex items-baseline py-2">
            <BsLinkedin style={{ minWidth: "1em", marginInlineEnd: "1rem" }} />
            <a
              href="https://www.linkedin.com/in/martingette250187/"
              target="_black"
              className="flex items-baseline hover:underline hover:translate-x-1 transition-all duration-300"
            >
              linkedin.com/in/martingette250187
            </a>
          </span>
          <span className="flex items-baseline py-2">
            <AiFillGithub
              style={{ minWidth: "1em", marginInlineEnd: "1rem" }}
            />
            <a
              href="https://github.com/martin250187"
              target="_black"
              className="flex items-baseline hover:underline hover:translate-x-1 transition-all duration-300"
            >
              github.com/martin250187
            </a>
          </span>
        </div>
      </div>
      <div className="w-full px-2 sm:px-24">
        <div
          className="flex justify-center items-center py-4"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="flex w-full flex-col sm:flex-row">
            <div className="flex flex-col items-start p-4 mr-8">
              <p className="flex text-base justify-around">
                Full Stack Developer | Javascript | React | Redux | Express |
                NodeJS | SQL | GIT 💻🚀 <br />
                Mi experiencia abarca tanto el desarrollo frontend como backend,
                utilizando herramientas como HTML, CSS, JavaScript y frameworks
                como React. En el lado del servidor, he trabajado con Node.js y
                Express, implementando API REST y gestionando bases de datos con
                PostgreSQL y MySQL. <br />
                Técnico en Sistemas de Información Geográfica. | ArcGIS | QGIS |
                Geoserver | Geonetwork | SoPI 🌍🗺️ <br />
                Mi carrera se basa en la creación de soluciones innovadoras que
                fusionen los mundos digital y geoespacial para resolver
                problemas del mundo real creando proyectos que integran mapas
                interactivos, visualización de datos geoespaciales y
                funcionalidades web.
              </p>
            </div>
            {/*
              <div
                className="flex justify-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img
                  className="p-0 h-full rounded-2xl mx-12"
                  src={Photo}
                  alt="CV-Photo"
                />
              </div>
  */}
          </div>
        </div>
        <div className="flex w-full flex-col sm:flex-row">
          <div className="pl-2 sm:pl-8 pr-2 sm:pr-4 w-full sm:w-11/12">
            <div className="p-2" data-aos="fade-right" data-aos-duration="1000">
              <h3 className="text-lg underline">Conocimientos</h3>
              <ul className="text-sm">
                <span className="flex items-baseline">
                  <GiCheckMark className="mx-1" />
                  Javascript, React, Node Js, Express, Redux, SQL, HTML, PHP,
                  CSS, Sequelize
                </span>
                <span className="flex items-baseline">
                  <GiCheckMark className="mx-1" />
                  ArcGIS, QGIS, Geoserver, Geonetwork
                </span>
                <span className="flex items-baseline">
                  <GiCheckMark className="mx-1" />
                  Procesamiento de imágenes Satelitales (SoPI)
                </span>
                <span className="flex items-baseline">
                  <GiCheckMark className="mx-1" />
                  Bases de datos espaciales y servidores de mapas
                </span>
              </ul>
            </div>
            <hr className="h-px border-none bg-slate-300 my-1" />
            <div className="p-2" data-aos="fade-right" data-aos-duration="1000">
              <h3 className="text-lg underline">Competencias</h3>
              <ul className="text-sm">
                <span className="flex items-baseline">
                  <GiCheckMark className="mx-1" />
                  Proactivo || Comunicación efectiva || Trabajo en equipo ||
                  Resolución de problemas || Adaptabilidad
                </span>
              </ul>
            </div>
            <hr className="h-px border-none bg-slate-300 my-1" />
            <div
              className="p-2 text-sm"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-lg underline">Idioma</h3>
              <div className="w-full sm:w-2/5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                <div className="bg-slate-400 h-2.5 rounded-full w-4/6"></div>
              </div>
              <a
                href="https://www.efset.org/cert/3eHqzp"
                target="_blank"
                className="flex items-baseline hover:underline hover:translate-x-1 transition-all duration-300 pt-1"
              >
                Inglés: B2 Upper Intermediate
              </a>
            </div>
            <hr className="h-px border-none bg-slate-300 my-1" />
            <div className="p-2" data-aos="fade-right" data-aos-duration="1000">
              <h3 className="text-lg underline">Proyectos</h3>
              <ul className="text-sm">
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline flex">
                      <a className="flex" href="https://rodarrent.vercel.app/">
                        Rodar Rent <IoMdLink className="text-xl mx-2" />
                      </a>
                    </div>
                  </div>
                  <div>
                    Aplicación destinada a la gestión de alquiler vehicular
                  </div>
                </span>
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline flex">
                      <a
                        className="flex"
                        href="https://tsa-demo-eight.vercel.app/"
                      >
                        Análisis de Cultivos
                        <IoMdLink className="text-xl mx-2" />
                      </a>
                    </div>
                  </div>
                  <div>
                    Plataforma de mapas web diseñada específicamente para el
                    análisis de cultivos
                  </div>
                </span>
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline flex">
                      <a
                        className="flex"
                        href="https://mapgeogis.com/pediatria_demo/indexApp.php"
                      >
                        Historia Clínica Pediatría
                        <IoMdLink className="text-xl mx-2" />
                      </a>
                    </div>
                  </div>
                  <div>
                    Aplicación diseñada para la gestión de pacientes y
                    seguimiento de consultas para pacientes pediátricos.
                  </div>
                </span>
              </ul>
            </div>
            <hr className="h-px border-none bg-slate-300 my-1" />
            <div className="p-2" data-aos="fade-right" data-aos-duration="1000">
              <h3 className="text-lg underline">Experiencia Laboral</h3>
              <ul className="text-sm">
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline">
                      Municipalidad de Olavarría (2010-Actualidad)
                    </div>
                  </div>
                  <div>
                    Sistemas de Información Geográfica (Gobierno Digital) <br />
                    GIS Desktop, (QGIS, ARCGIS), desarrollo de mapas web,
                    Geoserver, PostgreSQL. Análisis de bases de datos.
                  </div>
                </span>
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline">
                      Consultora ORIGO (2022-2023)
                    </div>
                  </div>
                  <div>
                    Sistemas de Información Geográfica <br />
                    Mapas para Estudio de Impacto Ambiental (Ubicación,
                    satélite, topográfico y edafológico, geológico,
                    geomorfológico, hidrogeológico, hidrológico, sensibilidad
                    ambiental) Desarrollo de mapa web.
                  </div>
                </span>
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline">
                      TSA Tecnología Satelital para el Agro (2022-2023)
                    </div>
                  </div>
                  <div>
                    Desarrollo de aplicaciones de mapas web con tecnología
                    Leaflet.
                  </div>
                </span>
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline">
                      Facultad de Medicina, UNICEN (2018-2023)
                    </div>
                  </div>
                  <div>
                    Sistemas de Información Geográfica (Proyecto Cuidarás){" "}
                    <br />
                    Desarrollo integral de proyecto GIS enfocado al área de
                    salud. Mapas para trabajo de campo. Generación de
                    cartografía mediante geocoding. Análisis de variables. Mapa
                    Web y proyecto de escritorio.
                  </div>
                </span>
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline">
                      SCH Construcciones (2017-2023)
                    </div>
                  </div>
                  <div>
                    Sistemas de Información Geográfica <br />
                    Desarrollo integral de proyecto GIS enfocado al área de
                    servicios. Georreferencia de gasoductos y elementos de la
                    traza, generando atributos necesarios para modelo de base de
                    datos requerido.
                  </div>
                </span>
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline">Geosystems (2021)</div>
                  </div>
                  <div>
                    Sistemas de Información Geográfica <br />
                    Arbolado Público del Área Metropolitana de Mendoza.
                    Vectorización de la superficie arbórea mediante el
                    procesamiento de imágenes.
                  </div>
                </span>
              </ul>
            </div>
            <hr className="h-px border-none bg-slate-300 my-1" />
            <div className="p-2" data-aos="fade-right" data-aos-duration="1000">
              <h3 className="text-lg underline">Formación Académica</h3>
              <ul className="text-sm">
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline">Full Stack Developer (2023)</div>
                  </div>
                  <div>Henry Bootcamp (Modalidad virtual)</div>
                </span>
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline">
                      Tecnicatura Universitaria en Sistemas de Información
                      Geográfica (2013-2015)
                    </div>
                  </div>
                  <div>
                    Universidad de General Sarmiento, Partido de General
                    Pueyrredón.
                  </div>
                </span>
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline">
                      Ingeniería Industrial (2007-2012) - (4to año)
                    </div>
                  </div>
                  <div>Facultad de Ingeniería de Olavarría, UNICEN.</div>
                </span>
                <span className="flex flex-col items-baseline">
                  <div className="flex py-1">
                    <GiCheckMark className="mx-1" />
                    <div className="underline">Bachiller (2006)</div>
                  </div>
                  <div>
                    Escuela de Educación Media No 6 “Coronel Olavarría”.
                    Distrito: Olavarría. Título: Bachiller Modalidad: Ciencias
                    Naturales con orientación en “Ciencia, Técnica Y Sociedad”
                  </div>
                </span>
              </ul>
            </div>
          </div>
        </div>
        <footer className="p-4">
          <p className=" text-sm"></p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
