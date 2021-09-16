import { Router } from "express";
import { CreateArticleController } from "./controllers/CreateArticleController";
import { DeleteArticleController } from "./controllers/DeleteArticleController";
import { EditArticleController } from "./controllers/EditArticleController";
import { ListArticlesController } from "./controllers/ListArticlesController";
import { UploadController } from "./controllers/UploadController";
import { multer } from "./middlewares/multer";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router();

// Controllers

const uploadController = new UploadController();
const createArticleController = new CreateArticleController();
const listArticlesController = new ListArticlesController();
const deleteArticleController = new DeleteArticleController();
const editArticleController = new EditArticleController();

// Routes

routes.get("/articles", listArticlesController.listAll);
routes.get("/articles/:id", listArticlesController.listOne);
routes.post("/articles", createArticleController.handle);
routes.post("/upload/:id", multer, uploadController.handle);
routes.patch("/articles/:id", editArticleController.handle);
routes.delete("/articles/:id", deleteArticleController.handle);

export { routes };
