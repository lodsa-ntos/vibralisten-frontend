import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./buttonConvert.css";

const ButtonConvert = () => {
  const [ isValid, setIsValid ] = useState(null);
  const [ videoUrl, setvideoUrl ] = useState("");
  const [ status, setStatus ] = useState(null);
  const [ downloadUrl, setdownloadUrl ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ showResult, setshowResult ] = useState(false);
  const [ videoTitle, setvideoTitle ] = useState(false);
  const quality = "128";

  const validateLink = (e) => {
    const link = e.target.value.trim();
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    
    if (link === "") {
      setIsValid(null);
    } else if (youtubeRegex.test(link)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setvideoUrl(link);
  };

  const handleChange = (e) => {
    setvideoUrl(e.target.value);
  };

  const handleInputChange = (e) => {
    validateLink(e);
    handleChange(e);
  };

  const handleConvert = async () => {
    if (!videoUrl || !isValid) {
      alert("Please enter a valid Youtube URL.");
      return;
    }

    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

    if (!youtubeRegex.test(videoUrl)) {
      setIsValid(false);
      alert("Invalid YouTube URL. Please enter a correct link.");
      return
    } else {
      setIsValid(true);
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/api/convert", { videoUrl, quality });

      if (response.status === 200) {
        setStatus("success");
        setdownloadUrl(response.data.downloadUrl);
        setvideoTitle(response.data.videoTitle);
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Efeito para mostrar a interface de resultado ao completar a conversão
  // Effect to show the result interface when the conversion is complete
  useEffect(() => {
    if (status === "success") {
      setshowResult(true);
    }
  }, [status]);

  // Reset para converter outro vídeo
  // Reset to convert another video
  const handleReset = () => {
    setvideoUrl("");
    setStatus(null);
    setdownloadUrl("");
    setshowResult(false);
    setIsValid(null);
    setvideoTitle("");
  };

  return (
    <React.Fragment>
      <div className="container-box">
        {!showResult ? (
          <div className="box">
            <input 
              className={`link-box ${isValid === true ? "valid" : isValid === false ? "invalid" : ""}`} 
              type="text" 
              value={videoUrl}
              onChange={handleInputChange} 
              id="input-link" 
              placeholder="Please paste the YouTube video URL here..."
            />
            <button className="bnt" onClick={handleConvert} disabled={loading}>{loading ? "Converting..." : "Convert"}</button>
          </div>

        ) : (
            
              <div className="result-container" >
                <h3 className="video-title">{videoTitle}</h3>
                <div className="result-content" >
                  <p className="success-message-convert">✅ Conversion Successful! </p>
                  <a href={downloadUrl} download className="download-btn">Download MP3</a>
                  <button className="convert-next-btn" onClick={handleReset} >Convert Next 🔄</button>
                </div>
              </div>

            )}

        {status === "error" && ( <p className="error-message-convert"> ❌ Error processing the request. Try again later.</p> )}
        
      </div>
    </React.Fragment>
  );
};

export default ButtonConvert;

