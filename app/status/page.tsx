// status/page.tsx
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle, Globe, Smartphone, Newspaper, Video, Mic, Server, Cloud } from "lucide-react";

const services = [
  {
    name: "Android App",
    status: "Online",
    description: "The Android app is available on Google Play Store and working smoothly.",
    icon: Smartphone,
    color: "text-green-500",
  },
  {
    name: "Web App",
    status: "Online",
    description: "The web version is up and running for all users.",
    icon: Globe,
    color: "text-green-500",
  },
  {
    name: "Breaking News API",
    status: "Online",
    description: "Breaking news API is delivering real-time updates.",
    icon: AlertTriangle,
    color: "text-green-500",
  },
  {
    name: "Top News API",
    status: "Online",
    description: "Top news API is operational and serving latest headlines.",
    icon: Newspaper,
    color: "text-green-500",
  },
  {
    name: "Video API",
    status: "Online",
    description: "Video API is experiencing minor delays. Some videos may load slowly.",
    icon: Video,
    color: "text-green-500",
  },
  {
    name: "AI Voice API",
    status: "Offline",
    description: "AI Voice API is currently under maintenance. Voice features are temporarily unavailable.",
    icon: Mic,
    color: "text-red-500",
  },
  {
    name: "News Media API",
    status: "Online",
    description: "News media API is fetching articles from all sources.",
    icon: Server,
    color: "text-green-500",
  },
  {
    name: "Engine_2 API",
    status: "Online",
    description: "Engine_2 API is running optimally.",
    icon: Cloud,
    color: "text-green-500",
  },
  {
    name: "Eksport API",
    status: "Online",
    description: "Eksport API is experiencing higher latency. Some exports may be delayed.",
    icon: Cloud,
    color: "text-green-500",
  },
];

export default function StatusPage() {
  return (
    <div className="container max-w-5xl mx-auto py-16 px-4 mt-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">All Nepali News Status</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Here you can find the current status of all major All Nepali News services and APIs. If you are experiencing issues not listed here, please contact support.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const StatusIcon =
            service.status === "Online"
              ? CheckCircle
              : service.status === "Degraded"
              ? AlertTriangle
              : XCircle;
          return (
            <Card key={service.name} className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className={`rounded-full bg-gray-100 dark:bg-gray-800 p-3 ${service.color}`}>
                  <StatusIcon className={`w-7 h-7 ${service.color}`} />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold mb-1">{service.name}</CardTitle>
                  <span className={`text-sm font-medium ${service.color}`}>{service.status}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}