import { useState } from 'react';
import "./Uploader.css";
import { Spin } from 'antd';
import axios from 'axios';

const Uploader = (props) => {

  console.log(props)
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/default_image.png",
  });

  const [loaded, setLoaded] = useState(false);

  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    
    if(e.target.files[0]){
      setLoaded("loading")
      fileReader.readAsDataURL(e.target.files[0])
    }
    fileReader.onload = () => {
      setImage(
        {
          image_file: e.target.files[0],
          preview_URL: fileReader.result
        }
      )
      setLoaded(true);
    }
    
  }

  //흠.. 이미지 삭제 -> 업로드할 때 새로 삭제 안되나? 이미지 쌓이는지 확인하기
  const deleteImage = () => {
    setImage({
      image_file: "",
      preview_URL: "img/default_image.png",
    });
    setLoaded(false);
  }

  //서버로 이미지 보내기
  const sendImageToServer = async () => {
    if(image.image_file){
      const formData = new FormData()
      formData.append('file', image.image_file);
      await axios.post('/api/image/upload', formData);
      alert("서버에 등록이 완료되었습니다!");
      setImage({
        image_file: "",
        preview_URL: "img/default_image.png",
      });
      setLoaded(false);
    }
    else{
      alert("사진을 등록하세요!")
    }
  }

  return (
    <div className="uploader-wrapper">
      <input type="file" accept="image/*"
        onChange={saveImage}
        ref={refParam => inputRef = refParam}
        style={{ display: "none" }}
      />
      <div className="img-wrapper" onClick={() => inputRef.click()}>
        {loaded === false || loaded === true ? (
          <img src={image.preview_URL} />
        ) : (
          <Spin className="img-spinner" tip = "이미지 불러오는중"/>
        )}
      </div>
    </div>
  );
}

export default Uploader;