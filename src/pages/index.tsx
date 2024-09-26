import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import LanguageFeatures from "../components/LanguageFeatures";
import PlatformFeatures from "../components/PlatformFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <header className={clsx("hero hero--primary", styles.heroBanner)}>
    <header className="hero">
      <div className="container">
        <div className="hero__cta">
          <Link className="button button--secondary" to="/docs">
            Panduan untuk Developer
          </Link>
        </div>
        <Heading as="h1" className="hero__title">
          Dokumentasi & Tutorial Platform Dewacloud
        </Heading>
        <p className="hero__subtitle">
          Platform Dewacloud memberikan kemudahan untuk developer dalam
          melakukan penentuan resource server, infrastruktur server, arsitektur
          server, management server hingga integrasi development tools, sehingga
          para developer bisa lebih fokus pada pengembangan aplikasi. Segera
          pelajari segala fitur canggih Dewacloud di bawah ini!
        </p>
        <div className="hero__cta">
          <Link id="get-started-button" className="button " to="/docs">
            Get Started️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Platform Documentation`}
      description="Belajaran tentang Dewacloud Platform yang membantu developer dalam membangun aplikasi Java, PHP, Node.Js, Ruby, Python, Golang, dan lain-lainnya."
    >
      <div className="landing-page-wrapper">
        <HomepageHeader />
        <main>
          <LanguageFeatures />
          <PlatformFeatures />
        </main>
      </div>
    </Layout>
  );
}
