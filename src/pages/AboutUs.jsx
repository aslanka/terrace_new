import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <main className="about-wrapper">
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>
          Rooted in southern warmth and culinary passion, Terrance Kitchen is more than just a brunch destination—it's a gathering place for unforgettable moments.
        </p>
      </section>

      <section className="about-section">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Chef preparing brunch"
          />
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            At Terrance Kitchen, our mission is to elevate everyday brunch into a refined celebration of flavor, community, and comfort. With seasonal ingredients, a touch of finesse, and heartfelt hospitality, we serve joy on every plate.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="value-card">
          <h3>Locally Sourced</h3>
          <p>
            We proudly support local farmers and artisans, crafting each dish from the freshest ingredients North Carolina has to offer.
          </p>
        </div>
        <div className="value-card">
          <h3>Elegant Atmosphere</h3>
          <p>
            Our interiors blend timeless design with soft natural light, setting the stage for both casual conversations and special celebrations.
          </p>
        </div>
        <div className="value-card">
          <h3>Thoughtful Service</h3>
          <p>
            From the greeting at the door to the last sip of coffee, we believe every guest deserves a warm, memorable experience.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
