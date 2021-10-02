import { useState } from 'react'
import List from "./components/List";
import Search from "./components/Search";
import styles from "./App.module.css";

const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleOnSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={styles.container}>
      <Search onSearch={handleOnSearch}/>
      <h1>Searching for: {searchTerm} </h1>
      <List Stories={filteredStories} />
    </div>
  );
}
export default App;

