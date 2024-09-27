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
import DotnetLogo from "../utils/svg/DotnetLogo";

type LanguageFeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  link: string;
};

const LanguageFeatureList: LanguageFeatureItem[] = [
  {
    title: "Java",
    link: "/docs/java-center",
    Svg: JavaLogoSVG,
  },
  {
    title: "PHP",
    link: "/docs/php-center",
    Svg: PHPLogoSVG,
  },
  {
    title: "Node.Js",
    link: "/docs/nodejs-center",
    Svg: NodeJsLogoSVG,
  },
  {
    title: "Ruby",
    link: "/docs/ruby-center",
    Svg: RubyLogoSVG,
  },
  {
    title: "Python",
    link: "/docs/python-center",
    Svg: PythonLogoSVG,
  },
  {
    title: "Golang",
    link: "/docs/go-center",
    Svg: GolangLogoSVG,
  },
  {
    title: ".NET",
    link: "/docs/net-core",
    Svg: DotnetLogo,
  },
];

function LanguageFeature({ title, Svg, link }: LanguageFeatureItem) {
  return (
    <a className="language-feature feature-container" href={link}>
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
    </a>
  );
}

export default function LLanguageFeatures(): JSX.Element {
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
