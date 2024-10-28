const logoLinkLists = [
  {
    image: "https://assets.dewacloud.com/dewacloud-docs/static/java_logo.webp",
    title: "Java",
    alt: "Java Logo",
    link: "/docs/java-center",
  },
  {
    image: "https://assets.dewacloud.com/dewacloud-docs/static/php_logo.webp",
    title: "PHP",
    alt: "PHP Logo",
    link: "/docs/php-center",
  },
  {
    image:
      "https://assets.dewacloud.com/dewacloud-docs/static/nodejs_logo.webp",
    title: "Node.js",
    alt: "Node.js Logo",
    link: "/docs/nodejs-center",
  },
  {
    image:
      "https://assets.dewacloud.com/dewacloud-docs/static/python_logo.webp",
    title: "Python",
    alt: "Python Logo",
    link: "/docs/python-center",
  },
  {
    image:
      "https://assets.dewacloud.com/dewacloud-docs/static/golang_logo.webp",
    title: "Golang",
    alt: "Golang Logo",
    link: "/docs/go-center",
  },
  {
    image: "https://assets.dewacloud.com/dewacloud-docs/static/ruby_logo.webp",
    title: "Ruby",
    alt: "Ruby Logo",
    link: "/docs/ruby-center",
  },
  {
    image:
      "https://assets.dewacloud.com/dewacloud-docs/static/dotnet_logo.webp",
    title: ".NET",
    alt: ".NET Logo",
    link: "/docs/net-core",
  },
  {
    image:
      "https://assets.dewacloud.com/dewacloud-docs/static/container_logo.webp",
    title: "Containers",
    alt: "Containers Logo",
    link: "/docs/container-types",
  },
  {
    image:
      "https://assets.dewacloud.com/dewacloud-docs/static/kubernetes_logo.webp",
    title: "Kubernetes",
    alt: "Kubernetes Logo",
    link: "/docs/kubernetes-cluster-overview",
  },
  {
    image:
      "https://assets.dewacloud.com/dewacloud-docs/static/databases_logo.webp",
    title: "Databases",
    alt: "Databases Logo",
    link: "/docs/database-hosting",
  },
  {
    image:
      "https://assets.dewacloud.com/dewacloud-docs/static/loadbalancer_logo.webp",
    title: "Load Balancers",
    alt: "Load Balancers Logo",
    link: "/docs/load-balancing",
  },
  {
    image:
      "https://assets.dewacloud.com/dewacloud-docs/static/elasticvps_logo.webp",
    title: "Elastic VPS",
    alt: "Elastic VPS Logo",
    link: "/docs/vps",
  },
  {
    image:
      "https://assets.dewacloud.com/dewacloud-docs/static/storage_logo.webp",
    title: "Storage",
    alt: "Storage Logo",
    link: "/docs/shared-storage-container",
  },
  {
    image: "https://assets.dewacloud.com/dewacloud-docs/static/cache_logo.webp",
    title: "Cache",
    alt: "Cache Logo",
    link: "/docs/memcached-caching-system",
  },
];

export default function LogoLinks() {
  return (
    <div className="logolinks">
      {logoLinkLists.map((logoLink, index) => (
        <a key={index} href={logoLink.link}>
          <div>
            <img src={logoLink.image} alt={logoLink.alt} />
          </div>
          <p>{logoLink.title}</p>
        </a>
      ))}
    </div>
  );
}
