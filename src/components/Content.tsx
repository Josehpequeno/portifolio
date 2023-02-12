// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import pdf from "../assets/curriculo.pdf";

import projeto1 from "../assets/projeto-1.gif";
import projeto2 from "../assets/projeto-2.png";
import projeto3 from "../assets/projeto-3.gif";
import projeto4 from "../assets/projeto-4.png";

import { FaFilePdf, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Content() {
  return (
    <>
      {/* <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 px-2 py-2 lg:py-6">
          <div className="pl-4 flex items-center gap-5">
            <a
              className="text-secundary no-underline hover:no-underline font-bold text-lg lg:text-xl flex items-center gap-5"
              href="https://github.com/Josehpequeno"
            >
              <img
                alt="logo"
                className="w-12 h-12 rounded-full border-2 border-secundary"
                src={logo}
              />
            </a>
          </div>
          <div
            className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
                          </ul>
          </div>
        </div>
      </nav> */}
      <div className="container mx-auto ">
        <div className="my-10 pl-4 flex justify-center items-center">
          <a
            className="text-secundary no-underline hover:no-underline font-bold text-lg lg:text-xl flex items-center gap-5"
            href="https://github.com/Josehpequeno"
          >
            <img
              alt="logo"
              className="w-32 h-32 rounded-full border-2 border-secundary"
              src={logo}
            />
            {/* Josehpequeno */}
          </a>
        </div>
        <div className="text-center px-3 lg:px-0 justify-center items-center">
          <h1 className="my-1 text-2xl md:text-3xl lg:text-5xl font-black leading-tight text-secundary">
            Josehpequeno
          </h1>
          <h4 className="my-1 text-md md:text-md lg:text-lg leading-tight text-secundary">
            Hícaro José Barbosa Soares
          </h4>
          <h4 className="my-1 text-md md:text-md lg:text-lg leading-tight text-secundary">
            Desenvolvedor Fullstack
          </h4>
          <p className="pt-16 leading-normal text-base md:text-xl lg:text-2xl mb-8 text-secundary opacity-90">
            Estudante da Universidade Estadual do Piauí, realizando o curso de
            Ciência da Computação. Iniciei a realizar projetos de programação em
            2019 com trabalhos do curso, neles utilizei diversas linguagens como
            python, php, rust e javascript. Procuro principalmente oportunidades
            de Back-end com Nodejs.
          </p>
          <div className="grid grid-flow-row auto-rows md:grid-flow-col justify-center items-center mx-32 py-10 gap-5">
            {/* <a href="https://www.linkedin.com/in/hicarojose/">
              <img
              className="rounded-sm"
              alt="linkedin"
              src="https://img.shields.io/badge/-LinkedIn-white?style=for-the-badge&logo=linkedin&logoColor=192432&labelColor=ffffff&color=ffffff"
              />
            </a> */}
            {/* <a href="https://github.com/Josehpequeno">
              <img
              className="rounded-sm"
              alt="github"
              src="https://img.shields.io/badge/-Github-white?style=for-the-badge&logo=github&logoColor=192432&labelColor=ffffff&color=ffffff"
              />
            </a> */}
            <a
              href="https://www.linkedin.com/in/hicarojose/"
              className="rounded-sm bg-white w-32 h-10 flex flex-row gap-4 justify-center items-center"
            >
              <FaLinkedin className="text-primary" />
              <p className=" font-open-sans text-sm uppercase">LinkedIn</p>
            </a>
            <a
              href="https://github.com/Josehpequeno"
              className="rounded-sm bg-white w-32 h-10 flex flex-row gap-4 justify-center items-center"
            >
              <FaGithubSquare className="text-primary" />
              <p className=" font-open-sans text-sm uppercase">Github</p>
            </a>
            <a
              href="mailto:hicarojbs21@gmail.com"
              className="rounded-sm bg-white w-32 h-10 flex gap-4 justify-center items-center"
            >
              <MdEmail className="text-primary" />
              <p className=" font-open-sans text-sm uppercase">Gmail</p>
            </a>
            {/* <a href="mailto:hicarojbs21@gmail.com">
              <img
                className="rounded-sm"
                alt="gmail"
                src="https://img.shields.io/badge/-Gmail-white?style=for-the-badge&logo=gmail&logoColor=192432&labelColor=ffffff&color=ffffff"
              />
            </a> */}
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-white w-32 h-10 flex gap-4 justify-center items-center"
            >
              <FaFilePdf className="text-primary" />
              <p className=" font-open-sans text-xs uppercase">currículo</p>
            </a>
          </div>
        </div>
      </div>
      <section className="py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-secundary">
            Projetos
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          {/*Direita*/}
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-secundary font-bold leading-none mb-3">
                Alyah
              </h3>
              <p className="text-secundary mb-8">
                Leitor de Mangá Web
                <br />
                <br />
                <div className="flex-row md:flex grid gap-x-0 gap-y-5 md:gap-5 grid-cols-2">
                  <img
                    className="rounded-sm"
                    alt="nodejs"
                    src="https://img.shields.io/badge/-nodejs-white?style=for-the-badge&logo=node.js&logoColor=192432&labelColor=ffffff&color=ffffff"
                  />
                  <img
                    className="rounded-sm"
                    alt="javascript"
                    src="https://img.shields.io/badge/-javascript-white?style=for-the-badge&logo=javascript&logoColor=192432&labelColor=ffffff&color=ffffff"
                  />
                  <img
                    className="rounded-sm"
                    alt="handlebars"
                    src="https://img.shields.io/badge/-handlebars-white?style=for-the-badge&logo=handlebars.js&logoColor=192432&labelColor=ffffff&color=ffffff"
                  />
                </div>
                <br />
                <a
                  className=" text-terciary"
                  href="https://github.com/Josehpequeno/Alyah"
                >
                  https://github.com/Josehpequeno/Alyah
                </a>
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img alt="projeto-1" src={projeto1} className=" rounded-lg" />
            </div>
          </div>
          {/*Esquerda */}
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img alt="projeto-2" src={projeto2} className=" rounded-lg" />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-secundary font-bold leading-none mb-3">
                  UDP-TCP-Nodejs
                </h3>
                <p className="text-secundary mb-8">
                  Códigos de comunicação entre os processos sendo cliente e
                  servidor udp e tcp e p2p
                  <br />
                  <br />
                  <div className="flex flex-row gap-5">
                    <img
                      className="rounded-sm"
                      alt="nodejs"
                      src="https://img.shields.io/badge/-nodejs-white?style=for-the-badge&logo=node.js&logoColor=192432&labelColor=ffffff&color=ffffff"
                    />
                    <img
                      className="rounded-sm"
                      alt="javascript"
                      src="https://img.shields.io/badge/-javascript-white?style=for-the-badge&logo=javascript&logoColor=192432&labelColor=ffffff&color=ffffff"
                    />
                  </div>
                  <br />
                  <a
                    className=" text-terciary"
                    href="https://github.com/Josehpequeno/UDP-TCP-Nodejs"
                  >
                    https://github.com/Josehpequeno/UDP-TCP-Nodejs
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/*Direita */}
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-secundary font-bold leading-none mb-3">
                FIFO-buffer
              </h3>
              <p className="text-secundary mb-8">
                Implementação de FIFO com buffer em Rust. A aplicação contém um
                menu interativo para testar as funcionalidades da FIFO com
                buffer
                <br />
                <br />
                <div className="flex flex-row gap-5">
                  <img
                    className="rounded-sm"
                    alt="rust"
                    src="https://img.shields.io/badge/-rust-white?style=for-the-badge&logo=rust&logoColor=192432&labelColor=ffffff&color=ffffff"
                  />
                </div>
                <br />
                <a
                  className=" text-terciary"
                  href="https://github.com/Josehpequeno/FIFO-buffer"
                >
                  https://github.com/Josehpequeno/FIFO-buffer
                </a>
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img alt="projeto-1" src={projeto3} className=" rounded-lg" />
            </div>
          </div>
          {/*Esquerda */}
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img alt="projeto-2" src={projeto4} className=" rounded-lg" />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-secundary font-bold leading-none mb-3">
                  Pk-LogNormal
                </h3>
                <p className="text-secundary mb-8">
                  Código do cálculo de probabilidade de uma Log Normal
                  <br />
                  <br />
                  <div className="flex flex-row gap-5">
                    <img
                      className="rounded-sm"
                      alt="python"
                      src="https://img.shields.io/badge/-python-white?style=for-the-badge&logo=python&logoColor=192432&labelColor=ffffff&color=ffffff"
                    />
                  </div>
                  <br />
                  <a
                    className=" text-terciary"
                    href="https://github.com/Josehpequeno/Pk-lognormal"
                  >
                    https://github.com/Josehpequeno/Pk-lognormal
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/*fim*/}
        </div>
      </section>
    </>
  );
}
