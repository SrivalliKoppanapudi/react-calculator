import Button from "./Button";
import styles from './BtnCont.module.css';
function BtnCont({calHandle}){
    return <div className={styles.cont}>
        <Button calHandle={calHandle}/>
    </div>
}
export default BtnCont;