import React, {useState} from 'react';



const Upload = () => {

const [file, setFile] = useState(null)

  const uploadedImage = React.useRef(null);

    const onChangeHandler = e => {
       const [file] = e.target.files
       if(file){

        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;

        reader.onload = e => {
            current.src = e.target.result;
        }

        reader.readAsDataURL(file);
        }
    };

    const onClickHandler = e => {
        e.preventDefault();
        setFile(file)
        console.log(setFile)

    }



    return(
        <div className='container'
            style={{
            textAlign: 'center',
            marginTop: '50px'
            }}>
               <h4> Upload Photo</h4>
            
            <div 
                style={{
                width: '200px',
                height: '200px',
                padding:'40px',
                margin: 'auto',
                marginBottom: '20px',
                border: '2px solid black'

                }}
            >
                <img 
                ref={uploadedImage}
            
                style={{
                    width: '100%',
                    height: '100%'
                }}
                />
            </div>
            <div>
                <button className='btn btn-dark'>
                    <input 
                        type='file'
                        multiple={false}
                        accept='image/*'
                        onChange={onChangeHandler}
                        style={{
                            opacity: 0,
                            position: 'absolute',
                            display: 'none',
                            // pointerEvents: 'none',
                           
                        }}/>
                       Select Photo
                </button>
                <button className='btn btn-secondary' 
                style={{marginLeft: 10}}
                onClick={onClickHandler}
                >Upload</button>
            </div>

        </div>
    )
};
export default Upload;