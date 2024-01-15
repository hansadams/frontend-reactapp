import NavBar from "../../components/NavBar";
import raley from "../../../assets/img/raley.jpg"
import hans from "../../../assets/img/hans.jpg"


export default function About() {
  return (
    <><NavBar />
        <main>
  <div className="container-fluid">
    <div className="row text-center justify-content-center align-items-center ">
      <div className="p-4 col-lg-8 col-md-11">
        <h1>THIS IS WHERE WE COME <span className="red">TOGETHER.</span></h1>
        <p>
        In the heart of Singapore, Raley and Hans's transformative journey unfolded at the "Generation SG Bootcamp," where their convergence sparked a dynamic partnership that birthed Frontend Fitness. Raley, a fitness-oriented financial consultant, and Hans, a tech-savvy gym manager, envisioned a unique space during their bootcamp days – a gym tailored for tech professionals recognizing the physical toll of coding. </p>
        <p>
        Graduating from the bootcamp, the duo courageously ventured into entrepreneurship, pooling their diverse skills to create Frontend Fitness. This sanctuary surpassed its initial fitness center concept, evolving into a holistic space equipped with tech workspaces, workshops, and a supportive community. Frontend Fitness stands as a testament to the potential unleashed when passionate minds collaborate to redefine the intersection of technology and well-being within the bustling tech community.
        </p>
      </div>
    </div>
      <div className="row justify-content-center text-center padd ">
        <div className="col-md-4">
          <img className="profile" src={raley} />
          <h1>RALEY</h1>
          <h3>Full Stack Developer</h3>
          <p>
          Meet Raley, a dynamic professional whose journey from financial consulting to software development showcases his adaptability and passion for innovation.
Driven by a desire to explore the intersection of finance and technology, Raley made a bold career pivot into software development. Armed with a curious mind and a determination to master new skills, he immersed himself in coding languages, development frameworks, and the latest technological trends.
</p><p>As a software developer, Raley thrived in dynamic environments, collaborating with cross-functional teams to deliver cutting-edge solutions. His innovative mindset and dedication to continuous learning positioned him as a valuable asset in the fast-paced world of software development
          </p>
        </div>
        <div className="col-md-4">
          <img className="profile" src={hans} />
          <h1>HANS</h1>
          <h3>Full Stack Developer</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cupiditate, cumque error deserunt deleniti commodi optio numquam
            officiis! Animi, similique. Cum laborum modi fuga quos quasi quo
            enim suscipit fugiat? Tempora?
          </p>
        </div>
      </div>
  </div></main>
    </>
  );
}