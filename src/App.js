import "./styles.css";
import marked from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

marked.setOptions({
  breaks: true
});

const htmlString = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default function App() {
  const [markdown, setMarkDown] = useState(htmlString);

  const handleChange = (e) => {
    setMarkDown(e.target.value);
  };

  return (
    <div className="App row">
      <div
        className="col-6 border overflow-auto"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>

      <div className="col-6 border overflow-auto">
        <h1>MarkDown Editor</h1>
        <textarea
          rows="50"
          cols="75"
          value={markdown}
          onChange={(e) => {
            handleChange(e);
          }}
        ></textarea>
      </div>
    </div>
  );
}
