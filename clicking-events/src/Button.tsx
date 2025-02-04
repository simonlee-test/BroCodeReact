import { MouseEvent} from "react";

interface Props {
  onClick: () => void;
  onDoubleClick: (e: MouseEvent) => void;
}


const Button = ({onClick, onDoubleClick}: Props) => {
  return (
    <button onClick={()=>onClick()} onDoubleClick={(e) => onDoubleClick(e)}>Click me</button>
  )
}

export default Button