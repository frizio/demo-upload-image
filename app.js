console.log('Javascript work!!');

const imagePreview =  document.getElementById('img-preview');

const imageUploader = document.getElementById('img-uploader');

const CLAUDINARY_URL = 'https://api.cloudinary.com/v1_1/frizio/image/upload';

const CLAUDINARY_PRESET = 'yzsmlfl9';

imageUploader.addEventListener(
    'change',
    (e) => {
        const theFile = e.target.files[0];
        console.log(theFile);
    }
);
