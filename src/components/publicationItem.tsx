import * as React from "react";
import { SimpleUrlText } from "./simpleUrlText";

type AuthorType = "Me" | "Collesponding";
type AuthorName = string | { firstName: string, familyName: string };

type PublicationInfo = {
    titleContent: React.ReactNode;
    authorsInEnglish: (AuthorName | { authorName: AuthorName, authorType: AuthorType })[];
    journalAbbreviation: string;
    volume: number | string;
    page: number | string;
    year: number | string;
    doi: string
};

export const PublicationItem: React.FC<PublicationInfo & { additionalInfo?: React.ReactNode }> = (props) =>
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
            <i>{props.journalAbbreviation}</i> <span style={{ fontWeight: "bold" }}>{props.volume}</span>{props.page == "" ? "" : ", "}{props.page} {props.year == "" ? "" : "(" + props.year + ")"}
        </div>
        <div>
            <SimpleUrlText urlString={doiUrl(props.doi)} />
        </div>
        {props.additionalInfo}
    </>;

const doiUrl: (doi: string) => string = (doi) => `https://doi.org/${doi}`

import { PresentationInfo } from "../../content/publications/presentationInfo";

const toLocaleAuthorName = (name: { family: string, given: string }, lang?: "en" | "ja"): string =>
    (typeof name == "string") ? name : lang == "ja" ? `${name.family} ${name.given}` : `${name.given} ${name.family}`;


export const PresentationItem: React.FC<PresentationInfo & { urlType: UrlType } & { dateRange?: [Date, Date] } & { additionalInfo?: React.ReactNode } & { lang?: "en" | "ja" }> = (props) => {
    const delimiter = props.lang === "ja" ? "，" : ", ";
    return <>
        {props.additionalInfo}
        <span dangerouslySetInnerHTML={{ __html: props.titleContent }} style={{ fontWeight: "bold" }}></span>
        <div>
            {
                props.author.reduce((previousValue: JSX.Element, currentValue, currentIndex) => {
                    const previousElement = currentIndex === 0
                        ? <></>
                        : <>{previousValue}{delimiter}</>;
                    return (currentValue.family === "Isoda" && currentValue.given === "Yosuke") || (currentValue.family === "磯田" && currentValue.given === "洋介")
                        ? <>{previousElement}<span style={{ textDecoration: "underline" }}>{toLocaleAuthorName(currentValue, props.lang)}</span></>
                        : <>{previousElement}{toLocaleAuthorName(currentValue, props.lang)}</>
                }, <></>)
            }
        </div>
        <div>
            {props.urlType == "topPageOnly" ? <a href={props.url}>{props.eventTitle}</a> : props.eventTitle}{delimiter}{typeof props.dateRange !== "undefined"
                ? <>{props.dateRange[0].toLocaleString("ja-JP", { dateStyle: "short" })}&ndash;{props.dateRange[1].toLocaleString("ja-JP", { dateStyle: "short" })}</>
                : props.date.toLocaleString("ja-JP", { dateStyle: "short" })}
        </div>
        <div>{props.urlType == "indivisualPage" ? <SimpleUrlText urlString={props.url} /> : <></>}</div>
    </>
}


import { PresentationInfos } from "../../content/publications/publications-list";

type UrlType = "indivisualPage" | "topPageOnly";

export const PresentationItems: React.FC<
    {
        citations: [
            jaKey: string,
            enKey: string,
            additionalInfo?: { dateRange?: [string, string]; urlType?: UrlType, additionalElement?: React.ReactNode, lang?: "en" | "ja" }
        ][]
    }
> = (props) => {
    return <ol>
        {props.citations.map(
            citeInfo => {
                const [jaKey, enKey, addintionalInfo] = citeInfo;

                const key = jaKey;
                const info = PresentationInfos.find(elem => elem.citationKey === jaKey);
                if (info == undefined) throw new Error("Cication key not found.");
                return <li>
                    <PresentationItem
                        author={info.author}
                        citationKey={info.citationKey} date={info.date} eventTitle={info.eventTitle} titleContent={info.titleContent}
                        url={info.url}
                        dateRange={//なにかおかしいかも　型
                            (typeof addintionalInfo !== "undefined") && (typeof addintionalInfo.dateRange !== "undefined")
                                ? [new Date(addintionalInfo.dateRange[0]), new Date(addintionalInfo.dateRange[1])]
                                : undefined
                        }
                        urlType={addintionalInfo?.urlType ?? "indivisualPage"}
                        additionalInfo={addintionalInfo?.additionalElement}
                        doi={undefined}
                        lang={addintionalInfo?.lang}
                    />
                </li>
            }
        )}
    </ol>;
}