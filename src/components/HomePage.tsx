import * as React from "react";
import { Link } from "react-router-dom";

class AppRoot extends React.Component<{}> {
  constructor(p: {}) {
    super(p);
  }

  render() {
    return (
      <div>
        <h2>Welcome to the QUIZ</h2>
        <ul>
          <li>
            <button>
              <Link to="/QuestionList">Go to quiz</Link>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default AppRoot;
