import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CancelledRoute() {
  return (
    <div className="w-full flex flex-1 justify-center items-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <XIcon className="size-12 rounded-full p-2 bg-red-500/30 text-red-500 " />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h2 className="text-lg font-semibold">Payment Canceled</h2>
            <p className=" text-sm mt-2 text-muted-foreground tracking-tight">No worries, you wont be charged. Please try again.</p>
            <Button className="w-full mt-5" asChild>
                <Link href="/dashboard">
                Go back to dashboard
                </Link>

            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
