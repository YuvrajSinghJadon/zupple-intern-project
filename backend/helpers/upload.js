const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dk6tm1cdu",
  api_key: "124189688964181",
  api_secret: "***************************",
});

const uploadFile = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  uploadFile,
};
