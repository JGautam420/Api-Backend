import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();


const cloudineryConfig = () => { 
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME , 
        api_key: process.env.CLOUDINERY_KEY, 
        api_secret: process.env.CLOUDINERY_SECRET
      });
}

export default cloudineryConfig;