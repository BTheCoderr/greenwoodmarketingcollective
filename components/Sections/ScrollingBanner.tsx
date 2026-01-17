'use client'

export default function ScrollingBanner() {
  const keywords = [
    'Product Marketing Excellence',
    'Fractional CMO Leadership',
    'Vision Implementation',
    'Go-to-Market',
  ]

  return (
    <section className="bg-teal-DEFAULT py-4 overflow-hidden" aria-label="Services keywords">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...keywords, ...keywords, ...keywords].map((keyword, index) => (
          <span key={index} className="text-white text-lg md:text-xl font-medium mx-8">
            {keyword} <span className="mx-4">*</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
