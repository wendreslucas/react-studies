import { Itarefa } from '../../../types/Itarefa';
import styles from './Item.module.scss';

interface Props extends Itarefa {
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''} ${
        completado ? styles.itemCompletado : ''
      }`}
      onClick={() =>
        !completado &&
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className={styles.concluido} aria-label="tarefa concluida"></span>
      )}
    </li>
  );
}
