import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./test.scss";

// https://www.npmjs.com/package/react-zoom-pan-pinch
const Display: React.FC = () => {
	const options = {
		limitToWrapper: true,
		centerContent: true,
	};

	return (
		<TransformWrapper
			defaultScale={1}
			defaultPositionX={0}
			defaultPositionY={0}
			options={options}
		>
			{({ zoomIn, zoomOut, resetTransform, ...rest }: any) => (
				<>
					<div className="tools">
						<button onClick={zoomIn}>+</button>
						<button onClick={zoomOut}>-</button>
						<button onClick={resetTransform}>x</button>
					</div>
					<TransformComponent>
						<div style={{ height: "300px", backgroundColor: "red" }}>Display</div>
					</TransformComponent>
				</>
			)}
		</TransformWrapper>
	);
};

export default Display;
