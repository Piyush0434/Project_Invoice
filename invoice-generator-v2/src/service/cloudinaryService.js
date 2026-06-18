import axios from "axios";

export const uploadInvoiceThumbnail = async (imageData) => {
    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "invoice_thumbnail"); // Replace with your preset
    formData.append("cloud_name", "ddjxpaggr"); // Replace with your cloud name

    const res = await axios.post(
        `https://api.cloudinary.com/v1_1/ddjxpaggr/image/upload`,
        formData
    );

    return res.data.secure_url;
};