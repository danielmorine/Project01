import React from 'react';
import Nav from '../components/nav'
import CafeOne from '../img/cafe-1.jpg'
import CafeTwo from '../img/cafe-2.jpg'
import Botafogo from '../img/botafogo.jpg'
import Iguatemi from '../img/iguatemi.jpg'
import Mineirao from '../img/mineirao.jpg'


const HomePage = () => (
<div>
    <Nav/>
    <main>
        <h1>Cafés com a <br></br>cara do Brasil</h1>
        <p>Direto das fazendas de Minas Gerais</p>
    </main>

    <section>
        <h2>Uma Mistura de</h2>
        <div>
            <div>
                <img src={CafeOne} />
                <h3>amor</h3>
            </div>
            <div>
                <img src={CafeTwo}/>
                <h3>perfeição</h3>
            </div>
        </div>
        <p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalm aente quente, mas também pode ser consumido gelado. Ele é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.</p>
    </section>

    <section>
        <div>
            <div>
                <h2>Paulista</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>                
            </div>
            <div>
                <h2>Carioca</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>
            </div>
            <div>
                <h3>Mineiro</h3>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>
            </div>
        </div>
        <a href="#">Saiba Mais</a>
    </section>
    
    <section>
        <div>
            <img src={Botafogo} alt='Botafogo'/>
            <div>
                <h2>Botafogo</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
                <a href="#">Ver Mapa</a>
            </div>
        </div>
        <div>
            <img src={Iguatemi} alt="Iguatemi"/>
            <div>
                <h2>Iguatemi</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
                <a href="#">Ver Mapa</a>                
            </div>
        </div>
        <div>
            <img src={Mineirao} alt='Mineirão'/>
            <div>
                <h2>Mineirão</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
            </div>
            <a href='#'>Ver Mapa</a>
        </div>
    </section>

    <section>
        <div>
            <div>
                <h2>Assine Nossa Newsletter</h2>
                <p>promoções e eventos mensais</p>
            </div>
            <form>
                <label>E-mail </label>
                    <input placeholder="Digite seu email"/>
                    <button type="submit"> Enviar</button>
                
            </form>
        </div>
    </section>

    <footer>
        <div>
            <p>Este é um projeto da Origamid. Mais em origamid.com<br></br>
            Praia de Botafogo, 300, 5º andar - Botafogo - Rio de Janeiro
            </p>            
        </div>
    </footer>
</div>
)

export default HomePage;