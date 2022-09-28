import Head from "next/head";
import Image from "next/image";
import logoFile from "../public/AsyncSwiftLogo.svg";
import { Animated, Basic, bounce, Combined } from "../shared/styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>SyncSwift 2022</title>
        <meta name="description" content="Generated by SyncSwift 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src={logoFile}
          alt="AsyncSwift Community Logo"
          width={180}
          height={180}
        />
        <h2>SyncSwift Conference</h2>
        <h3>2022 11. 12</h3>
      </main>
    </>
  );
}
