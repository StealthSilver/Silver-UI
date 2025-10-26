"use client";
import { Button } from "@/ui";

export default function ButtonDemo() {
  return (
    <section id="button" className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Button</h3>
      <Button variant="default" className="mr-2">
        Default
      </Button>
      <Button variant="outline">Outline</Button>
    </section>
  );
}
