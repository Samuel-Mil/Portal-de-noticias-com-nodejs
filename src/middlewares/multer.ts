import Multer from "multer";
import multerConfig from "../config/multer";

const multer = Multer(multerConfig).single("file");

export { multer };
