import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import Tiptap from "../components/tiptap";
export default function page() {
  return (
    <div className="h-full">
      <ScrollArea className="h-full rounded-md p-4">
        <Tiptap></Tiptap>
      </ScrollArea>
    </div>
  );
}
