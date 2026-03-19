import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SuccessModal from "../components/common/SuccessModal";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Impact from "../components/home/Impact";
import Waitlist from "../components/home/Waitlist";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submittedEmail, setSubmittedEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        window.history.replaceState({}, document.title);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPRE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmittedEmail(formData.email);
        setIsModalOpen(true);
        // Reset form data after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        // Handle submission error (optional)
        console.error("Form submission failed");
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <Hero scrollToSection={scrollToSection} />
        <Features />
        <Impact />
        <FAQ />
        <Waitlist
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
        />
      </main>

      <Footer />
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        email={submittedEmail}
      />
    </div>
  );
};

export default Home;
