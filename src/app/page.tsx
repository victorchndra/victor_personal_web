import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { LatestPosts } from "./components/latest-posts";
import { LetsConnect } from "./components/lets-connect";
import { ProfileSection } from "./components/profile-section";
import { RecentProjects } from "./components/recent-projects";

export default function Home() {
  return (
    <>
      <div className="w-full h-5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"></div>
      <div className="min-h-screen font-inter block px-2 md:px-0">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="mx-auto max-w-[1140px] px-4 space-y-16">
          <ProfileSection />
          <LatestPosts />
          <RecentProjects />
          <LetsConnect />
        </main>

        <Footer />
      </div>
    </>
  );
}
