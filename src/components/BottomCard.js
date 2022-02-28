import ImageCard from "./ImageCard";
import Icons from "./Icons";
const Bottomcard = () => {
  return (
    <main>
      <div className="container">
        <div>
          <ImageCard />
        </div>
        <div className="container--card">
          <div>
            <h1>Laura Smith</h1>
            <h5>Frontend Developer</h5>
            <h6>laurasmith.website</h6>
          </div>
          <div className="btn">
            <button>Email</button>
            <button>LinkedIn</button>
          </div>
          <div className="container-paragraph">
            <h3>About</h3>
            <p>
              i am a frontend developer with a particular interest in making
              things simple and automating daily tasks.i try to keep up with
              security and best practice, and am always looking for new things
              to leaern.
            </p>
            <h3>Interests</h3>
            <p>
              Food expert.music scholar.Reader.Internet fantic .Bacon buff
              .Enterprenur.travel geek. poop culture ninja.coffee fanatic.
            </p>
          </div>
          <div>
            <Icons />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Bottomcard;
