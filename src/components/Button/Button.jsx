import { CardButton } from "./Button.styled";

export const Button = ({onClick, isFollowing}) =>{

    function changeColor(isFollowing) {
        if (!isFollowing) {
           return `#5CD3A8`  
        } else {return `#EBD8FF`}
        // isFollowing? `#5CD3A8`
        //   : `#5CD3A8` ;
      }
   return(
    <CardButton type="button" onClick={onClick}
    style={{ backgroundColor: changeColor() }} >Follow</CardButton>
   ) 
}