import React from 'react';
import Styles from './Relogio.module.scss';

interface Props {
  tempo: number | undefined;
}

function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

  return (
    <>
      <span className={Styles.relogioNumero}>{minutoDezena}</span>
      <span className={Styles.relogioNumero}>{minutoUnidade}</span>
      <span className={Styles.relogioDivisao}>:</span>
      <span className={Styles.relogioNumero}>{segundoDezena}</span>
      <span className={Styles.relogioNumero}>{segundoUnidade}</span>
    </>
  );
}

export default Relogio;
