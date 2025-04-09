import Blogs from '@/containers/Blogs';
import FeaturedCompanies from '@/containers/FeaturedCompanies';
import FeaturedSuggestions from '@/containers/FeaturedSuggestions';
import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import Hero from '@/containers/Hero';
import HotJobsToday from '@/containers/HotJobsToday';
import QuickSearch from '@/containers/QuickSearch';
import TopEmployers from '@/containers/TopEmployers';

export default function Home() {
  return (
    // <div className="flex h-100 flex-col items-center justify-center">
    //   <h1 className="text-2xl font-semibold">Hello World</h1>
    //   <p className="text-lg">Start to clone Topdev Website</p>
    //   <Header />
    // </div>
    <>
      <Header />
      <Hero />
      <FeaturedCompanies />
      <TopEmployers />
      <HotJobsToday />
      <FeaturedSuggestions />
      <Blogs />
      <QuickSearch />
      <Footer />
    </>
  );
}
