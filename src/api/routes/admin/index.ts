import { Router } from "express";
import customRouteHandler from "./custom-route-handler";
import adminPage from "./admin-page";
import { wrapHandler } from "@medusajs/medusa";

// Initialize a custom router
const router = Router();

export function attachAdminRoutes(adminRouter: Router) {
  // Attach our router to a custom path on the admin router
  adminRouter.use("/custom", router);

  adminRouter.use("/admin-page", router);
  router.get("/deneme", wrapHandler(adminPage.deneme));
  router.post("/add-new-page", wrapHandler(adminPage.createNewPage));
  


  // Define a GET endpoint on the root route of our custom path
  router.get("/", wrapHandler(customRouteHandler));
}
