import Header from '../../components/Header/Header'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import Image from '../../assets/fotocontato.svg'
import Footer from '../../components/Footer/Footer'

import './Contato.css'

function Contato() {
    return(
        <>
            <Header 
                image={Image} 
                description={"ilustração de mulher com projeto"}
                >
                Meus Contatos
            </Header>

            <section className='card-contato'>
                <div className='contato'>
                    <p>Instagram</p>
                    <a href= "https://www.instagram.com/ayamartins/" className="enter-repo" target="_blank">
                        <BsInstagram size={45} color="#111"/>
                    </a>
                </div>
                <div className='contato'>
                    <p>Linkedin</p>
                    <a href="https://www.linkedin.com/in/ayane-martins-487937198/" className="enter-repo" target="_blank">
                        <BsLinkedin size={45} color="#111"/>
                    </a>

                </div>
                <div className='contato'>
                    <p>GitGub</p>
                    <a href="https://github.com/ayamartins" className="enter-repo" target="_blank">
                        <BsGithub size={45} color="#111"/>
                    </a>

                </div >

            </section>

            <footer>
                <Footer> Página desenvolvida por Ayane Martins | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Contato