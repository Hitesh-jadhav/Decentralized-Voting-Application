const Connected = (props) => {
  return (
    <div className="connected-container">
      <h1 className="connected-header">You are connected to Metamask</h1>
      <br></br>
      <div className="account-info">
        <p><strong>Metamask Account:</strong> {props.account}</p>
        <p><strong>Remaining Time:</strong> {props.remainingTime} seconds</p>
      </div>
      <br></br>
      {props.showButton ? (
        <div className="voted-message">
          <p>You have already voted</p>
        </div>
      ) : (
        <div className="voting-section">
          <input
            type="number"
            placeholder="Enter Candidate Index"
            value={props.number}
            onChange={props.handleNumberChanged}
            className="input-candidate"
          />
          <button className="vote-button" onClick={props.voteFunction}>
            Vote
          </button>
        </div>
      )}
      <br></br>
      <h2 className="candidates-title">Candidates</h2>
      <table id="myTable" className="candidates-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Candidate Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.index}</td>
              <td>{candidate.name}</td>
              <td>{candidate.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Connected;
