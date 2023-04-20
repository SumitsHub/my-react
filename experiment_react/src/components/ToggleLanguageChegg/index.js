import React from "react";
import ReactDOM from "react-dom";

const languages = ["JavaScript", "Python"];

const Context = React.createContext(languages[0]);
class App extends React.Component {
  render() {
    return (
      <Context.Provider value={languages}>
        <MainSection />
      </Context.Provider>
    );
  }
}

class MainSection extends React.Component {
  // setting context name we want to use(the one which we created above)
  static contextType = Context;

  constructor(props) {
    super(props);
    // initialize state for favorite language inside constructor
    this.state = {
      language: "",
    };
  }

  componentDidMount() {
    // get context and set langauge to first langauge
    const context = this.context;
    this.setState({ language: context[0] });
  }

  // create function to toggle the language state value
  changeLanguage = () => {
    // check if first langauge is current state value
    if (this.state.language === this.context[0]) {
      // set language state to 2nd value
      this.setState({ language: this.context[1] });
    } else {
      // else set langauge to 1st one
      this.setState({ language: this.context[0] });
    }
  };
  render() {
    return (
      <div>
        <p id="favoriteLanguage">
          Favorite programming language: {this.state.language}
        </p>
        <button id="changeFavorite" onClick={this.changeLanguage}>
          Toggle Language
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));