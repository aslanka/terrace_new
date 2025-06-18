import React, { useState, useEffect } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Home.css";

const chefQuotes = [
  {
    name: "Chef Aria Monroe",
    quote: "Cooking is an art. We just add flavor to your story.",
    image:
      "https://dominoarts.com/wp-content/uploads/2017/10/00-thumbnail-Harris-Food-Group.jpg",
  },
  {
    name: "Chef Julian Rivera",
    quote: "Every brunch should feel like a warm Sunday hug.",
    image:
      "https://i.pinimg.com/236x/1f/1c/8c/1f1c8ce42506a217612db6d7e5c8d999.jpg",
  },
  {
    name: "Chef Lila Bennett",
    quote: "We use seasonal, local ingredients to create timeless joy.",
    image:
      "https://i.pinimg.com/236x/cd/a2/a2/cda2a2c9e23b631814dda8ea5ea4e073.jpg",
  },
];

const customerTestimonials = [
  { name: "John Smith", quote: "The ambiance is incredible" },
  { name: "Ava Thompson", quote: "Best brunch I've ever had, period." },
  { name: "Daniel Carter", quote: "The peach bellini is heavenly." },
];

function Home() {
  const [currentChef, setCurrentChef] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChef((prev) => (prev + 1) % chefQuotes.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home">
      <section className="hero">
        <h1>Welcome to Terrance Kitchen</h1>
        <p>Experience gourmet magic from our world-class chefs.</p>
      </section>

      <section className="about-section">
  <div className="about-text">
    <h2>Durham's Favorite Brunch Restaurant!</h2>
    <p>
      Look no further, you’ve found the best brunch restaurant in RTP! Terrance Kitchen is serving up breakfast favorites and sandwiches in our cozy, family-friendly diner environment.
    </p>
    <p>
      We welcome guests of all ages and walks of life for both breakfast and lunch. We specialize in serving large parties, so bring your family and friends and come down to eat with us!
    </p>
  </div>

  <div className="hours-card">
    <h3>Hours</h3>
    <ul className="hours-list">
      <li><strong>Mon:</strong> 8am – 2pm</li>
      <li><em>Tue: Closed</em></li>
      <li><strong>Wed:</strong> 8am – 2pm</li>
      <li><strong>Thu:</strong> 8am – 2pm</li>
      <li><strong>Fri:</strong> 8am – 2pm</li>
      <li><strong>S&S:</strong> 8am – 3pm</li>
    </ul>
    <button className="reserve-btn">Reserve a Table</button>
  </div>
</section>








<section className="brunch-experience">

<div className="brunch-text">
    <h2>The Brunch Experience</h2>
    <p>
      Imagine golden sunlight, clinking glasses, and laughter over handcrafted dishes.
      Brunch at Terrance Kitchen is more than a meal — it’s a moment.
    </p>
  </div>


  <div className="brunch-image">
    <img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=500&q=80" alt="Brunch table" />
  </div>

 
</section>

<section className="chef-quotes">
        <h2>What Our Chefs Say</h2>
        <div className="chef-card fade-in">
          <img src={chefQuotes[currentChef].image} />
          <blockquote>“{chefQuotes[currentChef].quote}”</blockquote>
          <p>- {chefQuotes[currentChef].name}</p>
        </div>
      </section>

<section className="gift-card-section">
  <div className="gift-card-image">
    <img src="https://i.etsystatic.com/16163633/r/il/ef51b7/2136889619/il_fullxfull.2136889619_lcr1.jpg" alt="Gift Card" />
  </div>

  <div className="gift-card-content">
    <h2>Make their day.</h2>
    <p>
      A Terrance Kitchen gift card is the perfect way to treat someone special to a warm welcome and an unforgettable dining experience.
    </p>
    <p>
      Choose the amount that fits the occasion, whether it’s a casual bite or a full Southern feast. Available for purchase in person or delivered instantly via email or text, our gift cards make last-minute gifting effortless.
    </p>
    <p>
      You can even schedule a digital delivery for a future date or time. And with no expiration date, they can savor their meal whenever the moment feels just right.
    </p>
    <button className="purchase-btn">Purchase</button>
  </div>
</section>



{/* <section className="gift-card-section">

<div className="gift-card-content">
    <h2>Make their day.</h2>
    <p>
      A Terrance Kitchen gift card is the perfect way to treat someone special to a warm welcome and an unforgettable dining experience.
    </p>
    <p>
      Choose the amount that fits the occasion, whether it’s a casual bite or a full Southern feast. Available for purchase in person or delivered instantly via email or text, our gift cards make last-minute gifting effortless.
    </p>
    <p>
      You can even schedule a digital delivery for a future date or time. And with no expiration date, they can savor their meal whenever the moment feels just right.
    </p>
    <button className="purchase-btn">Purchase</button>
  </div>

  <div className="gift-card-image">
    <img src="https://i.etsystatic.com/16163633/r/il/ef51b7/2136889619/il_fullxfull.2136889619_lcr1.jpg" alt="Gift Card" />
  </div>


</section> */}


      
{/* 
      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-carousel">
          <button
            className="arrow left"
            onClick={() =>
              setCurrentTestimonial(
                (prev) =>
                  (prev - 1 + customerTestimonials.length) %
                  customerTestimonials.length
              )
            }
          >
            <FaChevronLeft />
          </button>

          <div className="testimonial-card fade-in">
            <h3>“{customerTestimonials[currentTestimonial].quote}”</h3>
            <h1>- {customerTestimonials[currentTestimonial].name}</h1>
          </div>

          <button
            className="arrow right"
            onClick={() =>
              setCurrentTestimonial(
                (prev) => (prev + 1) % customerTestimonials.length
              )
            }
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="dots">
          {customerTestimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentTestimonial ? "active" : ""}`}
              onClick={() => setCurrentTestimonial(idx)}
            />
          ))}
        </div>
      </section> */}

      {/* <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          <h3>The ambiance is incredible</h3>
          <h1>-John Smith</h1>
        </div>
      </section> */}
    </main>
  );
}

export default Home;
