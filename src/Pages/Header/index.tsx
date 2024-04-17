import styles from "./styles.module.scss";
import logoNeltec from "../../Assets/logoEmpresa2.jpeg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-md-3">
          <img
            src={logoNeltec}
            alt="Neltec Entulhos"
            className={styles.logoImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
