export default function Header() {
  return (
    <header className="bg-white shadow py-6">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-900">
          SC Konstanz-Wollmatingen
        </h1>
        <a
          href="mailto:grimm@sckw.de"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          Jetzt Sponsor werden
        </a>
      </div>
    </header>
  );
}
