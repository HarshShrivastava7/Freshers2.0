import "./Events.css";
import Fade from "react-reveal/Fade";
import miss from "./miss.jpg";
// import TeamCard from "./TeamCard";

// const customStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "center",
//   backgroundColor: "#000000",
//   height: "100vh",
// };

function Events() {
    return (
      <>
        <div className="events">
          <Fade top cascade duration={1500}>
            <h1>Highlights</h1>
          </Fade>
          <Fade right cascade duration={1200}>
            <section>
              <h2 className="h2Event">28 January</h2>
              <div class="grid-wrapper">
                <article className="articleEvent">
                  <h3 className="h3Event">DJ</h3>
                  <p className="pEvent">
                    Mst naach gaana karenge SEXY EKDUM. 🕺🏻💃🏻
                  </p>
                </article>
                <article className="articleEvent">
                  <h3 className="h3Event">Piro Photographer</h3>
                  <p className="pEvent">
                    Sab apni apni CRUSH ke saath photu jarur lelena 🌝
                  </p>
                </article>
                <article className="articleEvent">
                  <h3 className="h3Event">Games</h3>
                  <p className="pEvent">Bohot Saare </p>
                </article>
                <article className="articleEvent">
                  <h3 className="h3Event">Mr & Miss Freshers</h3>
                  <p className="pEvent">Yaha bhi Competition... 🤡 </p>
                  <img
                    className="imgEvent"
                    src={miss}
                    alt="Black and white photo of a lake"
                  />
                </article>
                <article className="articleEvent">
                  <h3 className="h3Event">DTMKC</h3>
                  <p className="pEvent"> Aur kya chahiye bhayyy... </p>
                </article>
                <article className="articleEvent">
                  <h3 className="h3Event">TBKB</h3>
                  <p className="pEvent">
                    Bharosa rakh party me banda/bandi set ho hi jayegi. 👩‍❤️‍💋‍👩{" "}
                  </p>
                </article>
                <article className="articleEvent">
                  <h3 className="h3Event">SOH</h3>
                  <p className="pEvent">
                    Guess its full form.{" "}
                    <i>(jo guess kar liya uske liye prize bhi hai 😈)</i>{" "}
                  </p>
                </article>
                <article className="articleEvent">
                  <h3 className="h3Event">THE VIBE</h3>
                  <p className="pEvent">
                    4th Floor, IP Grand, above Smart Bazaar, opposite IP SIGRA
                    Shopping Mall, Naipokhari, Sigra, Varanasi
                  </p>
                  <iframe
                    className="imgEvent2"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.6254025952335!2d82.9887783148479!3d25.31678678384057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e315dfd80a775%3A0x5993c6d244640b6a!2sThe%20Vibe%20Varanasi!5e0!3m2!1sen!2sin!4v1673644313521!5m2!1sen!2sin"
                    // width="450"
                    // height="450"
                    // style="border:0;"
                    // style={{ border: 0 }}
                    allowfullscreen
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </article>
              </div>
            </section>
          </Fade>
        </div>
      </>
    );
}

export default Events;
