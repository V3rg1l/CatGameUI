import { useEffect, useState } from "react";
import IApiUploadResponse from "../../../interfaces/IApiUploadResponse";
import DeleteFile from "../DeleteFile";
import SaveFile from "../SaveFile";
import UploadFile from "../UploadFile";
import style from "./FileControl.module.scss"

export default function FileControl()
{
    const [file, setFile] = useState(String);
    const [fileName , setFileName] = useState(String);
    const [btnSave, setBtnSave] = useState(Boolean)
    const [screenMsg, setScreenMsg] = useState(String)

    const saveFile = (event: any)=>  {
        //console.log(event.target.files[0]);
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
        setBtnSave(false);
      };
    
      return (
        <div>
            <div className={style.wrapper}>
                <UploadFile file={file} fileName={fileName} setbtnSave={setBtnSave} setscreenMsg={setScreenMsg}/>
                <SaveFile file={file} fileName={fileName} btnSave={btnSave} setbtnSave={setBtnSave} setscreenMsg={setScreenMsg}/>
                <DeleteFile file={file} fileName={fileName} setscreenMsg={setScreenMsg}/>
            </div>
            <div className={style.fileUpload}>
                <input type="file" onChange={saveFile} />
            </div>
            <p className={style.passed}>{screenMsg}</p>
        </div>
      );
}