import { useState } from "react";
import FileControl from "./FileControl";
import style from "./App.module.scss"

export default function FilesManager()
{
    const [apiResponse, setApiResponse] = useState(String);

    return (
        <div className={style.AppStyle}>
            <FileControl  />
        </div>
    )
}