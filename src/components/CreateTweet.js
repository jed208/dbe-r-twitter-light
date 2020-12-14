import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({textInput, setTextInput, tweets, setTweets}) => {
  // Functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault(); // prevents page from refreshing
    setTweets([...tweets, { id: uuidv4(), message: textInput }]);
    setTextInput("");
  };
  // const handleKeypress = e => {
  //   if (e.keyCode === 13) {
  //     submitTweetHandler();
  //   }
  // };
  return (
    <form 
      onSubmit={submitTweetHandler}
      // onKeyPress={handleKeypress}
    >
      <textarea 
        value={textInput}
        onChange={userInputHandler}
        cols="50" 
        rows="5"
      ></textarea>
      <br /><br />
      <button>Submit</button>
    </form>
  );
}

export default CreateTweet;