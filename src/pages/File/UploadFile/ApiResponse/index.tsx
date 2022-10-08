import IApiUploadResponse from "../../../../interfaces/IApiUploadResponse"
import style from "./textColor.module.scss"

interface Props{
    apiUploadResponse : IApiUploadResponse
}

const ApiResp = ({ apiUploadResponse }: Props) => {
    return(
        <div>
            <p className={apiUploadResponse.isValid ? style.passed : style.error}>{apiUploadResponse.folder}</p>
            <p className={style.textResponseList}>{apiUploadResponse.errorMsg === "" ? "Folder and Files Correct." : apiUploadResponse.errorMsg}</p>
        </div>
    )
  }
  
  export default ApiResp
  