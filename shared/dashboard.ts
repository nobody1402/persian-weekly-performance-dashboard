import { z } from "zod";

export type GoalStatus = "انجام شده" | "در حال انجام" | "نیاز به اقدام" | "انجام نشده";
export type Goal = { id: number; title: string; unit: string; owner: string; weight: number; plan: number; actual: number; status: GoalStatus; updated: string; priority: string };

export const weeklyReportSchema = z.object({ text: z.string().trim().min(5, "توضیحات گزارش باید حداقل ۵ کاراکتر باشد"), progress: z.coerce.number().min(0).max(100) });

export const weeklyTrend = [
  { week: "هفته ۱", value: 32 }, { week: "هفته ۲", value: 41 }, { week: "هفته ۳", value: 47 }, { week: "هفته ۴", value: 55 },
  { week: "هفته ۵", value: 61 }, { week: "هفته ۶", value: 65 }, { week: "هفته ۷", value: 71 }, { week: "هفته ۸", value: 78 },
];
export const departments = [
  { name: "اجرایی", planned: 82, actual: 74 }, { name: "آموزش", planned: 78, actual: 69 }, { name: "نظارت", planned: 70, actual: 63 },
  { name: "مطالعات", planned: 66, actual: 61 }, { name: "پشتیبانی", planned: 73, actual: 71 },
];
export const initialGoals: Goal[] = [
  { id: 1, title: "برگزاری دوره‌های آموزشی", unit: "آموزش", owner: "سارا احمدی", weight: 30, plan: 70, actual: 55, status: "نیاز به اقدام", updated: "امروز، ۱۰:۴۵", priority: "بالا" },
  { id: 2, title: "بهبود فرآیند ارزیابی عملکرد", unit: "نظارت", owner: "علی رضایی", weight: 25, plan: 60, actual: 64, status: "در حال انجام", updated: "دیروز، ۱۵:۲۰", priority: "متوسط" },
  { id: 3, title: "راه‌اندازی داشبورد مدیریتی", unit: "اجرایی", owner: "مریم کریمی", weight: 20, plan: 80, actual: 86, status: "انجام شده", updated: "۲ روز پیش", priority: "بالا" },
  { id: 4, title: "تدوین گزارش مطالعات بازار", unit: "مطالعات", owner: "محمد نادری", weight: 15, plan: 65, actual: 48, status: "نیاز به اقدام", updated: "۳ روز پیش", priority: "بالا" },
  { id: 5, title: "نوسازی زیرساخت پشتیبانی", unit: "پشتیبانی", owner: "نگار موسوی", weight: 10, plan: 45, actual: 42, status: "در حال انجام", updated: "۴ روز پیش", priority: "متوسط" },
  { id: 6, title: "مستندسازی دانش سازمانی", unit: "آموزش", owner: "سارا احمدی", weight: 18, plan: 35, actual: 35, status: "انجام شده", updated: "۵ روز پیش", priority: "کم" },
];
export const statusData = [
  { name: "انجام شده", value: 7, color: "#16a34a" }, { name: "در حال انجام", value: 8, color: "#2563eb" }, { name: "نیاز به اقدام", value: 3, color: "#d97706" }, { name: "انجام نشده", value: 2, color: "#94a3b8" },
];
