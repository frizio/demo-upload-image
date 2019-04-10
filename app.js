console.log('Javascript work!!');

const imagePreview =  document.getElementById('img-preview');

const imageUploader = document.getElementById('img-uploader');

imageUploader.addEventListener(
    'change',
    (e) => {
        console.log('Image selected');
        console.log(e);
    }
);
