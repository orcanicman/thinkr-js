import React from "react";

interface WritePostProps {}

export const WritePost: React.FC<WritePostProps> = ({}) => {
  //ideas -> takes in user to show user profile picture and maybe name
  // -> to autogrow textarea need js on change ig could use it for a character counter in bottom left!

  return (
  <div className="bg-darkHighlight rounded-xl flex flex-col">
    <div className="flex flex-roW">
      <div className="bg-gray w-12 h-12 m-2 rounded-full">
      </div>

      <textarea 
      className="m-4 bg-darkHighlight outline-none resize-none"
      placeholder="Whats going on?"
      minLength={1}
      maxLength={200}>
      </textarea>
    </div>
    
    <div className="flex justify-end">
      <button className="bg-green rounded-2xl py-1 px-4 m-2">Post</button>
    ...</div>
  </div>
  );
};
