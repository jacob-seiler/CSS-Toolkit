import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// https://www.npmjs.com/package/react-zoom-pan-pinch
const Display: React.FC = () => {
	return (
		<TransformWrapper defaultScale={1} defaultPositionX={200} defaultPositionY={100}>
			{({ zoomIn, zoomOut, resetTransform, ...rest }: any) => (
				<>
					<div className="tools">
						<button onClick={zoomIn}>+</button>
						<button onClick={zoomOut}>-</button>
						<button onClick={resetTransform}>x</button>
					</div>
					<TransformComponent>
						<div>Display</div>
					</TransformComponent>
				</>
			)}
		</TransformWrapper>
	);
};

export default Display;
