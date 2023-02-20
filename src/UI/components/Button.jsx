export const Button = ({ dimension, typeButton, designButton }) => {
  
    return (
      <div className={dimension}>
        <input type={typeButton} className={designButton} />
      </div>
      
    );
  };