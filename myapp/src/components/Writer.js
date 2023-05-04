import React from "react";

class Writer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        enlistedBooks: []
      };
    }
  
    handleRemoveFromWriter(bookId) {
      const updatedEnlistedBooks = this.state.enlistedBooks.filter(book => book.id !== bookId);
      this.setState({ enlistedBooks: updatedEnlistedBooks });
    }
  
  
    render() {
      return (
        <div className="writer">
          {this.state.enlistedBooks.map(book => (
            <div key={book.id} className="enlisted-book">
              <img src={book.imageUrl} alt={book.name} />
              <h2>{book.name}</h2>
              <button onClick={() => this.handleRemoveFromWriter(book.id)}>Release</button>
              <button onClick={() => this.handleDischarge(book.id)}>X</button>
            </div>
          ))}
        </div>
         );
        }
      }

   export default Writer