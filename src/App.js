import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import SlideNav from './SlideNav';
import Main from './Main';
import PieChart from './PieChart';
import Footer from './Footer';
import './css/main.css';
import {drinkData} from './drinkData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickText: ''
    }
  }

  // クリックした要素を取得
  getText(e) {
    const event = e.target,
           text = event.innerHTML;
    this.setState({
      clickText: text
    });
    return text;
  }

  render() {
  // 配列のコピーを作成
  const copy = Array.from(drinkData);
  
  return (
      <div>
        <Header />
        <SlideNav 
          data={drinkData}
          text={(e) => this.getText(e)}
        />
        <Switch>
            <Route exact path="/"　render={() => <Main data={copy} />} />
            <Route exact path="/data" render={() => <PieChart data={drinkData} clickText={this.state.clickText} />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
