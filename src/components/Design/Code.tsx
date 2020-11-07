import React, { useState } from "react";
import Editor from "react-simple-code-editor";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

const defaultCode = `function add(a, b) {
  return a + b;
}
`;

// https://www.npmjs.com/package/react-simple-code-editor
const Code: React.FC = () => {
	const [code, setCode] = useState<string>(defaultCode);

	return (
		<Editor
			value={code}
			onValueChange={(code: string) => setCode(code)}
			highlight={(code: string) => highlight(code, languages.js)}
			padding={10}
			style={{
				fontFamily: '"Fira code", "Fira Mono", monospace',
				fontSize: 12,
			}}
		/>
	);
};

export default Code;
