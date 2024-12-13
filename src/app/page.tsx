import { LatestPosts } from "./components/latest-posts";
import { LetsConnect } from "./components/lets-connect";
import { ProfileSection } from "./components/profile-section";
import { RecentProjects } from "./components/recent-projects";

export default async function Home() {
  console.log('Rendering Home component...');
  return (
    <>
      <ProfileSection />
      <LatestPosts />
      <RecentProjects />
      <LetsConnect />
    </>
  );
}
