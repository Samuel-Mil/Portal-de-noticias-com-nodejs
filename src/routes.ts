import { Router } from "express";
import { CreateArticleController } from "./controllers/CreateArticleController";
import { DeleteArticleController } from "./controllers/DeleteArticleController";
import { EditArticleController } from "./controllers/EditArticleController";
import { ListArticlesController } from "./controllers/ListArticlesController";
import { UploadController } from "./controllers/UploadController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";

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
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const authenticateUserController = new AuthenticateUserController();

// Routes

routes.get("/articles", listArticlesController.listAll);
routes.get("/articles/:id", listArticlesController.listOne);
routes.post(
  "/articles",
  ensureAuthenticated,
  ensureAdmin,
  createArticleController.handle
);
routes.post(
  "/upload/:id",
  ensureAuthenticated,
  ensureAdmin,
  multer,
  uploadController.handle
);
routes.patch(
  "/articles/:id",
  ensureAuthenticated,
  ensureAdmin,
  editArticleController.handle
);
routes.delete(
  "/articles/:id",
  ensureAuthenticated,
  ensureAdmin,
  deleteArticleController.handle
);
routes.get("/users", listUsersController.listAll);
routes.get("/users/:id", listUsersController.listOne);
routes.post("/users", createUserController.handle);

routes.post("/login", authenticateUserController.handle);

export { routes };
