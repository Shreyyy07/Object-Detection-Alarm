import Image from "next/image";
import ObjectDetection from "@/component/object-detection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        Object Detection Alarm
      </h1>
      <ObjectDetection />
    </main>
  );
}
