import Item from './Item';
import styles from './Lista.module.scss';
import { Itarefa } from './../../types/Itarefa';

interface Props {
  tarefas: Itarefa[];
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Tarefas do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item key={item.id} selecionaTarefa={selecionaTarefa} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
