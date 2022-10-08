import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ApiResp from "./ApiResponse";
import IApiUploadResponse from "../../../interfaces/IApiUploadResponse";
import style from "./ApiResponse.module.scss"
import { v4 as uuidv4 } from "uuid"

interface Props {
  file: string,
  fileName: string
  setbtnSave: React.Dispatch<React.SetStateAction<boolean>>
  setscreenMsg: React.Dispatch<React.SetStateAction<string>>
}

export default function UploadFile({file, fileName, setbtnSave, setscreenMsg}: Props)
{
    const [lstResponse, setlstResponse] = useState<IApiUploadResponse[]>([])
    const [validResponse, setValidResponse] = useState(Boolean)
    
      const uploadFile = async (e: any) => {
        console.log(file);
        const formData = new FormData();
        formData.append("formFile", file);
        formData.append("fileName", fileName);

        await axios
          .post("https://localhost:7178/Files/Upload", formData)
          .then(function(result) 
          {        
            setbtnSave(result.data.validStructureFiles);
            setValidResponse(result.data.validStructureFiles);
            setlstResponse(result.data.lstApiResponse);
            result.data.validStructureFiles ? setscreenMsg("File imported and successfully validated.") : setscreenMsg("");
            
          })
          .catch(function(error) {
            setscreenMsg("");
            console.log('What happened? ' + error.response.data);
          });
      };
    
      return (       
        <span>
          <input type="button" value="Upload" onClick={uploadFile} />
          {validResponse ? 
          (
            <span />
          ) : 
          (
            <span className={style.wrapperResponse}>
              {lstResponse?.map(item => <ApiResp apiUploadResponse={item} key={uuidv4()}/>)}
            </span>
          ) }

        </span>
      );
}  
