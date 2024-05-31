import { calculateInvestmentResults, formatter } from "../util/investment.js";

const Results = ({ input }) => {
  const results = [];
  const reasultsData = calculateInvestmentResults(input, results);
  if (results.length === 0) {
    return <p className="center">Invalid Data Provide</p>;
  }
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invesment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Interest Capital</th>
        </tr>
      </thead>
      <tbody>
        {reasultsData.map((yarData) => {
          const totalnterest =
            yarData.valueEndOfYear -
            yarData.annualInvestment * yarData.year -
            initialInvestment;
          return (
            <tr key={yarData.year}>
              <td>{yarData.year}</td>
              <td> {formatter.format(yarData.valueEndOfYear)} </td>
              <td> {formatter.format(yarData.interest)} </td>
              <td> {yarData.annualInvestment} </td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
