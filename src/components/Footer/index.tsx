import styles from "../../styles/footer.module.scss";
import {
  ifood,
  alelo,
  facebook,
  amex,
  dinners,
  elo,
  visa,
  instagram,
  mastercard,
  pix,
  sodexo,
  ticket,
  youtube,
} from "../../assets/icons/index";
import { Button } from "../index";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <p>Sobre nós</p>
          <ul>
            <li>CONHEÇA</li>
            <li>COMO COMPRAR</li>
            <li>INDICAÇÃO E DESCONTO</li>
          </ul>
          <span>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
          </span>
        </div>
        <div>
          <p>INFORMAÇÕES ÚTEIS</p>
          <ul>
            <li>FALE CONOSCO</li>
            <li>DÚVIDAS</li>
            <li>PRAZOS DE ENTREGA</li>
            <li>FORMAS DE PAGAMENTO</li>
            <li>POLÍTICA DE PRIVACIDADE</li>
            <li>TROCAS E DEVOLUÇÕES</li>
          </ul>
        </div>
        <div>
          <p>FORMAS DE PAGAMENTO</p>
          <span>
            <img src={visa} alt="" />
            <img src={elo} alt="" />
            <img src={alelo} alt="" />
            <img src={dinners} alt="" />
            <img src={ifood} alt="" />
            <img src={mastercard} alt="" />
            <img src={pix} alt="" />
            <img src={amex} alt="" />
            <img src={ticket} alt="" />
            <img src={sodexo} alt="" />
          </span>
        </div>
        <div>
          <div>
            <h1>CADASTRE-SE E RECEBA NOSSAS</h1>
            <h2>NOVIDADES E PROMOÇÕES</h2>
          </div>
          <p>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <div>
            <input type="text" placeholder="SEU E-MAIL" />
            <Button heigth={45} width={62} style={{ color: "#fff" }}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
}
