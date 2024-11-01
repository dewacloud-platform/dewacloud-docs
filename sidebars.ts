import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Quickstart",
      link: {
        type: "generated-index",
        slug: "/quickstart",
      },
      items: [{ type: "autogenerated", dirName: "quickstart" }],
    },
    {
      type: "category",
      label: "Platform Overview",
      link: {
        type: "generated-index",
        slug: "/platform-overview",
      },
      items: [{ type: "autogenerated", dirName: "platform-overview" }],
    },
    {
      type: "category",
      label: "Containers",
      link: {
        type: "generated-index",
        slug: "/containers",
      },
      items: [{ type: "autogenerated", dirName: "containers" }],
    },
    {
      type: "category",
      label: "Environment Management",
      link: {
        type: "generated-index",
        slug: "/environment-management",
      },
      items: [{ type: "autogenerated", dirName: "environment-management" }],
    },
    {
      type: "category",
      label: "Deployment",
      link: {
        type: "generated-index",
        slug: "/deployment",
      },
      items: [{ type: "autogenerated", dirName: "deployment" }],
    },
    {
      type: "category",
      label: "Application Settings",
      link: {
        type: "generated-index",
        slug: "/application-settings",
      },
      items: [{ type: "autogenerated", dirName: "application-settings" }],
    },
    {
      type: "category",
      label: "Development Tools",
      link: {
        type: "generated-index",
        slug: "/development-tools",
      },
      items: [
        {
          type: "category",
          label: "SSH",
          link: {
            type: "generated-index",
            slug: "/ssh",
          },
          items: [{ type: "autogenerated", dirName: "development-tools/ssh" }],
        },
        {
          type: "category",
          label: "API & CLI",
          link: {
            type: "generated-index",
            slug: "/api-cli",
          },
          items: [
            "development-tools/api-and-cli/api-overview",
            {
              type: "link",
              label: "API Methods",
              href: "https://docs.jelastic.com/api/",
            },
            {
              type: "category",
              label: "Platform CLI",
              link: {
                type: "generated-index",
                slug: "/platform-cli",
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "development-tools/api-and-cli/platform-cli",
                },
              ],
            },
            "development-tools/api-and-cli/createenv-params",
          ],
        },
        {
          type: "category",
          label: "Cloud Scripting & JPS",
          link: {
            type: "generated-index",
            slug: "/cloud-scripting-jps",
          },
          items: [
            {
              type: "link",
              label: "Cloud Scripting",
              href: "https://docs.cloudscripting.com/",
            },
            "development-tools/cloud-scripting-and-jps/jps-overview",
            "development-tools/cloud-scripting-and-jps/application-manifest",
            "development-tools/cloud-scripting-and-jps/marketplace",
          ],
        },
        "development-tools/ftpftps-support",
        {
          type: "category",
          label: "WebSockets",
          link: {
            type: "generated-index",
            slug: "/websockets",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "development-tools/websockets",
            },
          ],
        },
        {
          type: "category",
          label: "Mailings",
          link: {
            type: "generated-index",
            slug: "/mailings",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "development-tools/mailings",
            },
          ],
        },
        "development-tools/remote-access-via-webdav",
      ],
    },
    {
      type: "category",
      label: "Java",
      link: {
        type: "generated-index",
        slug: "/java",
      },
      items: [
        "java/java-dev-center",
        "java/java-versions",
        {
          type: "category",
          label: "Java App Servers",
          link: {
            type: "generated-index",
            slug: "/java-app-servers",
          },
          items: [
            {
              type: "category",
              label: "Tomcat and TomEE",
              link: {
                type: "generated-index",
                slug: "/tomcat-tomee",
              },
              items: [
                "java/java-app-servers/tomcat-and-tomee/tomcat-server",
                "java/java-app-servers/tomcat-and-tomee/tomee-server",
                {
                  type: "ref",
                  label: "Tomcat and TomEE Variables",
                  id: "environment-management/environment-variables/custom-environment-variables",
                },
                "java/java-app-servers/tomcat-and-tomee/tomcat-clustering",
                "java/java-app-servers/tomcat-and-tomee/tomcat-security",
                {
                  type: "ref",
                  label: "Multiple Domains for Tomcat",
                  id: "application-settings/domain-name-management/multiple-domains-for-tomcat",
                },
              ],
            },
            {
              type: "category",
              label: "Jetty",
              link: {
                type: "generated-index",
                slug: "/jetty",
              },
              items: [
                "java/java-app-servers/jetty/jetty-server",
                {
                  type: "ref",
                  label: "Jetty Variables",
                  id: "environment-management/environment-variables/custom-environment-variables",
                },
              ],
            },
            {
              type: "category",
              label: "GlassFish",
              link: {
                type: "generated-index",
                slug: "/glassfish-server",
              },
              items: [
                "java/java-app-servers/glassfish/glassfish-server",
                {
                  type: "ref",
                  label: "GlassFish Environment Variables",
                  id: "environment-management/environment-variables/custom-environment-variables",
                },
                "java/java-app-servers/glassfish/glassfish-clustering",
                {
                  type: "ref",
                  label: "Multiple Domains for GlassFish",
                  id: "application-settings/domain-name-management/multiple-domains-for-glassfish",
                },
              ],
            },
            "java/java-app-servers/payara",
            {
              type: "category",
              label: "WildFly",
              link: {
                type: "generated-index",
                slug: "/wildfly",
              },
              items: [
                "java/java-app-servers/wildfly/wildfly-server",
                "java/java-app-servers/wildfly/wildfly-managed-domain",
                "java/java-app-servers/wildfly/building-wildfly-docker-image",
              ],
            },
            "java/java-app-servers/spring-boot",
            "java/java-app-servers/java-engine-server",
          ],
        },
        "java/java-app-server-configuration",
        "java/java-garbage-collector",
        {
          type: "category",
          label: "Maven Build Node",
          link: {
            type: "generated-index",
            slug: "/maven-build-node",
          },
          items: [{ type: "autogenerated", dirName: "java/build-node" }],
        },
        {
          type: "category",
          label: "Java Apps Specifications",
          link: {
            type: "generated-index",
            slug: "/java-apps-specifications",
          },
          items: [
            { type: "autogenerated", dirName: "java/java-apps-specifications" },
          ],
        },
        "java/java-tutorials",
      ],
    },
    {
      type: "category",
      label: "PHP",
      link: {
        type: "generated-index",
        slug: "/php",
      },
      items: [
        "php/php-dev-center",
        "php/php-versions",
        {
          type: "category",
          label: "PHP App Servers",
          link: {
            type: "generated-index",
            slug: "/php-app-servers",
          },
          items: [{ type: "autogenerated", dirName: "php/php-app-servers" }],
        },
        "php/php-app-server-configuration",
        "php/zdt-deployment-for-php",
        {
          type: "category",
          label: "PHP Apps Specifications",
          link: {
            type: "generated-index",
            slug: "/php-apps-specifications",
          },
          items: [
            { type: "autogenerated", dirName: "php/php-apps-specifications" },
          ],
        },
        "php/php.ini-security-settings",
        "php/composer-dependency-manager",
        {
          type: "ref",
          id: "memcached/php-sessions-in-memcached",
          label: "PHP Sessions Clustering",
        },
        "php/php-tutorials",
      ],
    },
    {
      type: "category",
      label: "Node.js",
      link: {
        type: "generated-index",
        slug: "/node-js",
      },
      items: [{ type: "autogenerated", dirName: "node.js" }],
    },
    {
      type: "category",
      label: "Ruby",
      link: {
        type: "generated-index",
        slug: "/ruby",
      },
      items: [{ type: "autogenerated", dirName: "ruby" }],
    },
    {
      type: "category",
      label: "Python",
      link: {
        type: "generated-index",
        slug: "/python",
      },
      items: [{ type: "autogenerated", dirName: "python" }],
    },
    {
      type: "category",
      label: "Go Lang",
      link: {
        type: "generated-index",
        slug: "/go-lang",
      },
      items: [{ type: "autogenerated", dirName: "go-lang" }],
    },
    {
      type: "category",
      label: "Windows and .NET",
      link: {
        type: "generated-index",
        slug: "/windows-dotnet",
      },
      items: [{ type: "autogenerated", dirName: "windows-and-.net" }],
    },
    {
      type: "category",
      label: "Databases",
      link: {
        type: "generated-index",
        slug: "/databases",
      },
      items: [
        {
          type: "category",
          label: "Database Hosting",
          link: {
            type: "generated-index",
            slug: "/databases-hosting",
          },
          items: [
            { type: "autogenerated", dirName: "databases/database-hosting" },
          ],
        },
        {
          type: "category",
          label: "MySQL/MariaDB/Percona",
          link: {
            type: "generated-index",
            slug: "/mysql-mariadb-percona",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "databases/mysqlmariadbpercona",
            },
          ],
        },
        {
          type: "category",
          label: "PostgreSQL",
          link: {
            type: "generated-index",
            slug: "/postgresql",
          },
          items: [
            {
              type: "category",
              label: "Connection to Applications",
              link: {
                type: "generated-index",
                slug: "/connection-to-applications",
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "databases/postgresql/connection-to-applications",
                },
              ],
            },
            {
              type: "category",
              label: "High Availability (Cluster)",
              link: {
                type: "generated-index",
                slug: "/high-availability-cluster",
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "databases/postgresql/high-availability-(cluster)",
                },
              ],
            },
            {
              type: "ref",
              label: "Backup/Restore Add-On",
              id: "databases/mysqlmariadbpercona/backuprestore-add-on",
            },
            "databases/postgresql/encryption-in-transit-add-on",
            "databases/postgresql/remote-access-to-postgresql",
            "databases/postgresql/dump-importexport-to-postgresql",
            "databases/postgresql/postgis-extension",
            "databases/postgresql/hasura-graphql-installation",
          ],
        },
        {
          type: "category",
          label: "MongoDB",
          link: {
            type: "generated-index",
            slug: "/mongodb",
          },
          items: [{ type: "autogenerated", dirName: "databases/mongodb" }],
        },
        {
          type: "category",
          label: "Redis",
          link: {
            type: "generated-index",
            slug: "/redis",
          },
          items: [
            "databases/redis/redis-overview",
            {
              type: "category",
              label: "High Availability (Cluster)",
              link: {
                type: "generated-index",
                slug: "/redis-high-availability-cluster",
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "databases/redis/high-availability-(cluster)",
                },
              ],
            },
            {
              type: "ref",
              label: "Backup/Restore Add-On",
              id: "databases/mysqlmariadbpercona/backuprestore-add-on",
            },
            "databases/redis/encryption-in-transit-add-on",
            {
              type: "ref",
              label: "Diaspora* Tutorial",
              id: "ruby/ruby-tutorials/diaspora",
            },
          ],
        },
        {
          type: "category",
          label: "Couchbase",
          link: {
            type: "generated-index",
            slug: "/couchbase",
          },
          items: [{ type: "autogenerated", dirName: "databases/couchbase" }],
        },
        {
          type: "category",
          label: "OpenSearch",
          link: {
            type: "generated-index",
            slug: "/opensearch",
          },
          items: [{ type: "autogenerated", dirName: "databases/opensearch" }],
        },
      ],
    },
    {
      type: "category",
      label: "Load Balancers",
      link: {
        type: "generated-index",
        slug: "/load-balancers",
      },
      items: [{ type: "autogenerated", dirName: "load-balancers" }],
    },
    {
      type: "category",
      label: "Kubernetes Hosting",
      link: {
        type: "generated-index",
        slug: "/kubernetes-hosting",
      },
      items: [{ type: "autogenerated", dirName: "kubernetes-hosting" }],
    },
    {
      type: "category",
      label: "Elastic VPS",
      link: {
        type: "generated-index",
        slug: "/elastic-vps",
      },
      items: [
        {
          type: "category",
          label: "Elastic VPS Overview",
          link: {
            type: "generated-index",
            slug: "/elastic-vps-overview",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "elastic-vps/elastic-vps-overview",
            },
          ],
        },
        {
          type: "category",
          label: "Elastic VPS Management",
          link: {
            type: "generated-index",
            slug: "/elastic-vps-management",
          },
          items: [
            "elastic-vps/elastic-vps-management/vps-configuration",
            "elastic-vps/elastic-vps-management/linux-vps-access-via-ssh-gate",
            "elastic-vps/elastic-vps-management/linux-vps-access-via-public-ip",
            {
              type: "ref",
              label: "Windows VPS Access via RDP",
              id: "windows-and-.net/windows-rd-access",
            },
          ],
        },
        {
          type: "category",
          label: "Elastic VPS Use Cases",
          link: {
            type: "generated-index",
            slug: "/elastic-vps-use-cases",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "elastic-vps/linux-vps-use-cases",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Data Storage Container",
      link: {
        type: "generated-index",
        slug: "/data-storage-container",
      },
      items: [{ type: "autogenerated", dirName: "data-storage-container" }],
    },
    {
      type: "category",
      label: "Memcached",
      link: {
        type: "generated-index",
        slug: "/memcached",
      },
      items: [{ type: "autogenerated", dirName: "memcached" }],
    },
    {
      type: "category",
      label: "Account and Pricing",
      link: {
        type: "generated-index",
        slug: "/account-and-pricing",
      },
      items: [{ type: "autogenerated", dirName: "account-and-pricing" }],
    },
  ],
};

export default sidebars;
