const UserInput = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.InitialInvestment}
            onChange={(event) =>
              onChange("InitialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.AnnualInvestment}
            onChange={(event) =>
              onChange("AnnualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.ExpectedReturn}
            onChange={(event) => onChange("ExpectedReturn", event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="">Duaration</label>
          <input
            type="number"
            required
            value={userInput.Duaration}
            onChange={(event) => onChange("Duaration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
