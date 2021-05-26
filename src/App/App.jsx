import React from 'react'
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';


class App extends React.Component {

  state = {
    headerText: "Name It!",
  };


  render() {
    return (
      <div>
        <Header headTitle={this.state.headerText} />
        <SearchBox />

      </div>
    )
  }
}


/*function App() {
  return (<h1>This is functional component!</h1>);
};
*/
export default App;