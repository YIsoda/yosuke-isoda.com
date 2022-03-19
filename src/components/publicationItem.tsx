import * as React from "react";
import { SimpleUrlText } from "./simpleUrlText";

type AuthorType = "Me" | "Collesponding";
type AuthorName = string | { firstName: string, familyName: string };

type PublicationInfo = {
    publicationTitle: string;
    titleContent: React.ReactNode;
    authorsInEnglish: (AuthorName | { authorName: AuthorName, authorType: AuthorType })[];
    journalAbbreviation: string;
    volume: number | string;
    page: number | string;
    year: number;
    doi: string
};
const elem = <></>;
export const PublicationItem: React.VFC<PublicationInfo&{additionalInfo?:React.ReactNode}> = (props) =>
    <>
        <div style={{ fontWeight: "bold" }}>{props.titleContent}</div>
        <div>
            {
                props.authorsInEnglish.reduce((previousValue: JSX.Element, currentValue, currentIndex) => {
                    const previousElement = currentIndex === 0
                        ? <></>
                        : <>{previousValue}, </>;
                    return currentValue === "Yosuke Isoda"
                        ? <>{previousElement}<span style={{ textDecoration: "underline" }}>{currentValue}</span></>
                        : <>{previousElement}{currentValue}</>
                }, <></>)
            }
        </div>
        <div>
            <i>{props.journalAbbreviation}</i> <span style={{ fontWeight: "bold" }}>{props.volume}</span>, {props.page} ({props.year})
            &#x20;<SimpleUrlText urlString={doiUrl(props.doi)} />
        </div>{props.additionalInfo}
    </>;

const doiUrl: (doi: string) => string = (doi) => `https://doi.org/${doi}`
