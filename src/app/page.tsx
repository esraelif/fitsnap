"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);
  const [activeLogin, setActiveLogin] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const recipes = {
    breakfast: [
      {
        name: "Oatmeal",
        ingredients: "Oats, Milk, Honey",
        calories: 250,
        time: "10 min",
        image:
          "https://images.unsplash.com/photo-1571748982800-fa51082c2224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2F0bWVhbHxlbnwwfHwwfHx8MA%3D%3D",
        instructions: "Boil oats with milk, add honey.",
      },
      {
        name: "Avocado Toast",
        ingredients: "Bread, Avocado, Egg",
        calories: 300,
        time: "15 min",
        image:
          "https://plus.unsplash.com/premium_photo-1676106624038-81d1e17573db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww",
        instructions: "Toast bread, add mashed avocado and egg.",
      },
    ],
    lunch: [
      {
        name: "Grilled Chicken Salad",
        ingredients: "Chicken, Lettuce, Tomato",
        calories: 400,
        time: "20 min",
        image:
          "https://media.istockphoto.com/id/155372562/photo/roasted-chicken-breast.webp?a=1&b=1&s=612x612&w=0&k=20&c=fjwuTW_m40NYVZrBHJG45BLq68D31b6fX1Ipna-nuBI=",
        instructions: "Grill chicken and mix with veggies.",
      },
    ],
    dinner: [
      {
        name: "Salmon with Veggies",
        ingredients: "Salmon, Broccoli, Carrots",
        calories: 500,
        time: "30 min",
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fHww",
        instructions: "Bake salmon with veggies.",
      },
    ],
    snacks: [
      {
        name: "Greek Yogurt with Nuts",
        ingredients: "Yogurt, Almonds, Honey",
        calories: 200,
        time: "5 min",
        image:
          "https://media.istockphoto.com/id/2097325620/photo/healthy-breakfast-of-granola-yogurt-fruits-and-seeds.webp?a=1&b=1&s=612x612&w=0&k=20&c=iiJoe9Kg-7jG6JED3iJEvx6IOrJYd47kRKrD6n7uyRA=",
        instructions: "Mix yogurt with nuts and honey.",
      },
    ],
  };

  const blogPosts = [
    {
      title: "How to Eat Healthy on a Budget",
      author: "John Doe",
      content:
        "Eating healthy doesn't have to break the bank. Here's how to plan your meals efficiently.",
      body: "In this post, we'll discuss tips and tricks for eating healthy on a budget, from shopping smart to meal prepping.",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG51dHJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "The Importance of Regular Exercise",
      author: "Jane Smith",
      content:
        "Exercise is key to a healthy lifestyle. Learn why it matters and how to stay motivated.",
      body: "Regular physical activity can help reduce the risk of chronic diseases and improve mental health. This post explores the benefits of exercise and how to make it a part of your daily routine.",
      image:
        "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "10 Quick and Healthy Snack Ideas",
      author: "Alice Johnson",
      content:
        "Snacking doesn't have to be unhealthy. Check out these quick and healthy snack ideas.",
      body: "In this post, we'll share some easy-to-make snack recipes that are both nutritious and delicious.",
      image:
        "https://images.unsplash.com/photo-1559852925-a9b83b8387d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRoeSUyMHNuYWNrc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const faqItems = [
    {
      question: "How do I change my password?",
      answer:
        "Go to your profile settings, click 'Change Password', and follow the prompts.",
    },
    {
      question: "Can I access the website on mobile?",
      answer:
        "Yes, the website is fully responsive and works well on mobile devices.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact support via the contact page or email us directly at support@fitsnap.com.",
    },
    {
      question: "Is there a diet plan available?",
      answer:
        "Yes, we offer personalized diet plans based on your goals and preferences.",
    },
    {
      question: "Can I save my favorite recipes?",
      answer:
        "Yes, you can save your favorite recipes by clicking the 'Save' button on each recipe card.",
    },
    {
      question: "Do you provide workout plans?",
      answer:
        "Yes, we offer customized workout plans for different fitness levels.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQIndex(activeFAQIndex === index ? null : index);
  };

  const closeLogin = () => {
    setActiveLogin(false);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as Element).id === "overlay") {
      closeLogin();
    }
  };

  useEffect(() => {
    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveSection(this.getAttribute("href")!.substring(1));
      });
    });
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    if (showGetStarted) {
      setTimeout(() => {
        const section = document.getElementById("get-started");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [showGetStarted]);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-green-600">Fitsnap</h1>
          <nav
            className={`md:flex space-x-6 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="#recipes"
              className="text-gray-700 hover:text-green-500"
              aria-label="Go to popular recipes"
            >
              Popular Recipes
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-green-500"
              aria-label="Go to blog"
            >
              Blog
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-green-500"
              aria-label="Go to FAQ"
            >
              F.A.Q
            </a>

            <a
              className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition shadow-md hover:shadow-lg"
              onClick={() => setShowGetStarted(true)}
              aria-label="Get started"
            >
              Get Started
            </a>
            {showGetStarted && (
              <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50">
                <div className="bg-white/90 shadow-xl rounded-2xl p-8 max-w-lg w-full text-center">
                  <h2 className="text-2xl font-semibold text-green-700">
                    Get Started with Fitsnap
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Start your journey to a healthier lifestyle today. Join our
                    community and discover personalized recipes, workouts, and
                    more!
                  </p>
                  <div className="mt-6">
                    <button
                      className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md hover:shadow-lg"
                      onClick={() => {
                        setShowSignUpForm(true);
                        setShowGetStarted(false);
                      }}
                    >
                      Sign Up Now
                    </button>
                  </div>
                  <button
                    onClick={() => setShowGetStarted(false)}
                    className="mt-4 text-gray-500 hover:text-red-500 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {showSignUpForm && (
              <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50">
                <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
                  <h2 className="text-2xl font-semibold text-blue-600 text-center">
                    Create an Account
                  </h2>
                  <form className="mt-6 space-y-4 text-black">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                      Sign Up
                    </button>
                  </form>
                  <button
                    onClick={() => setShowSignUpForm(false)}
                    className="mt-4 text-black hover:text-red-500 transition w-full text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            <a
              className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition shadow-md hover:shadow-lg"
              onClick={() => setActiveLogin(true)}
              aria-label="Login"
            >
              Login
            </a>
            {activeLogin && (
              <div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                id="overlay"
                onClick={handleOverlayClick}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
                  <h2 className="text-2xl font-semibold text-center text-blue-600">
                    Login
                  </h2>
                  <form className="mt-6 space-y-4 text-black">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                      Login
                    </button>
                  </form>
                  <button
                    className="w-full py-3 mt-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                    onClick={closeLogin}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </nav>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
      </header>
      {/* Popular Recipes Section */}
      {activeSection === "recipes" && (
        <section id="recipes" className="container mx-auto p-6">
          <div className="flex space-x-4">
            {Object.keys(recipes).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          {activeCategory && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {recipes[activeCategory].map((recipe, index) => (
                <div key={index} className="border p-4 rounded-lg shadow-md">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="text-xl font-bold mt-2">{recipe.name}</h2>
                  <p>
                    <strong>Ingredients:</strong> {recipe.ingredients}
                  </p>
                  <p>
                    <strong>Calories:</strong> {recipe.calories}
                  </p>
                  <p>
                    <strong>Time:</strong> {recipe.time}
                  </p>
                  <p>
                    <strong>Instructions:</strong> {recipe.instructions}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Blog Section */}
      {activeSection === "blog" && (
        <section id="blog" className="container mx-auto p-6">
          <h2 className="text-2xl font-bold mb-6">Blog Posts</h2>
          {blogPosts.map((post, index) => (
            <div key={index} className="mb-6 border p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">By {post.author}</p>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover mt-4 rounded-md"
              />
              <p className="mt-4">{post.content}</p>
              <p className="mt-2">{post.body}</p>
            </div>
          ))}
        </section>
      )}

      {/* FAQ Section */}
      {activeSection === "faq" && (
        <section
          id="faq"
          className="container mx-auto p-6 bg-gray-50 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b-2 border-gray-200">
                <button
                  className="w-full text-left p-4 font-semibold text-gray-800 hover:text-green-600 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <span>{item.question}</span>
                    <span className="transform transition-all duration-300">
                      {activeFAQIndex === index ? "▲" : "▼"}
                    </span>
                  </div>
                </button>
                {activeFAQIndex === index && (
                  <p className="p-4 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features Section */}
      <h1 className="flex justify-center mt-6 text-3xl font-bold text-pink-600">
        Your Personalized Path to Wellness!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-10">
        <div
          className="bg-cover bg-center p-6 rounded-lg text-center transition-transform transform hover:scale-105"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1829241109/de/foto/gemeinsam-einen-brunch-genie%C3%9Fen.jpg?s=612x612&w=0&k=20&c=Jl1D38s_AudPzLlRl6_5IjTv9zE4-R_SKHfyduZD9VQ=')",
          }}
        >
          <h2 className="font-bold text-xl bg-gray-900 bg-opacity-50 p-2 rounded">
            Simple and Tasty Recipes
          </h2>
        </div>
        <div
          className="bg-cover bg-center p-6 rounded-lg text-center transition-transform transform hover:scale-105"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/2170288955/de/foto/frohes-neues-jahr-2025-2025-symbolisiert-den-beginn-des-neuen-jahres-nahaufnahme-der-f%C3%BC%C3%9Fe.jpg?s=612x612&w=0&k=20&c=wYQRdnFPTk8N4Bw2ABWBkR_EmAXv-gu3s3Q3xCWfmV4=')",
          }}
        >
          <h2 className="font-bold text-xl">
            Track Your Progress Effortlessly
          </h2>
          <p>Sport</p>
        </div>
        <div
          className="bg-gray-800 p-6 rounded-lg text-center transition-transform transform hover:scale-105"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1253099922/de/foto/sortiment-an-frischem-obst-und-gem%C3%BCses%C3%A4ften-in-regenbogenfarben.jpg?s=612x612&w=0&k=20&c=r8zYClIXuvm_r10aDzN3afUIon7UkiOrG7qi6jk-Kjc=')",
          }}
        >
          <h2 className="font-bold text-xl">Tailored for Your Goals</h2>
          <p>Smoothies</p>
        </div>
        <div
          className="bg-gray-800 p-6 rounded-lg text-center transition-transform transform hover:scale-105"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1457433817/de/foto/gruppe-gesunder-lebensmittel-f%C3%BCr-die-flexitarische-ern%C3%A4hrung.jpg?s=612x612&w=0&k=20&c=JJgMR6bYIdshjZVTwT73bLpvLp1zYurxn_7wTXpi82c=')",
          }}
        >
          <h2 className="font-bold text-xl">Balanced Eating</h2>
          <p>Foods</p>
        </div>
        <div
          className="bg-gray-800 p-6 rounded-lg text-center transition-transform transform hover:scale-105"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1498835905/de/foto/ern%C3%A4hrungsberaterin-misst-taille-eines-%C3%BCbergewichtigen-mannes-in-einer-klinik-zur.jpg?s=612x612&w=0&k=20&c=c-jb1s9r7jfu1L6upJK-oh2N-CbpfqwxOZPFwbSt5is=')",
          }}
        >
          <h2 className="font-bold text-xl">Weight Loss</h2>
          <p>Sport</p>
        </div>
      </div>
      {/* Why FitSnap */}
      <section className="text-center py-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-white mb-12">
          Why FitSnap?
        </h2>

        <div className="flex justify-center items-center space-x-8">
          {/* Circle with Icon and Text */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 bg-green-300 text-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                🔍
              </div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-ping opacity-30"></div>
            </div>
            <p className="text-xl font-semibold text-white">
              Personalized Meal Plans
            </p>
          </div>

          {/* Connecting Line */}
          <div className="w-12 h-1 bg-white"></div>

          {/* Circle with Icon and Text */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 bg-green-300 text-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                📊
              </div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-ping opacity-30"></div>
            </div>
            <p className="text-xl font-semibold text-white">
              Progress Tracking
            </p>
          </div>

          {/* Connecting Line */}
          <div className="w-12 h-1 bg-white"></div>

          {/* Circle with Icon and Text */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 bg-green-300 text-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                🍎
              </div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-ping opacity-30"></div>
            </div>
            <p className="text-xl font-semibold text-white">Healthy Recipes</p>
          </div>

          {/* Connecting Line */}
          <div className="w-12 h-1 bg-white"></div>

          {/* Circle with Icon and Text */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 bg-green-300 text-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                ⏰
              </div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-ping opacity-30"></div>
            </div>
            <p className="text-xl font-semibold text-white">Smart Reminders</p>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-wide">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                text: "“FitSnap completely changed the way I eat! The personalized meal plans are easy to follow and actually delicious.”",
                name: "Emily R.",
              },
              {
                text: "“I used to struggle with what to cook every day. Now I just check my plan and enjoy healthy meals without overthinking.”",
                name: "James L.",
              },
              {
                text: "“Finally, a health app that understands my needs! I love how I can choose my diet preferences and get tailored recipes.”",
                name: "Sofia M.",
              },
              {
                text: "“Thanks to FitSnap, I’ve lost 10 pounds in 2 months while still enjoying my favorite foods in moderation.”",
                name: "Daniel K.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
              >
                <p className="text-gray-700 italic"> {testimonial.text} </p>
                <p className="text-blue-600 font-bold mt-4">
                  – {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sign Up & Set Your Profile
              </h3>
              <p className="text-gray-700">
                Create your free account in seconds. Choose your dietary
                preferences, goals, and lifestyle.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Personalized Plan
              </h3>
              <p className="text-gray-700">
                Receive a customized meal plan tailored to your needs. Whether
                you want to lose weight, gain muscles, or simply eat healthier,
                FitSnap has you covered.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enjoy Healthy, Delicious Meals
              </h3>
              <p className="text-gray-700">
                Follow easy-to-make recipes, track your progress, and stay
                motivated with smart reminders.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Plans Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-wide">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Free Plan (Forever Free)!",
                features: [
                  "Access to basic meal plans",
                  "Healthy recipe suggestions",
                  "Progress tracking",
                  "Work intake reminders",
                ],
                buttonText: "Start for Free!",
                gradient: "from-green-400 to-green-600",
              },
              {
                title: "Premium Plan (Best Value)",
                features: [
                  "Everything in Free Plan",
                  "Exclusive premium recipes",
                  "Advanced progress tracking",
                  "Smart grocery lists",
                  "Priority support",
                ],
                buttonText: "Start Your Free Trial!",
                gradient: "from-blue-500 to-blue-700",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gray-300 transform hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {plan.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full text-white font-bold py-3 rounded-lg bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition-all`}
                  onClick={() => {
                    setShowSignUpForm(true);
                    setShowGetStarted(false);
                  }}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">FifSnap</h3>
              <p className="text-gray-400">Eat Healthy, Live Happy!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Food
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Coffee
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Stay Updated!</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for healthy tips, new recipes, and
                exclusive offers.
              </p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                />
                <button
                  type="submit"
                  className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-lg"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2025 FifSnap. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
