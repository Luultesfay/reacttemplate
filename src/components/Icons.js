import fa from "../images/Facebookicon.png";
import tw from "../images/Twittericon.png";
import git from "../images/GitHubicon.png";
import ins from "../images/Instagram Icon.png";

const Icons = () => {
  return (
    <div className="Font_Awesome">
      <img src={fa} alt="facebook" width="25px" height="25px" />
      <img src={git} alt="Github" width="25px" height="25px" />
      <img src={tw} alt="facebook" width="25px" height="25px" />
      <img src={ins} alt="facebook" width="25px" height="25px" />
    </div>
  );
};
export default Icons;
