import { GraduationCap, CheckCircle, ChevronRight, ArrowLeft, Sparkles, Menu, X } from "lucide-react";
import { PreviewScreens } from "./PreviewScreens";
import messages from "./messages";
import { useRouter } from 'next/navigation';
import SofufLMSClient from "./SofufLMSClient";
import type { Metadata } from "next";
import { metadata as staticMetadata } from "./metadata";

const features = [
  "Student Portal with secure login",
  "Grade Management & Reporting",
  "Parent Communication Dashboard",
  "Assignment & Homework Tracking",
  "Attendance Automation",
  "Multi-role Access (Admin, Teacher, Parent, Student)",
  "Mobile App Integration",
  "Notifications & Announcements",
  "Analytics & Insights for School Leaders",
  "Weekly Plan Digitalization",
  "AI Teacher Timetable Generation",
  "Student Registration"
];

const additionalFeatures = [
  "Automated Telegram Notifications",
  "Media Gallery for School Events",
  "Student Behavior Tracking",
  "Automated SMS Alerts for Parents",
  "Teacher Performance Evaluation",
  "Integrated HR & Payroll Management"
];

export const generateMetadata = async (): Promise<Metadata> => {
  return staticMetadata;
};

export default function SofufLMSDetail() {
  return <SofufLMSClient />;
} 