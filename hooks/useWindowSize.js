import { useState, useEffect } from "react";

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState(null);

	const setDimension = () => {
		setWindowSize({
			width: window.innerWidth,
			hegiht: window.innerHeight,
		});
	};

	useEffect(() => {
		if (!windowSize) {
			setWindowSize({
				width: window.innerWidth,
				hegiht: window.innerHeight,
			});
		}

		window.addEventListener("resize", setDimension);

		return () => {
			window.removeEventListener("resize", setDimension);
		};
	}, [windowSize]);

	return windowSize;
};

export default useWindowSize;
