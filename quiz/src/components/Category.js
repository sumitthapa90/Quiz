import React from "react";

class Caterory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((categories) => {
        console.log(categories.trivia_categories);
        this.setState({ categories: categories.trivia_categories });
      });
  }

  render() {
    return (
      <>
        {this.state.categories ? (
          <section>
            <h2>Select Category</h2>
            <div className="cate-box">
              {this.state.categories.map((category) => {
                return (
                  <button
                    onClick={(event) =>
                      this.props.handleAddCategory(event, category)
                    }
                    className={
                      this.props.category === category ? "green" : "red"
                    }
                    key={category.id}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </section>
        ) : (
          ""
        )}
      </>
    );
  }
}
export default Caterory;
