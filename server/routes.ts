import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertErrandRequestSchema, insertAdvertiserRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  app.post("/api/errand-requests", async (req, res) => {
    try {
      const data = insertErrandRequestSchema.parse(req.body);
      const errandRequest = await storage.createErrandRequest(data);
      res.json(errandRequest);
    } catch (error) {
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  app.get("/api/errand-requests", async (req, res) => {
    try {
      const requests = await storage.getAllErrandRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch errand requests" });
    }
  });

  app.post("/api/advertiser-requests", async (req, res) => {
    try {
      const data = insertAdvertiserRequestSchema.parse(req.body);
      const advertiserRequest = await storage.createAdvertiserRequest(data);
      res.json(advertiserRequest);
    } catch (error) {
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  app.get("/api/advertiser-requests", async (req, res) => {
    try {
      const requests = await storage.getAllAdvertiserRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch advertiser requests" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
