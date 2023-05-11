
function Book(props) {
    const { name, description, imageUrl } = props.book;
  
    function handleClick() {
      props.onAddToArmy(props.book);
    }
  
    return (
      <div className="book" onClick={handleClick}>
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }

  export default Book