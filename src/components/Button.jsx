import styles from './Button.module.css'
function Button({calHandle}){
    let b=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    let x=1;
    return(
        b.map((item)=>(
            <button key="item" className={styles["btn"]}
                onClick={()=>calHandle(item)}
            >{item}</button>
        ))
    )
}
export default Button;//if you want to use js in html wrap js in {}