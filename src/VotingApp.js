import React from "react";

const VotingApp = () => {
  // 1.Build a simple voting system where each option has its own vote count stored using useState. Increment the vote count when an option is clicked.
  const [option1Votes, setOption1Votes] = React.useState(0);
  const [option2Votes, setOption2Votes] = React.useState(0);
  const [option3Votes, setOption3Votes] = React.useState(0);

  return (
    <div>
      <h1>Voting App</h1>
      <span className="ms-5 me-4">{option1Votes}</span>
      <span className="ms-5 me-5">{option2Votes}</span>
      <span className="ms-5 ">{option3Votes}</span>
      <br />
      <button
        onClick={() => setOption1Votes(option1Votes + 1)}
        className="ms-4 me-4 btn btn-success "
      >
        BJP
      </button>

      <button
        onClick={() => setOption2Votes(option2Votes + 1)}
        className="ms-2 btn btn-primary"
      >
        Congress
      </button>

      <button
        onClick={() => setOption3Votes(option3Votes + 1)}
        className="ms-2 btn btn-warning"
      >
        JDS
      </button>
    </div>
  );
};

export default VotingApp;
