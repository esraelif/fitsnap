"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // App Router için
import { FaComment, FaShareAlt } from "react-icons/fa";
import { FaUtensils, FaChartLine, FaBolt, FaBell } from "react-icons/fa";

import { faqData } from "../data/faq"; // FAQ verilerini import ediyoruz
import { steps } from "../data/steps";
import { testimonials } from "../data/tesatimonials";

export default function page() {
  const router = useRouter(); // Yönlendirme hook'u
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [showBlog, setShowBlog] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false); // FAQ bölümünü göstermek için state
  const [expandedPost, setExpandedPost] = useState(null);
  const [flippedCards, setFlippedCards] = useState({}); // Her bir kartın dönme durumunu tutacak state
  //how it works
  const [visibleStep, setVisibleStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [showLoginModal, setShowLoginModal] = useState(false); // Login modal'ını göstermek için state
  const [showSignupModal, setShowSignupModal] = useState(false); // Signup modal'ını göstermek için state
  const [email, setEmail] = useState(""); // E-posta state'i
  const [password, setPassword] = useState(""); // Şifre state'i
  const [username, setUsername] = useState(""); // Kullanıcı adı state'i
  const [confirmPassword, setConfirmPassword] = useState(""); // Şifre tekrarı state'i
  const [error, setError] = useState(""); // Hata mesajı state'i
  const [activeIndex, setActiveIndex] = useState(null);

  const options = ["Breakfast", "Lunch", "Dinner", "Snack", "All"];

  const features = [
    {
      icon: <FaUtensils size={40} className="text-white" />,
      title: "Personalized Meal Plans",
      color: "bg-gradient-to-r from-purple-800 to-red-500",
    },
    {
      icon: <FaChartLine size={40} className="text-white" />,
      title: "Progress Tracking",
      color: "bg-gradient-to-r from-orange-500 to-yellow-400",
    },
    {
      icon: <FaBolt size={40} className="text-white" />,
      title: "Healthy Recipes",
      color: "bg-gradient-to-r from-green-600 to-teal-500",
    },
    {
      icon: <FaBell size={40} className="text-white" />,
      title: "Smart Reminders",
      color: "bg-gradient-to-r from-teal-500 to-blue-600",
    },
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blogPosts");
        if (response.ok) {
          const data = await response.json();
          setBlogPosts(data);
        } else {
          console.error("Failed to fetch blog posts");
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleOptionClick = (option) => {
    if (option === "All") {
      setSelectedOptions(["All"]);
    } else {
      const updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions.filter((item) => item !== "All"), option];
      setSelectedOptions(updatedOptions);
    }
  };

  const toggleReadMore = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  // Anasayfaya yönlendirme fonksiyonu
  const goToHome = () => {
    router.push("/");
  };

  // Kartın dönme durumunu değiştiren fonksiyon
  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // Kartın mevcut durumunu tersine çevir
    }));
  };

  // Login modal'ını açma/kapatma fonksiyonu
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setError(""); // Modal açıldığında hata mesajını temizle
  };

  // Signup modal'ını açma/kapatma fonksiyonu
  const toggleSignupModal = () => {
    setShowSignupModal(!showSignupModal);
    setError(""); // Modal açıldığında hata mesajını temizle
  };

  // Login formunu gönderme fonksiyonu
  const handleLogin = async (e) => {
    e.preventDefault(); // Formun varsayılan davranışını engellemek için

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        router.push("/dashboard"); // Giriş başarılıysa kullanıcıyı yönlendirir
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  // Signup formunu gönderme fonksiyonu
  const handleSignup = async (e) => {
    e.preventDefault(); // Formun varsayılan davranışını engelle

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);
        router.push("/dashboard"); // Kayıt başarılıysa kullanıcıyı yönlendir
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred. Please try again.");
    }
  };
  const moveSlider = (index) => {
    const slider = document.querySelector(".flex.transition-transform");
    slider.style.transform = `translateX(-${index * 100}%)`;
  };

  return (
    <div className="bg-white absolute inset-0">
      <header
        id="header"
        className="flex flex-wrap justify-between items-center p-4 bg-teal-600 text-white"
      >
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          {/* FITSNAP başlığı - Tıklayınca ana sayfaya yönlendirir */}
          <h1
            className="text-2xl font-bold w-full md:w-auto text-center md:text-left cursor-pointer"
            onClick={goToHome}
          >
            FITSNAP
          </h1>

          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
            <button
              className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-400"
              onClick={() => setShowOptions(!showOptions)}
            >
              Popular Recipes
            </button>
            {showOptions && (
              <div className="flex flex-col gap-2 mt-2">
                {options.map((option) => (
                  <button
                    key={option}
                    className={`px-4 py-2 rounded ${
                      selectedOptions.includes(option)
                        ? "bg-yellow-500"
                        : "bg-teal-500"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            <button
              className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-400"
              onClick={() => setShowBlog(!showBlog)}
            >
              Blog
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start mt-4 md:mt-0">
          <button
            className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-400"
            onClick={() => setShowFAQ(!showFAQ)}
          >
            F.A.Q
          </button>
          <button
            className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-400"
            onClick={toggleLoginModal}
          >
            LOGIN
          </button>
          <button
            className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400"
            onClick={toggleSignupModal}
          >
            GET STARTED
          </button>
        </div>
      </header>

      {showBlog && (
        <div className="p-4 space-y-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded-lg shadow-lg bg-white"
            >
              <h2 className="text-xl font-bold text-teal-700">{post.title}</h2>
              <p className="text-sm text-gray-500">By {post.author}</p>
              <p className="mt-2">
                {expandedPost === post.id ? post.fullContent : post.body}
              </p>
              <button
                className="text-blue-500 mt-2 hover:underline"
                onClick={() => toggleReadMore(post.id)}
              >
                {expandedPost === post.id ? "Show Less" : "Read More..."}
              </button>

              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center text-gray-600">
                  <FaComment className="mr-1" /> Comment
                </button>
                <button className="flex items-center text-gray-600">
                  <FaShareAlt className="mr-1" /> Share
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showFAQ && (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="relative h-48 cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => toggleFlip(faq.id)} // Kartın üzerine tıklandığında döndür
            >
              {/* Kartın ön yüzü */}
              <div
                className={`absolute w-full h-full bg-white rounded-lg shadow-lg p-4 flex items-center justify-center text-center transition-transform duration-500 transform ${
                  flippedCards[faq.id] ? "rotate-y-180" : ""
                }`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-teal-700 font-bold">{faq.question}</p>
              </div>
              {/* Kartın arka yüzü */}
              <div
                className={`absolute w-full h-full bg-teal-500 rounded-lg shadow-lg p-4 flex items-center justify-center text-center transition-transform duration-500 transform rotate-y-180 ${
                  flippedCards[faq.id] ? "rotate-y-0" : ""
                }`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-400"
              >
                Login
              </button>
            </form>
            <button
              onClick={toggleLoginModal}
              className="mt-4 w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Sign Up</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-400"
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={toggleSignupModal}
              className="mt-4 w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main section */}

      <div>
        <main
          id="main"
          className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-teal-400 text-white text-center p-5"
        >
          <div>
            <h1 className="text-4xl font-bold mb-5 text-shadow-lg">
              Your Personalized Path to WELLNESS!
            </h1>
            <h1 className="text-3xl mb-10 text-shadow-lg">
              Get Custom Meal Plans, Healthy Recipes, and more... all in one
              place
            </h1>
            <button
              className="bg-orange-400 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-500 transition-colors mb-10"
              onClick={toggleSignupModal}
            >
              Get Started
            </button>

            {/* Slider Section */}

            <div className="w-full max-w-6xl mx-auto">
              {/* Slider Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Slides */}
                <div className="flex transition-transform duration-500 ease-in-out">
                  {/* Slide 1 */}
                  <div className="min-w-full relative">
                    {/* Resim */}
                    <img
                      src="https://img.freepik.com/free-photo/preparing-plant-based-recipe-idea_53876-124361.jpg?t=st=1740473722~exp=1740477322~hmac=bbd6a2823d726866c423eabefe6db420ed05493957bda88aeb3f7c9839c34fad&w=1480"
                      alt="Healthy Eating"
                      className="w-full h-[400px] md:h-[492px] object-cover"
                    />
                    {/* Metin Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-6 text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                        "Healthy eating is a way of life, so it's important to
                        establish routines that are simple, realistically, and
                        ultimately livable."
                      </p>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="min-w-full relative">
                    {/* Resim */}
                    <img
                      src="https://img.freepik.com/free-photo/medium-shot-woman-practicing-with-dumbbells_23-2148771143.jpg?t=st=1740473863~exp=1740477463~hmac=91d5d8f6a80fde5f9df3fdbb1d2f70876dc03f3256467edc0a09e67f09647ad9&w=1480"
                      alt="Exercise"
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    {/* Metin Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-6 text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                        "Exercise is king. Nutrition is queen. Put them together
                        and you've got a kingdom."
                      </p>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div className="min-w-full relative">
                    {/* Resim */}
                    <img
                      src="https://img.freepik.com/premium-photo/stethoscope-hiding-heart-surrounded-by-healthy-food-fruit-vegetables-fish-healthy-food-concept_674180-1310.jpg?w=1480"
                      alt="Food as Medicine"
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    {/* Metin Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-6 text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                        "The food you eat can be either the safest and most
                        powerful form of medicine or the slowest form of
                        poison."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex justify-center mt-6 space-x-3">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeIndex === index
                        ? "bg-white"
                        : "bg-white bg-opacity-50"
                    }`}
                    onClick={() => moveSlider(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="WhyFitSnap" className="py-10">
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center mb-8">Why FitSnap?</h2>
          <div className="flex justify-center items-center gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 rounded-xl ${feature.color} shadow-lg`}
                style={{ minWidth: "200px" }}
              >
                <div className="mb-3">{feature.icon}</div>
                <p className="text-white font-semibold">{feature.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div
        id="testimonial"
        className="py-10 bg-gradient-to-b from-gray-100 to-white"
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 text-teal-700">
          What Our Users Say
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-8 rounded-2xl bg-white shadow-xl transition-opacity duration-500 ${
                index === current ? "opacity-100 scale-100" : "opacity-0 hidden"
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-teal-500"
              />
              <p className="text-lg italic text-gray-900 m-4">
                "{testimonial.quote}"
              </p>
              <h4 className="text-2xl font-semibold text-teal-800">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <button
                className=" bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400"
                onClick={toggleSignupModal}
              >
                GET STARTED
              </button>
            </div>
          ))}
          {/* Sol ve sağ butonlar */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <button
              onClick={prevSlide}
              className="bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition"
            >
              ❯
            </button>
          </div>{" "}
        </div>
      </div>
      <div
        id="howItWorks"
        className="py-12 bg-gradient-to-b from-gray-50 to-white text-center"
      >
        <h2 className="text-4xl font-extrabold text-teal-700 mb-8 flex items-center justify-center gap-2">
          🚀 How It Works
        </h2>

        <div className="relative flex flex-col items-center space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 p-6 w-full max-w-3xl rounded-2xl shadow-lg transform transition-all duration-700
              ${
                index === visibleStep
                  ? "bg-teal-600 text-white scale-105 opacity-100"
                  : "bg-white text-gray-800 opacity-50"
              }`}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-teal-500 rounded-full shadow-lg">
                {step.icon}
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-md">{step.description}</p>
              </div>
            </div>
          ))}
          <button
            className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400"
            onClick={toggleSignupModal}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}
