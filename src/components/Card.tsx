import { FC } from "react"

interface CardProps {
    width?: string
    height?: string
    color: string
}

const Card: FC<CardProps> = ({ width = "100", height, color }) => {
    return (
      <div style={{ width, height, color }}>
        <div>HELLO</div>
      </div>
    );
  };
  
export default Card;