import NavBar from "./components/NavBar";
import trailer from '../assets/vid/trailer.mp4'
import curl from '../assets/img/curl.jpg'


export default function Main() {
  return (
    <><NavBar/>
        <>
  <header className="home-hero container-fluid vh-100">
    <div className="row p-0 align-items-center">
      <div className="col-12 col-lg-8 col-xxl-10 p-0">
            <video
              src={trailer}
              autoPlay
              loop
              muted
            />
          </div>
          <div className="col-12 col-lg-4 col-xxl-2 py-4 px-3 ">

            <h1>LOOK GOOD, FEEL GOOD.</h1>
            <h2>
              More than just a place to work out; we integrate technology and fitness.
            </h2>
            <a href="join">
              <button type="button" className="btn btn-black">
                Sign up
              </button>
            </a>
            </div>
          </div>

  </header>
  <div className="container-fluid  justify-content-center">
    <div className="row text-center justify-content-center section">
      <div className="col-md-8">
        <h1>HIT YOUR PERSONAL BEST.</h1>
        <p>
          Are you a software developer looking to optimize both your code and
          your physique? Welcome to a fitness haven tailored exclusively for
          tech-savvy individuals like you. At Frontend Fitness, we've created a
          unique haven that understands the demands of your coding journey and
          empowers you to excel not only in the digital realm but also in your
          physical well-being.
        </p>
        <a href="join">
          <button type="button" className="btn">
            Sign up
          </button>
        </a>
      </div>
    </div>
    <div className="row text-center justify-content-center">
      <div className="col-md-10">
        <img className="feature" src={curl} />
      </div>
    </div>
  </div>
  <div className="container-fluid ">
    <div className="row text-center justify-content-center section">
      <div className="col-md-8">
        <h1>BRAINS &amp; BRAWN.</h1>
        <p>
          We recognize that your long hours spent in front of a screen demand a
          health and wellness sanctuary that caters to your unique needs. Our
          cutting-edge facility is the ultimate destination for software
          developers seeking a balanced lifestyle. Whether you're a seasoned
          programmer or a code enthusiast, we're here to support your journey
          towards peak physical and mental performance.
        </p>
        <a href="join">
          <button type="button" className="btn">
            Sign up
          </button>
        </a>
      </div>
    </div>
    <div className="row text-center justify-content-center">
      <div className="col-md-10">
        <img className="feature" src="img/bench.jpg" />
      </div>
    </div>
  </div>
  <div className="container-fluid section">
    <div className="row text-center justify-content-center">
      <div className="col-md-8">
        <h1>BOARD THE GAIN TRAIN.</h1>
        <p>
          Join us at Frontend Fitness and embark on a fitness experience like no
          other, where high-performance meets high-tech. It's time to code your
          way to a stronger, healthier, and more energized you. Let's break the
          code together!
        </p>
        <a href="join">
          <button type="button" className="btn">
            Sign up
          </button>
        </a>
      </div>
    </div>
  </div>
</>

    </>
  );
}