import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import TopNewsList from './components/topNewsList'
import TopNewsToolbar from './components/topNewsToolbar'
import { TOPNEWS } from './services/schemas';

const App = () => {
  const [section, setSection] = useState("science");
  const { data } = useQuery(TOPNEWS, { variables: { type: section } });

  const onChange = (e) => {
    setSection(e.target.value);
  }

  return (
    <div className="App">
      <TopNewsToolbar section={section} onChange={onChange}></TopNewsToolbar>
      {data && <TopNewsList articles={data?.topNews} />}
    </div>
  );
}

export default App;
