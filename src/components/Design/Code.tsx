import React, { useState } from "react";
import { ControlledEditor } from "@monaco-editor/react";

//https://www.npmjs.com/package/@monaco-editor/react
const Code: React.FC = () => {
	const defaultCode = `.box {
	box-shadow: 10px;
}`;
	const [code, setCode] = useState<string>(defaultCode);

	const options = {
		selectOnLineNumbers: true,
	};

	const handleChange = (_: any, value: string | undefined) => {
		setCode(value || "");
	};

	return (
		<ControlledEditor
			value={code}
			onChange={handleChange}
			theme="dark"
			language="css"
			height="300px"
			options={options}
		/>
	);
};

export default Code;
