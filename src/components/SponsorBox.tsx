export type SponsorBoxProps = {
  title: string;
  price: string;
  status: string;
  benefits: string[];
  color?: string;
};

export default function SponsorBox({
  title,
  price,
  status,
  benefits,
  color = "bg-white",
}: SponsorBoxProps) {
  return (
    <div className={`rounded-xl shadow-md p-6 ${color}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-lg font-semibold mb-2">{price}</p>
      <ul className="list-disc list-inside text-sm space-y-1 mb-3">
        {benefits.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <p className="font-semibold text-sm">{status}</p>
    </div>
  );
}
