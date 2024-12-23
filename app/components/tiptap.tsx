"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Heading from "@tiptap/extension-heading";
import StarterKit from "@tiptap/starter-kit";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Heading1, Heading2, Heading3 } from "lucide-react";
import "@/app/styles/heading.css";
const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class: "min-h-[400px] rounded-md outline-none p-3 border border-input",
      },
    },
  });

  const toggleItems = [
    {
      name: "Bold",
      icon: Bold,
      action: () => editor?.chain().focus().toggleBold().run(),
      pressed: () => editor?.isActive("bold") ?? false,
    },
    {
      name: "h1",
      icon: Heading1,
      action: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: () => editor?.isActive("heading", { level: 1 }) ?? false,
    },
    {
      name: "h2",
      icon: Heading2,
      action: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: () => editor?.isActive("heading", { level: 2 }) ?? false,
    },
    {
      name: "h3",
      icon: Heading3,
      action: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: () => editor?.isActive("heading", { level: 3 }) ?? false,
    },
  ];
  if (!editor) {
    return null;
  }
  return (
    <div>
      <div className="mb-4 flex space-x-2">
        {toggleItems.map((item) => (
          <Toggle
            pressed={item.pressed()}
            key={item.name}
            onPressedChange={() => item.action()}
          >
            <item.icon size={12} />
          </Toggle>
        ))}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
