import React, { useState, useCallback } from "react";

const LimitedTextarea = ({ rows, cols, value, limit }) => {
  const [content, setContent] = useState(value.slice(0, limit));
  const setFormattedContent = useCallback(
    (text) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  return (
    <>
      <textarea
        rows={rows}
        cols={cols}
        onChange={(event) => setFormattedContent(event.target.value)}
        value={content}
      />
      <p>
        {content.length}/{limit}
      </p>
    </>
  );
};

export default LimitedTextarea;
