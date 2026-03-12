export default function LogoCloud() {
  return (
    <section className="py-12 mb-10 pb-40 bg-background border-b border-muted/50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by innovative teams worldwide
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
          <div className="flex items-center gap-3 text-foreground/50 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300 cursor-pointer">
            <svg
              className="h-8 w-auto text-blue-600"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path
                d="M2 17L12 22L22 17M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight">AcmeCorp</span>
          </div>

          <div className="flex items-center gap-3 text-foreground/50 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300 cursor-pointer">
            <svg
              className="h-8 w-auto text-rose-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            <span className="text-xl font-bold tracking-tight">GlobalBank</span>
          </div>

          <div className="flex items-center gap-3 text-foreground/50 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300 cursor-pointer">
            <svg
              className="h-8 w-auto text-emerald-500"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fillOpacity="0.3" />
              <circle cx="12" cy="12" r="6" />
            </svg>
            <span className="text-xl font-bold tracking-tight">Nexa</span>
          </div>

          <div className="flex items-center gap-3 text-foreground/50 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300 cursor-pointer">
            <svg
              className="h-8 w-auto text-amber-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span className="text-xl font-bold tracking-tight">BoltEnergy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
