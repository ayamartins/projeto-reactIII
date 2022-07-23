import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from '../../components/Header/Header'
import image from '../../assets/fotoportfolio.svg'

import axios from 'axios'

import './Portfolio.css'

const list = [
    {
     
      id: 1,
      nome: "Artistas Trans" , 
      imagem: "https://media.giphy.com/media/pKP7UzwQPmVJ7ZMJNw/giphy.gif",
      descricao:"O desafio consisitia em criar uma página (usando HTML e CSS) e popular os campos corretamente.",
      link: "https://protagonistastrans.netlify.app/",

    },
    {
      id: 2,
      nome: "Site Herança do Sabor" , 
      imagem:"https://media.giphy.com/media/rtvv56Qw8N9SsnAisX/giphy.gif",
      descricao: "O desafio consistia em criar um apágina reponsiva usando HTML e CSS",
      link:"https://herancadosabor.netlify.app/",

    },
    { 
        id:3,
        nome: "M de Maravilhosa", 
        imagem: "https://media.giphy.com/media/AwvSHAlN9b6yrWATL4/giphy.gif",
        descricao: "Criar uma pagina responsiva, com links, fotos e textos baseado no modelo apresentado no Figma" ,
        link: "https://ayanemartins-medemaravilhosa.netlify.app/",

    },
    {
      id:4,
      nome: "Meu diário Reprograma" , 
      imagem: "https://media.giphy.com/media/POENdQwyeTpaznQ8xT/giphy.gif",
      descricao: "Criar uma página utilizando react",
      link:"https://primeiroprojetoreactayane.netlify.app/" ,
    }
  ]
  
  function Portfolio() {
    const [repos, setRepos] = useState([])
    const baseURL = 'https://api.github.com/users/ayamartins/repos'
  
    useEffect(()=> {
      axios
        .get(baseURL)
        .then((response) => setRepos(response.data))
    }, [])
  
    return(
     <>
      <Header 
        image={image} 
        description="ilustracao mulher com site"
      >
        Meus Projetos
      </Header>
  
      <div className="cartao-container">
        {
          list.map(projeto => {
            return(
              <div className="cartao" key={projeto.id}>
                <h1>{projeto.nome}</h1>
                <img src={projeto.imagem} alt={"gif do projeto "+ projeto.nome}/>
                <p>{projeto.descricao}</p>
                <a href={projeto.link} className="enter-repo" target="_blank">
                  <BsArrowReturnRight siz={16} color="#111"/>
                </a>
              </div>
            )
          })
        }
      </div>
      <h2 className="titulo">Outros Projetos no meu Github</h2>  
      <div className="card-container">
        {
          repos.map(repo => {
            return(
              <div className="card" key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} className="enter-repo" target="_blank">
                  <BsArrowReturnRight siz={16} color="#fff"/>
                </a>
              </div>
            )
          })
        }
      </div>
     </>
    )
   }
   
   export default Portfolio