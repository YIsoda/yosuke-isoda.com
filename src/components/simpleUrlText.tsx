import * as React from "react";
import { simpleUrlText } from "./simpleUrlText.module.css";

export const SimpleUrlText: React.FC<{ urlString: string }> = (props) => {
	return <a className={simpleUrlText} href={props.urlString}>{props.urlString}</a>;
}