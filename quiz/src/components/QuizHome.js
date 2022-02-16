import React from "react";
import Quiz from "./Quiz";

class QuizHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      answers: [],
      isSubmit: false,
    };
  }
  componentDidMount() {
    var category = this.props.match.params.category;
    var level = this.props.match.params.level;

    console.log(category, level);
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}10&difficulty=${level}`
    )
      .then((res) => res.json())
      .then((questions) => {
        this.setState({
          questions: questions.results,
        });
      });
  }

  render() {
    return (
      <>
        <Quiz questions={this.state.questions} />
      </>
    );
  }
}

export default QuizHome;
