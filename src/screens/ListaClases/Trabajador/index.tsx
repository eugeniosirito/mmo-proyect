import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import trabajador from '../../LogIn/assets/trabajador.jpg';

import styles from './styles.module.scss';

function Trabajador() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.asesinoContenido}>
          <h1 className={styles.tituloAsesino}>Trabajador</h1>
          <p className={styles.parrafo1}>
            {' '}
            Los trabajadores son fieles servidores capaces de elaborar artesanías con un poder extraordinario,
            son dedicados exclusivamente a la extracción de materia prima y creación de objetos de gran valor.
            Son expertos en actividades tales como la pesca, minería, tala, herrería y carpintería. No conocen
            la hechicería y son torpes en el uso de armas, por lo que harán un daño menor que una clase
            experta.
          </p>
          <img className={styles.img} src={trabajador} alt="" />
        </div>
        <div className={styles.tablaModificadores}>
          <h1 className={styles.modificadoresH1}>Modificadores de clase</h1>
          <div className={styles.tabla}>
            <table>
              <tr>
                <th colSpan={2}>Acierto</th>
                <th colSpan={2}>Proyectiles</th>
                <th colSpan={2}>Sin armas</th>
                <th colSpan={3}>Defensa</th>
              </tr>
              <tr>
                <td>Acierto</td>
                <td>Daño</td>
                <td>Acierto</td>
                <td>Daño</td>
                <td>Acierto</td>
                <td>Daño</td>
                <td>Evasión</td>
                <td>Escudo</td>
                <td>Defensa mágica</td>
              </tr>
              <tr>
                <td>0.8</td>
                <td>0.67</td>
                <td>0.7</td>
                <td>0.7</td>
                <td>0.5</td>
                <td>0.4</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>2%</td>
              </tr>
            </table>
          </div>
          <h1 className={styles.modificadoresH1}>Puntos ganados por nivel</h1>
          <div className={styles.tablaAtributos}>
            <table>
              <tr>
                <th>Punto\Raza</th>
                <th>Gnomo</th>
                <th>Elfo</th>
                <th>Elfo Oscuro</th>
                <th>Humano</th>
                <th>Enano</th>
                <th>Orco</th>
              </tr>
              <tr>
                <td>Vida</td>
                <td>6 a 7</td>
                <td>8 a 10</td>
                <td>9 a 10</td>
                <td>9 a 11</td>
                <td>9 a 11</td>
                <td>10 a 11</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Golpe</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Stamina</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
              </tr>
            </table>
            <div className={styles.parrafoContainer}>
              <p className={styles.parrafo1}>
                Aclaración: Los puntos de maná y vida representan los valores con los máximos dados (20). Cada
                personaje varia mucho segun su raza
              </p>
            </div>
            <div className={styles.parrafoContainer}>
              <h1 className={styles.modificadoresH1}>Tipos de Trabajos</h1>
              <p className={styles.parrafo1}>
                Los trabajos que se pueden realizar son: Pesca, Tala, Botanica, Alquimia, Herreria, Mineria,
                Esquilación, Sastreria y Carpintería.
              </p>
            </div>
          </div>
        </div>
        <Link to="/manual/clases">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Trabajador;
