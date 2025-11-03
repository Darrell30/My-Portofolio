import Image from "next/image";
import styles from "./page.module.css";
import ProfileSection from '../components/ProfileSection';
import RepoPreview from '../components/RepoPreview';
import SkillsSection from '../components/SkillsSection';

export default function Home() {
  return (
    <main>
      <ProfileSection />
      <SkillsSection />
      <RepoPreview />
    </main>
  );
}
