import Link from "next/link";

import styles from "../../styles/modules/Description.module.css";

const Description = () => {
  return (
    <section className={styles.description}>
      <main>
        <h1>SyncSwift 2022 Conference</h1>
        <div>
          <h2>11월 12일 (토)</h2>
          <div className={styles.location}>
            <div>체인지업 그라운드 포항</div>
            <Link href="https://www.changeupground.com/">
              <span style={{ cursor: "pointer" }}>
                자세히 알아보기 &#10132;
              </span>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Description;
