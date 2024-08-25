import styles from './Input.module.css';
function Input({inputVal}){
    return(<>
        <input type="text" className={styles.input} value={inputVal}/>
    </>
    )
}
export default Input;