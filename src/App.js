import React, { useState, useEffect } from 'react';

// Import Components
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  // State
  const [name] = useState("Jed");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    console.log('we run')
  }, [tweets]);
  
  return (
    <div className="App">
      <CreateTweet 
        textInput={textInput} 
        setTextInput={setTextInput} 
        tweets={tweets} 
        setTweets={setTweets}
      />
      <TweetList 
        name={name} 
        tweets={tweets}
        setTweets={setTweets}
      />
    </div>
  );
}

export default App;
