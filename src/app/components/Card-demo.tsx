"use client";
import { Card } from "@/ui";

export default function CardDemo() {
  return (
    <section id="card">
      <h3 className="text-xl font-semibold mb-2">Card</h3>
      <Card className="max-w-sm">
        <p>This is a card example.</p>
      </Card>
    </section>
  );
}
