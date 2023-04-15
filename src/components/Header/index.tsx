import { AiOutlinePlusCircle } from 'react-icons/ai'

import todoLogo from '../../assets/todoLogo.svg'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo do app" />

      <form className={styles.newTaskForm}>
        <input placeholder="Adicione uma nova tarefa" />

        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
