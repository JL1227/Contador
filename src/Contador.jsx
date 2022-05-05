import { useState } from 'react'
import styles from './contador.module.css'

export default function Contador() {
  const [number, setNumber] = useState(0)

  function Incrementar() {
    setNumber(number + 1)
  }

  function Decrementar() {
    setNumber(number - 1)
  }

  return (
    <div className={styles.contador}>
      <h1>Contador em React</h1>
      <input type="number" value={number} disabled={true} />
      <div className={styles.buttons}>
        <button className={styles.increase} onClick={Incrementar}>
          Incrementar
        </button>
        <button className={styles.decrease} onClick={Decrementar}>
          Decrementar
        </button>
      </div>
    </div>
  )
}
