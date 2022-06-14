import React, { useState } from 'react';
import Botao from '../Botao';
import styles from './Formulario.module.scss';
import { Itarefa } from './../../types/Itarefa';
import { v4 as uuidv4 } from 'uuid';

function Formulario({
  setTarefas,
}: {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}) {
  const [tarefa, setTarefa] = useState('');
  const [tempo, setTempo] = useState('00:00');

  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa('');
    setTempo('00:00');
  }

  return (
    <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Tarefa</label>
        <input
          id="tarefa"
          name="tarefa"
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="O que estudar?"
          required
          type="text"
          value={tarefa}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          id="tempo"
          max="23:30:00"
          min="00:00:00"
          name="tempo"
          onChange={(e) => setTempo(e.target.value)}
          required
          step="1"
          type="time"
          value={tempo}
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

export default Formulario;
