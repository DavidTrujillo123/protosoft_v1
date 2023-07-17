const img_preview = document.getElementById('img_preview');
const img_upload = document.getElementById('foto_post');

const CLOURDINARY_URL = 'https://api.cloudinary.com/v1_1/dqhmyjlbv/image/upload';
const CLOURDINARY_UPLOAD_PRESETS = 'ft2nlqqm';

img_upload.addEventListener('change', async (e) =>{
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOURDINARY_UPLOAD_PRESETS);


    const res = await axios.post(CLOURDINARY_URL, formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    img_preview.src = res.data.secure_url;

});