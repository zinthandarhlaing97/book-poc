import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import SoundWaveLoader from "@/components/SoundWaveLoader";

export default function Home() {
  const { replace } = useRouter();
  useEffect(() => {
    replace("/book");
  }, []);
  return (
    <Layout>
      <div className={styles.main}>
        <SoundWaveLoader />
      </div>
    </Layout>
  );
}
