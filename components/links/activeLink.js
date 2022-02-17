import React, { useRef, Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, activeClassName, ...props }) => {
	const { asPath } = useRouter();
	const child = Children.only(children);
	const childClassName = child.props.className || "";

	const className =
		asPath === props.href || asPath === props.as
			? `${childClassName} ${activeClassName}`.trim()
			: childClassName;

	return (
		<Link {...props}>
			{React.cloneElement(child, {
				className: className || null,
			})}
		</Link>
	);
};

export default ActiveLink;
