import {
  GolangLogoSVG,
  JavaLogoSVG,
  NETLogoSVG,
  NodeJsLogoSVG,
  PHPLogoSVG,
  PythonLogoSVG,
  RubyLogoSVG,
} from "../utils/svg/LandingPageSVGs";

import ArrowRight from "../utils/svg/ArrowRight";

type LanguageFeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  link: string;
};

const LanguageFeatureList: LanguageFeatureItem[] = [
  {
    title: "Java",
    link: "/docs/java-overview",
    Svg: JavaLogoSVG,
  },
  {
    title: "PHP",
    link: "/docs/php-overview",
    Svg: PHPLogoSVG,
  },
  {
    title: "Node.Js",
    link: "/docs/nodejs-overview",
    Svg: NodeJsLogoSVG,
  },
  {
    title: "Ruby",
    link: "/docs/ruby-overview",
    Svg: RubyLogoSVG,
  },
  {
    title: "Python",
    link: "/docs/python-overview",
    Svg: PythonLogoSVG,
  },
  {
    title: "Golang",
    link: "/docs/golang-overview",
    Svg: GolangLogoSVG,
  },
  {
    title: ".NET",
    link: "/docs/dotnet-overview",
    Svg: NETLogoSVG,
  },
];

function LanguageFeature({ title, Svg, link }: LanguageFeatureItem) {
  return (
    <div
      className="language-feature feature-container"
      onClick={() => {
        window.location.assign(link);
      }}
    >
      <div className="language-feature__icon">
        <Svg className="featureSvg" role="img" />
      </div>
      <div className="language-feature__title">
        <p>{title}</p>
      </div>

      <div className="language-feature__link">
        <a href={link}>Learn more</a>
      </div>
      <div className="language-feature__button">
        <ArrowRight />
      </div>
    </div>
  );
}

export default function LanguageFeatures(): JSX.Element {
  return (
    <section id="language-features">
      <h1>
        Dokumentasi, Spesifikasi & Tutorial <em>App Server</em>
      </h1>
      <div className="language-features">
        {LanguageFeatureList.map((props, idx) => (
          <LanguageFeature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
