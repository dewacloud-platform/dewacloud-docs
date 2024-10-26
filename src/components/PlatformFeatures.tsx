type PlatformFeatureItem = {
  title: string;
  description: string;
  link: string;
};

const environmentFeatureList: PlatformFeatureItem[] = [
  {
    title: "Cloudlets",
    description:
      "Cloudlet adalah unit sumber daya komputasi fleksibel di Dewacloud, mencakup CPU, RAM, dan disk.",
    link: "/docs/cloudlet",
  },
  {
    title: "Container",
    description:
      "Container di Dewacloud menyediakan lingkungan terisolasi untuk aplikasi yang memungkinkan deployment yang cepat dan skalabilitas mudah.",
    link: "/docs/container-types",
  },
  {
    title: "Data Storage Container",
    description:
      "Data Storage Container di Dewacloud adalah solusi efisien untuk penyimpanan dan pengendalian data, memungkinkan berbagi file dan konfigurasi di berbagai lingkungan.",
    link: "/docs/data-storage-container-overview/",
  },
  {
    title: "Database",
    description:
      "Database di Dewacloud adalah solusi penyimpanan yang kuat untuk aplikasi Anda, menawarkan performa tinggi dan skalabilitas.",
    link: "/docs/db-hosting",
  },
  {
    title: "Auto Vertical Scaling",
    description:
      "Auto Vertical Scaling di Dewacloud memungkinkan aplikasi Anda menyesuaikan sumber daya secara otomatis sesuai kebutuhan beban kerja.",
    link: "/docs/automatic-vertical-scaling",
  },
  {
    title: "Auto Horizontal Scaling",
    description:
      "Auto Horizontal Scaling di Dewacloud memungkinkan aplikasi Anda secara otomatis menambah atau mengurangi jumlah instance berdasarkan permintaan beban kerja.",
    link: "/docs/automatic-horizontal-scaling",
  },
  {
    title: "Auto Clustering",
    description:
      "Auto Clustering di Dewacloud adalah solusi otomatis untuk mengonfigurasi cluster aplikasi, memastikan ketersediaan data dan akses cepat. Auto Clustering mendukung berbagai kategori aplikasi, termasuk server aplikasi, database SQL dan NoSQL, serta server penyimpanan.",
    link: "/docs/what-is-auto-clustering/",
  },
  {
    title: "Load Balancers",
    description:
      "Load Balancers di Dewacloud adalah solusi untuk mendistribusikan traffic jaringan secara efisien ke beberapa instance aplikasi, memastikan ketersediaan dan performa optimal.",
    link: "/docs/load-balancing",
  },
];

const developmentToolsFeatureList: PlatformFeatureItem[] = [
  {
    title: "SSH",
    description:
      "SSH di Dewacloud memungkinkan Anda untuk mengakses dan mengelola instance aplikasi dengan aman melalui koneksi terenkripsi.",
    link: "/docs/ssh-gate",
  },
  {
    title: "API & CLI",
    description:
      "API & CLI di Dewacloud memungkinkan pengembang untuk mengautomasi siklus hidup aplikasi dan memperluas fungsionalitas platform. Dengan alat ini, Anda dapat membuat lingkungan, menerapkan aplikasi, dan menjalankan perintah langsung dari terminal, meningkatkan efisiensi dan kontrol dalam pengembangan aplikasi Anda.",
    link: "docs/api-overview",
  },
  {
    title: "WebSockets",
    description:
      "WebSockets di Dewacloud adalah teknologi web yang memungkinkan koneksi penuh-dupleks antara klien dan server, memungkinkan pertukaran pesan dua arah secara instan dengan latensi rendah.",
    link: "/docs/websockets-support",
  },
  {
    title: "FTP/FTPS",
    description:
      "FTP/FTPS Support di Dewacloud memungkinkan transfer file yang aman dan efisien antara klien dan server. Dengan dukungan FTP dan FTPS, Anda dapat mengelola file aplikasi dengan mudah, menjamin keamanan data selama proses transfer.",
    link: "/docs/ftp-ftps-support",
  },
  {
    title: "Remote Access",
    description:
      "Remote Access di Dewacloud melalui WebDAV memungkinkan Anda untuk mengelola dan memperbarui file aplikasi secara remote dengan mudah.",
    link: "/docs/remote-access-via-webdav",
  },
  {
    title: "Mailings",
    description:
      "Mailings di Dewacloud memungkinkan Anda untuk mengelola dan mengirim email secara efisien langsung dari aplikasi Anda. Dengan fitur ini, Anda dapat mengotomatisasi pengiriman pesan, notifikasi, dan pembaruan kepada pengguna, meningkatkan interaksi dan keterlibatan.",
    link: "/docs/mailings",
  },
  {
    title: "Cloud Scripting & JPS",
    description:
      "Cloud Scripting dan JPS di Dewacloud menyediakan alat untuk mengotomatiskan manajemen aplikasi dan lingkungan cloud. Dengan fitur ini, Anda dapat menyederhanakan proses pengaturan dan distribusi aplikasi, memungkinkan instalasi yang cepat dan efisien. Pelajari cara memanfaatkan Cloud Scripting dan JPS untuk mengoptimalkan pengelolaan aplikasi Anda.",
    link: "/docs/jps-overview",
  },
  {
    title: "Account Collaboration",
    description:
      "Account Collaboration di Dewacloud memungkinkan tim untuk bekerja sama secara efisien dalam mengelola sumber daya cloud.",
    link: "/docs/account-collaboration",
  },
];

const deploymentToolsFeatureList: PlatformFeatureItem[] = [
  {
    title: "Deployment Guide",
    description:
      "Deployment Guide di Dewacloud menyediakan panduan untuk membantu Anda dalam proses deployment aplikasi.",
    link: "/docs/deployment-guide",
  },
  {
    title: "Deployment Manager",
    description:
      "Deployment Manager di Dewacloud adalah alat yang mempermudah pengelolaan aplikasi untuk proses deployment ke cloud environment Anda. Manfaatkan alat ini untuk mengoptimalkan manajemen aplikasi Anda dan memastikan penyebaran yang efisien.",
    link: "/docs/deployment-manager",
  },
  {
    title: "Zero Code Change",
    description:
      "Zero-Code Change di Dewacloud memungkinkan Anda melakukan perubahan pada aplikasi dan konfigurasi tanpa memerlukan modifikasi kode sumber. Dengan pendekatan ini, proses pengembangan dan deployment menjadi lebih efisien dan aman, memungkinkan tim Anda fokus pada inovasi dan pengembangan fitur baru.",
    link: "/docs/zero-code-change",
  },
  {
    title: "Git & SVN",
    description:
      "Git & SVN di Dewacloud memberikan dukungan penuh untuk pengelolaan versi aplikasi melalui integrasi dengan repositori Git dan SVN.  Dengan menggunakan Git dan SVN, tim Anda dapat bekerja secara kolaboratif, melacak perubahan, dan memastikan pengelolaan kode yang efisien, sehingga mempercepat proses pengembangan dan meningkatkan produktivitas.",
    link: "/docs/auto-deploy-overview",
  },
  {
    title: "Git Push Deploy",
    description:
      "Git Push Deploy di Dewacloud memungkinkan Anda untuk melakukan deployment aplikasi secara otomatis dengan hanya menggunakan perintah Git.",
    link: "/docs/git-push-deploy",
  },
  {
    title: "SSH Access to Git Repository",
    description:
      "SSH Access to Git Repository di Dewacloud memungkinkan Anda untuk mengakses repositori Git melalui koneksi SSH yang aman.",
    link: "/docs/git-ssh",
  },
  {
    title: "Deployment Apps via Gitblit",
    description:
      "Deployment Apps via Gitbit di Dewacloud memungkinkan Anda untuk menyebarkan aplikasi dengan mudah menggunakan platform Gitbit.",
    link: "/docs/gitblit",
  },
];

function PlatformFeature({ title, description, link }: PlatformFeatureItem) {
  return (
    <a className="platform-feature feature-container" href={link}>
      <div className="platform-feature__title">
        <p>{title}</p>
      </div>
      <div className="platform-feature__description">
        <p>{description}</p>
      </div>
      <div className="platform-feature__link">
        <a href={link}>Learn more</a>
      </div>
    </a>
  );
}

export default function PlatformFeatures(): JSX.Element {
  return (
    <>
      <section id="environment-features">
        <h1>
          Pelajari Cara Setup & Management <em>Environment</em>
        </h1>
        <div className="platform-features">
          {environmentFeatureList.map((props, idx) => (
            <PlatformFeature key={idx} {...props} />
          ))}
        </div>
      </section>

      <section id="development-tools-features">
        <h1>
          Pelajari Tentang <em>Deployment Tools</em>
        </h1>
        <div className="platform-features">
          {developmentToolsFeatureList.map((props, idx) => (
            <PlatformFeature key={idx} {...props} />
          ))}
        </div>
      </section>

      <section id="deployment-tools-features">
        <h1>
          Pelajari Tentang <em>Deployment Tools</em>
        </h1>
        <div className="platform-features">
          {deploymentToolsFeatureList.map((props, idx) => (
            <PlatformFeature key={idx} {...props} />
          ))}
        </div>
      </section>
    </>
  );
}
