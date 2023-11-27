import React from 'react';

const ParseTxtToHtml = ({ Txt }) => {
  const htmlContent = { __html: Txt };

  return <div dangerouslySetInnerHTML={htmlContent} />;
};

export default ParseTxtToHtml;