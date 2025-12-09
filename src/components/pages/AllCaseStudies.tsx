import { Navbar } from '@/components/Navbar'; 
import Footer from '@/components/Footer';     

// FIXED: Component name MUST start with a Capital Letter
const AllCaseStudies = () => {
  return (
    <main className="min-h-screen bg-[#FDFCFE]">
      <Navbar />
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm font-bold text-acumen-primary uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-acumen-secondary mb-6 mt-2">
            All Case Studies
          </h1>
          <p className="text-lg text-slate-600 mb-12">
            Explore our comprehensive list of digital transformations and success stories.
          </p>
          
          <div className="p-12 border-2 border-dashed border-slate-200 rounded-xl text-center text-slate-400">
            Full case study list coming soon...
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Export the Capitalized component
export default AllCaseStudies;