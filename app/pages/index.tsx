"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FarcasterOpenSeaMiniApp = () => {
  const searchParams = useSearchParams();
  const tokenUrl = searchParams.get("url");

  if (!tokenUrl || !tokenUrl.startsWith("https://opensea.io/token/")) {
    return (
      <div className="p-4 text-center text-red-500">
        Invalid or missing OpenSea token URL.
      </div>
    );
  }

  const parsedUrl = new URL(tokenUrl);
  parsedUrl.searchParams.set("os_ref", "farcaster");
  const refLink = parsedUrl.toString();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="space-y-4 p-6">
          <h1 className="text-xl font-bold text-center">OpenSea Token</h1>
          <iframe
            src={refLink}
            className="w-full h-[500px] border rounded-xl"
            title="OpenSea Token"
            allow="clipboard-write"
          ></iframe>
          <div className="flex justify-center">
            <Button asChild>
              <a href={refLink} target="_blank" rel="noopener noreferrer">
                View on OpenSea ↗
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FarcasterOpenSeaMiniApp;
