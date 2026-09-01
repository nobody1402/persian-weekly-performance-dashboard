import { describe, expect, it } from "vitest";
import { z } from "zod";

const weeklyReportSchema = z.object({
  text: z.string().trim().min(5),
  progress: z.coerce.number().min(0).max(100),
});

describe("weekly report validation", () => {
  it("accepts a meaningful report and percentage", () => {
    expect(weeklyReportSchema.safeParse({ text: "تکمیل برنامه هفته", progress: "65" }).success).toBe(true);
  });

  it("rejects an empty report or invalid progress", () => {
    expect(weeklyReportSchema.safeParse({ text: "نه", progress: 65 }).success).toBe(false);
    expect(weeklyReportSchema.safeParse({ text: "گزارش معتبر", progress: 120 }).success).toBe(false);
  });
});
