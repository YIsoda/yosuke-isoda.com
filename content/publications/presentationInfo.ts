export type PresentationInfo={
    titleContent: string;//React.ReactNode;
    eventTitle:string;
    date:Date|[Date,...Date[]];
    author:{family:string,given:string}[];
    url:string;
    citationKey:string;
}
