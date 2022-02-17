import { useState, useEffect } from "react";

const useMobileLayout = (windowSize, breakpoint) => {
	const [isMobileLayout, setIsMobileLayout] = useState(false)

	useEffect(() => {
		if (windowSize && windowSize.width <= breakpoint) {
			setIsMobileLayout(true)
		} else {
			setIsMobileLayout(false)
		}
	}, [windowSize]);

	return isMobileLayout;
};

export default useMobileLayout;
