import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import IApiUploadResponse from "../../../interfaces/IApiUploadResponse";

interface Props {
  file: string,
  fileName: string,
  btnSave: boolean;
  setbtnSave: React.Dispatch<React.SetStateAction<boolean>>
  setscreenMsg: React.Dispatch<React.SetStateAction<string>>
}

export default function SaveFile({file, fileName, btnSave, setbtnSave, setscreenMsg}: Props)
{

      const saveFile = async (e: any) => {
        console.log(file);
        const formData = new FormData();
        formData.append("formFile", file);
        formData.append("fileName", fileName);

        await axios
          .post("https://localhost:7178/Files/Save", formData)
          .then(function(result) 
          {        
            setscreenMsg("File has been saved successfully.");
          })
          .catch(function(error) {
            setscreenMsg("");
            console.log('What happened? ' + error.response.data);
          });

      };

      return (
        <input type="button" value="Save File" disabled={!btnSave} onClick={saveFile} />        
      );
}  