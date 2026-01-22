export default function TopBar() {
  return (
    <div className="h-full px-6 flex items-center justify-between">
      <input
        type="text"
        placeholder="Search analyses..."
        className="w-96 bg-neutral-900 border border-neutral-800 rounded-md px-3 py-1.5 text-sm outline-none"
      />

      <button className="text-sm px-4 py-1.5 border border-neutral-700 rounded-md hover:bg-neutral-900">
        + New
      </button>
    </div>
  );
}
