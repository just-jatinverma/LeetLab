"use client";

import { Button } from "@/components/ui/button";
import { CopyX } from "lucide-react";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
        <div className="container flex max-w-md flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
            <CopyX className="h-10 w-10 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Something went wrong!
          </h1>
          <p className="text-muted-foreground">
            We apologize for the inconvenience. An unexpected error has
            occurred.
          </p>
          <div className="flex gap-2">
            <Button onClick={() => reset()} variant="default">
              Try again
            </Button>
            <Button onClick={() => window.location.reload()} variant="outline">
              Reload page
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
