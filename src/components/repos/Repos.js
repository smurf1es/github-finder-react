import React, { useContext } from 'react';
import ReposItem from './ReposItem';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
  const githubContext = useContext(GithubContext);
  return githubContext.repos.map((repo) => (
    <ReposItem repo={repo} key={repo.id} />
  ));
};

export default Repos;
