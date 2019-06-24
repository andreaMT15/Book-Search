import React from 'react';
import { withRouter } from 'react-router-dom';
import Results from '../../Components/Results/Results';

const ResultsPage = props => {
  console.log(props.results);
  return <Results />;
};

export default withRouter(ResultsPage);
