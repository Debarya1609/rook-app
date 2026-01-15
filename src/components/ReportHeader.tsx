type Props = {
  platform: string;
  asset: string;
  generatedAt: string;
};

export default function ReportHeader({
  platform,
  asset,
  generatedAt,
}: Props) {
  return (
    <header className="mb-12">
      <h1 className="text-3xl font-semibold mb-2">
        ROOK Analysis Report
      </h1>

      <p className="text-sm text-neutral-400">
        Platform: <span className="text-neutral-300">{platform}</span>
      </p>

      <p className="text-sm text-neutral-400">
        Asset: <span className="text-neutral-300">{asset}</span>
      </p>

      <p className="text-sm text-neutral-500 mt-2">
        Generated on {new Date(generatedAt).toLocaleString()}
      </p>
    </header>
  );
}
