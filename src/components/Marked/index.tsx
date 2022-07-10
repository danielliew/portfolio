import React, { ReactElement, useEffect, useState } from "react";
import { marked } from "marked";

const Marked = ({ md } : { md: string }) : ReactElement => {
    const [html, setHtml] = useState("")
    useEffect(() => {
        if (md)
            setHtml(marked.parse(md))
    }, [md])
    return <div dangerouslySetInnerHTML={{
        __html: html
    }} />;
}

export default Marked;
