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
