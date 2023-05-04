import React from "react";

class Genre extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        books: []
      };
    }

    render() {
      return (
        <div className="genre">
          {this.state.books.map(book => (
            <book key={book.id} book={book} onAddToArmy={this.props.onAddToArmy} />
          ))}
        </div>
      );
    }
  }

  export default Genre
