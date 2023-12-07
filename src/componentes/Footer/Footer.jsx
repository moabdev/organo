import logo from '../../assets/imagens/logo.png';
import instagram from '../../assets/imagens/ig.png';
import facebook from '../../assets/imagens/fb.png';
import twitter from '../../assets/imagens/tw.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-end'>
            <section>
                <ul className='icons'>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src={facebook} alt='facebook' />
                    </a>
                  </li>
                  <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={twitter} alt='twitter' />
                    </a>
                  </li>
                  <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <img src={instagram} alt='instagram' />
                    </a>
                  </li>
              </ul>
            </section>
            <section>
              <img src={logo} alt='logo organo' />
            </section>
            <section>
              <p>Desenvolvido por Alura</p>
            </section>
    </footer>
  )
}

export default Footer