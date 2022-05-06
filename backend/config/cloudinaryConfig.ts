import cloud from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { CLOUDINARY } from "./keys";

export const cloudinary = cloud.v2;
cloudinary.config({
  cloud_name: CLOUDINARY.cloud_name,
  api_key: CLOUDINARY.api_key,
  api_secret: CLOUDINARY.secret,
});

export const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "YelpCamp",
      allowedFormats: ["jpg", "jpeg", "png"],
    };
  },
});
