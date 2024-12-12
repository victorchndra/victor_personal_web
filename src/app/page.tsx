import { LatestPosts } from "./components/latest-posts";
import { LetsConnect } from "./components/lets-connect";
import { ProfileSection } from "./components/profile-section";
import { RecentProjects } from "./components/recent-projects";

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <>
      <ProfileSection />
      <LatestPosts />
      <RecentProjects />
      <LetsConnect />
    </>
  );
}
