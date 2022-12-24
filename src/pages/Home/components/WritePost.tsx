import React, { useState } from "react";
import ProfileImage from "../../../assets/Profile_Image.png";

interface WritePostProps {}

export const WritePost: React.FC<WritePostProps> = ({}) => {
  //ideas -> takes in user to show user profile picture and maybe name
  // -> to autogrow textarea need js on change ig could use it for a character counter in bottom left!
  const [characterCount, setCharacterCount] = useState(0);
  const maxCharCount: number = 200;

  function inputFieldChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setCharacterCount(event.target.value.length);
    console.log(event.target.scrollHeight, event.target.clientHeight);
    event.target.style.height = "";
    event.target.style.height = event.target.scrollHeight + "px";
  }

  function post() {
    const value = (document.getElementById("newPostInputField") as HTMLTextAreaElement).value;
    console.log(value);
  }

  return (
  <div className="bg-darkTransparentHighlight rounded-xl flex flex-col mb-8 p-6">

    <div className="flex flex-row">
      <div className="w-16 h-16 rounded-full mr-6 min-w-[4rem]">
        <img src={ProfileImage} alt="Poster profile" />
      </div>

      <textarea 
      id="newPostInputField"
      className="bg-darkTransparentHighlight outline-none resize-none mb-8 rounded-md p-1 w-full"
      placeholder="What are you thinking about?"
      maxLength={maxCharCount}
      rows={1}
      onChange={(event) => {
        inputFieldChange(event);
      }}
      >
      </textarea>
    </div>
    
    <div className="flex justify-between items-end">
      <div className="text-gray">{ characterCount + " / " + maxCharCount + " characters"}</div>

      <button
      className="bg-green rounded-full py-2 px-4 mx-2 transition-all hover:bg-opacity-80 disabled:hover:bg-gray"
      disabled={characterCount === 0}
      onClick={(event) => {
        post();
      }}
      >
        Post
      </button>
    </div>

  </div>
  );
};
