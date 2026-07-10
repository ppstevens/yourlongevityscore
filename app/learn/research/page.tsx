export default function LatestResearch() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <div className="mb-12">
        <div className="uppercase text-emerald-600 text-sm font-medium tracking-widest">UPDATED DAILY</div>
        <h1 className="text-5xl font-bold tracking-tighter mt-3">Latest Longevity Research</h1>
        <p className="text-xl text-gray-600 mt-6">Fresh studies from PubMed and major journals.</p>
      </div>

      <div className="bg-white border rounded-3xl p-12">
        <h2 className="text-2xl font-semibold mb-6">Search Latest Research</h2>
        <a href="https://pubmed.ncbi.nlm.nih.gov/?term=longevity+OR+aging+OR+VO2+max+OR+biomarkers" target="_blank" className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition">
          Search PubMed →
        </a>
      </div>

      {/* Back Button */}
      <div className="mt-12 flex justify-center">
        <a href="/" className="px-8 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 text-lg font-medium">
          ← Back to Longevity Score Dashboard
        </a>
      </div>
    </div>
  );
}