import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";

// This is the reference to the HTTP calls with Axios
import API from "../../utils/API";

// You need to import this to use it and avoid performing HTTP reloads
import { Link } from "react-router-dom";

// Custom components:
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

// You need to extend the React Component in order to have state..
class Books extends Component {

  // This is the `state`: just data that belongs to this component.
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // When the component is mounted/loaded... This is a life cycle hook..
  // This is a very common one, but there are many more..
  componentDidMount() {
    // Call this method when this component loads..
    this.loadBooks();
  }

  // This method is called when the component is loaded...
  loadBooks = () => {
    // This is a function that is defined in the `utils` directory..
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book when the event listener 
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Event listener for handling input change...
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

   
  // Event listener for submitting the form..
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              { 
                // A nested component... with props
              }
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              { 
                // A nested component... with props
              }
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              { 
                // A nested component... with props
              }
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              { 
                // A nested component... with props
              }
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            { 
              // This is a ternary operator to show the list if
              // books exists.. otherwise.. it will display line 133..
            }

            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    { 
                      // Uses Link to use the React router... 
                      // It will not perform an HTTP request...
                    }
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    { 
                      // Event listener to delete book...
                    }
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
