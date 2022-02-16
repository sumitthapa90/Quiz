import React from "react";
import Header from "./Header";
import Category from "./Category";
import { BrowserRouter, Route } from "react-router-dom";
import Level from "./Level";
import QuizHome from "./QuizHome";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      level: null,
    };
  }

  handleAddCategory = (event, category) => {
    console.log("clicked");
    this.setState({ category: category });
  };

  handleDifficulty = (event, level) => {
    this.setState({
      level: level,
    });
  };

  render() {
    return (
      <>
        <Header />

        <BrowserRouter>
          <Route path="/" exact>
            <Category
              category={this.state.category}
              handleAddCategory={this.handleAddCategory}
            />

            <Level
              level={this.state.level}
              category={this.state.category}
              handleDifficulty={this.handleDifficulty}
            />
          </Route>

          <Route path="/quiz/:category/:level" component={QuizHome} />
        </BrowserRouter>
      </>
    );
  }
}

export default Dashboard;
