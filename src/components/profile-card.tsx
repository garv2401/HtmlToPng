"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { toPng } from "html-to-image";
import { Download, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Photo from "../../public/my_photo.jpg"; 

export default function ProfileCard() {
  const [isDownloading, setIsDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadAsPng = async () => {
    if (!cardRef.current) return;

    try {
      setIsDownloading(true);

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        backgroundColor: "#ffffff", 
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "profile-card.png";
      link.click();
    } catch (error) {
      console.error("Error generating PNG:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Card
        ref={cardRef}
        className="p-6 bg-white shadow-md rounded-xl overflow-hidden"
      >
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500">
            <Image
              src={Photo} 
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h2 className="text-xl font-bold">Garvit Kumar</h2>
          <p className="text-gray-500 mb-2">Web Developer</p>

          <div className="flex space-x-3 mb-4">
            <a
              href="https://github.com/garv2401"
              aria-label="GitHub"
              className="text-gray-600 hover:text-purple-600"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/garvit-kumar-9aab11256/"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-purple-600"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-purple-600"
            >
              <Twitter size={18} />
            </a>
          </div>

          <div className="w-full grid grid-cols-3 gap-2 border-t pt-4">
            <div className="text-center">
              <p className="font-bold text-purple-600">20+</p>
              <p className="text-xs text-gray-500">Projects</p>
            </div>
            <div className="text-center border-x">
              <p className="font-bold text-purple-600">1K+</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-purple-600">48</p>
              <p className="text-xs text-gray-500">Repositories</p>
            </div>
          </div>
        </div>
      </Card>

      <Button
        onClick={downloadAsPng}
        disabled={isDownloading}
        className="w-full bg-purple-600 hover:bg-purple-700"
      >
        <Download className="mr-2 h-4 w-4" />
        {isDownloading ? "Processing..." : "Download as PNG"}
      </Button>
    </div>
  );
}
