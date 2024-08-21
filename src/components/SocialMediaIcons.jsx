import linkedinIcon from '../assets/linkedin.png';
import facebookIcon from '../assets/facebook.png';
import githubIcon from '../assets/github.png';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/pauline-justine-capacia-71b528281/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebookIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/pchtrees"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={githubIcon} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
