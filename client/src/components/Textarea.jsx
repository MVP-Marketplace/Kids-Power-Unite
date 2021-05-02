import React, { useState, useCallback } from "react";

const Textarea = () => {
  const LimitedTextarea = ({ rows, cols, value, limit }) => {
    const [content, seContent] = useState(value.slice(0, limit));

    // const setFormattedContent = useCallback(
    //   (text) => {
    //     setContent(text.slice(0, limit));
    //   },
    //   [limit, setContent]
    // );
  };

  return;
  <>{/* <textarea>rows={rows}</textarea> */}</>;
};

export default Textarea;
