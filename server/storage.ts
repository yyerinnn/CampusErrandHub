import { type ErrandRequest, type InsertErrandRequest, type AdvertiserRequest, type InsertAdvertiserRequest } from "@shared/schema";

export interface IStorage {
  createErrandRequest(request: InsertErrandRequest): Promise<ErrandRequest>;
  getAllErrandRequests(): Promise<ErrandRequest[]>;
  createAdvertiserRequest(request: InsertAdvertiserRequest): Promise<AdvertiserRequest>;
  getAllAdvertiserRequests(): Promise<AdvertiserRequest[]>;
}

export class MemStorage implements IStorage {
  private errandRequests: ErrandRequest[] = [];
  private advertiserRequests: AdvertiserRequest[] = [];

  async createErrandRequest(request: InsertErrandRequest): Promise<ErrandRequest> {
    const errandRequest: ErrandRequest = {
      ...request,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    };
    this.errandRequests.push(errandRequest);
    return errandRequest;
  }

  async getAllErrandRequests(): Promise<ErrandRequest[]> {
    return [...this.errandRequests];
  }

  async createAdvertiserRequest(request: InsertAdvertiserRequest): Promise<AdvertiserRequest> {
    const advertiserRequest: AdvertiserRequest = {
      ...request,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    };
    this.advertiserRequests.push(advertiserRequest);
    return advertiserRequest;
  }

  async getAllAdvertiserRequests(): Promise<AdvertiserRequest[]> {
    return [...this.advertiserRequests];
  }
}

export const storage = new MemStorage();
