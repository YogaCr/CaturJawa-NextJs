import styles from './Field.module.css'
export default function Field({pion,handleClick,willSelect}){
    return <div className={`${styles.field} ${willSelect?styles.fieldCanSelect:''}`} onClick={handleClick}>
        <h1 className={styles.content}>{pion}</h1>
    </div>
}