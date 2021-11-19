import './app.css';
import './netflix.css';

import Logo from './assets/img/logo.png';
import MotivoOne from './assets/img/motivo-1.png';
import MotivoTwo from './assets/img/motivo-2.png';
import Button from './components/Button';
import Section from './components/Section';
import Card from './components/Card';
import MOTIVOS from './constants/motivos';

export default function App() {
  const Title = <h1>Titulo</h1>;
  const isLogin = true;
  const idioma = 'PT';

  return (  
  <div>
  <header>
    <div>
      <img src={Logo} alt="Logo" />
    </div>
    <div id="login">
      <select id="idioma">
        <option value="PT">Português</option>
        <option value="ING">Ingles</option>
      </select>
      <Button text="Entrar" variante="sucesso">
        TESTE CHILDREN
      </Button>
    </div>
  </header>
  <section id="banner">
    <h1>
      Filmes, séries e muito <br />
      mais. Sem limites.
    </h1>
    <h3>Assista onde quiser. Cancele quando quiser.</h3>
    <small
      >Pronto para assistir? Informe seu email para criar ou reiniciar sua
      assinatura.
    </small>
    <Card title="">
      <h1>Teste children</h1>
    </Card>
    <div>
      <input type="email" placeholder="Email" />
      <Button text="Vamos lá" variant="alerta"/>
    </div>
  </section>
  <hr className="divisor" />
  <Section
  title={MOTIVOS[idioma].ONE.TITLE}
  description={MOTIVOS[idioma].ONE.DESCRIPTION}
  image={MotivoOne}/>
   
  <hr className="divisor" />
  <Section
  title={MOTIVOS[idioma].ONE.TITLE}
  description={MOTIVOS[idioma].ONE.DESCRIPTION}
  image={MotivoTwo}
  alterna={true}/>
   
  <hr className="divisor" />
  <Section
  title={MOTIVOS[idioma].ONE.TITLE}
  description={MOTIVOS[idioma].ONE.DESCRIPTION}
  image={MotivoOne}/>
   
  <hr className="divisor" />
  <Section
  title={MOTIVOS[idioma].ONE.TITLE}
  description={MOTIVOS[idioma].ONE.DESCRIPTION}
  image={MotivoOne}/>
   
  <hr className="divisor" />

  <div>
    <h1>test</h1>
  </div>
</div>
  );
}

