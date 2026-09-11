import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8F9F5]">
      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* 4-Pillar Trust Bar Ribbon */}
        <TrustBar />
      </main>
    </div>
  );
}
