import React, { useEffect, useState } from 'react';
import Botao from '../Botao';
import Relogio from './Relogio';
import Styles from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { Itarefa } from '../../types/Itarefa';

interface Props {
  selecionado: Itarefa | undefined;
  finalizarTarefa: () => void;
}

function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={Styles.cronometro}>
      <p className={Styles.titulo}>Escolha um card e inicie o cronômetro!</p>
      <div className={Styles.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
    </div>
  );
}

export default Cronometro;
