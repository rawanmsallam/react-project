import './Button.css';


const STYLES =['btn-primary', 'btn-outline']
const SIZE =['btn-medium', 'btn-large', 'btn-mobile','btn-wide']
const COLOR =['primary','blue','red','green']
export const Button =({
    children ,
    type ,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
})=>{
    const checkbuttonStyle =STYLES.includes(buttonStyle) ? buttonStyle:STYLES[0];
    const checkbuttonSize =SIZE.includes(buttonSize) ? buttonSize:SIZE[0];
    const checkbuttonColor =COLOR.includes(buttonColor) ? buttonColor:null;
    return(
    <button className={`btn ${checkbuttonStyle} ${checkbuttonSize} ${checkbuttonColor}`} onClick={onClick}
     type={type}> {children} </button>
    )
}