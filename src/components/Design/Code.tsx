import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const defaultCode = `function add(a, b) {
  return a + b;
}
`;

// https://www.npmjs.com/package/react-syntax-highlighter
const Code: React.FC = () => {
	const [code, setCode] = useState<string>(defaultCode);

	return (
		<SyntaxHighlighter language="javascript" style={docco}>
			{code}
		</SyntaxHighlighter>
	);
};

export default Code;
