import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import IApiUploadResponse from "../../../interfaces/IApiUploadResponse";

interface Props {
  file: string,
  fileName: string,
  setscreenMsg: React.Dispatch<React.SetStateAction<string>>
}

export default function DeleteFile({file, fileName, setscreenMsg}: Props)
{
    
      const deleteFile = async (e: any) => {
        console.log(file);
        const formData = new FormData();
        formData.append("formFile", file);
        formData.append("fileName", fileName);

        await axios
          .post("https://localhost:7178/Files/Delete", formData)
          .then(function(result) 
          {        
            setscreenMsg("All files deleted successfully.");
          })
          .catch(function(error) {
            setscreenMsg("");
            console.log('What happened? ' + error.response.data);
          });

      };
    
      return (

        <input type="button" value="Delete all files" onClick={deleteFile} />

      );
}  