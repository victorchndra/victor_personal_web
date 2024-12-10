import { LatestPosts } from "./components/latest-posts";
import { LetsConnect } from "./components/lets-connect";
import { ProfileSection } from "./components/profile-section";
import { RecentProjects } from "./components/recent-projects";
import { getAllCategories } from "./server/actions";

export default async function Home() {

  const data = await getAllCategories()
  console.log(data)

  return (
    <>
      <ProfileSection />
      <LatestPosts />
      <RecentProjects />
      <LetsConnect />
    </>
  );
}
