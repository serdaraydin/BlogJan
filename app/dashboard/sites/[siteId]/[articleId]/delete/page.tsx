import { DeletePost } from "@/app/action";
import SubmitButtons from "@/app/components/dashboard/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function DeleteForm({
  params,
}: {
  params: { siteId: string; articleId: string };
}) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you absolutly sure?</CardTitle>
          <CardDescription>
            This action cannot be undone. This will delete article and remove
            all data from our server
          </CardDescription>
          <CardFooter className="w-full flex justify-between">
            <Button variant="secondary" asChild>
              <Link href={`/dashboard/sites/${params.siteId}`}>Cancel</Link>
            </Button>
            <form action={DeletePost}>
              <input type="hidden" name="articleId" value={params.articleId} />
              <input type="hidden" name="siteId" value={params.siteId} />
              <SubmitButtons variant="destructive" text="Delete Article" />
            </form>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
}
