import React, { useState } from 'react'
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';


const name = require('@rstacruz/startup-name-generator');


const App = () => {

  const [headerText, setHeaderText] = useState('Name It!');
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestedNames(inputText ? name(inputText) : []);
  }


  return (
    <div>
      <Header headerExpand={headerExpanded} headTitle={headerText} />
      <SearchBox onInputChange={handleInputChange} />
      <ResultsContainer suggestedNames={suggestedNames} />

    </div>
  );

}

/*class App extends React.Component {

  state = {
    headerText: "Name It!",
    headerExpanded: true,
    suggestedNames: [],
  };



  handleInputChange = (inputText) => {
    this.setState(
      {
        headerExpanded: !inputText,
        suggestedNames: inputText ? name(inputText) : [],
      });
  }

  render() {
    return (
      <div>
        <Header headerExpand={this.state.headerExpanded} headTitle={this.state.headerText} />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />

      </div>
    )
  }
}


function App() {
  return (<h1>This is functional component!</h1>);
};
*/
export default App;