import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const errandRequests = pgTable("errand_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  date: text("date").notNull(),
  time: text("time").notNull(),
  location: text("location").notNull(),
  content: text("content").notNull(),
  name: text("name").notNull(),
  department: text("department").notNull(),
  phone: text("phone").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const advertiserRequests = pgTable("advertiser_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  ceoName: text("ceo_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertErrandRequestSchema = createInsertSchema(errandRequests).omit({
  id: true,
  createdAt: true,
});

export const insertAdvertiserRequestSchema = createInsertSchema(advertiserRequests).omit({
  id: true,
  createdAt: true,
});

export type InsertErrandRequest = z.infer<typeof insertErrandRequestSchema>;
export type ErrandRequest = typeof errandRequests.$inferSelect;

export type InsertAdvertiserRequest = z.infer<typeof insertAdvertiserRequestSchema>;
export type AdvertiserRequest = typeof advertiserRequests.$inferSelect;
