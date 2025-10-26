import { Sidebar } from "../components/Sidebar";
import ButtonDemo from "../components/Button-demo";
import CardDemo from "../components/Card-demo";

export default function ComponentsPage() {
  return (
    <div className="flex">
      <Sidebar selectedComponent="" onComponentSelect={() => {}} />
      <div className="flex-1 p-6">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <p>Manual install:</p>
          <pre className="bg-gray-100 p-4 rounded">npm install @rajat/ui</pre>
          <p className="mt-4">CLI (coming soon):</p>
          <pre className="bg-gray-100 p-4 rounded">npx rajat-ui add button</pre>
        </section>

        <ButtonDemo />
        <CardDemo />
      </div>
    </div>
  );
}
