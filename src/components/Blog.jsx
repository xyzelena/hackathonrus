import { useState, useEffect } from 'react';
// import axios from 'axios';

import Article from './parts/Article';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const requestData = async () => {
  //     const data = await axios.get('http://94.198.218.227/articles/');
  //     console.log(data);
  //   };
  //   requestData();
  // }, []);

  useEffect(() => {
    fetch('http://94.198.218.227/articles/?size=20&page=1')
      .then((response) => response.json())
      .then(({data}) => setArticles(data.articles));
  }, []);

  return (
    <div className='container'>

      <Article articles={articles}/>
     
    </div>
  );

}

export default Blog;