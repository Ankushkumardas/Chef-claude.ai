import React from 'react';
import ReactMarkdown from 'react-markdown'
function Recipe({recipeshown}) {
  return (<>
    <section className="max-w-2xl p-8 bg-white rounded-lg ">
      <ReactMarkdown>{recipeshown}</ReactMarkdown>
    </section>
  </>
  );
}

export default Recipe;
