// import { useState, useEffect } from "react";

// import { recipes, blogPosts, faqItems } from "../app/constants";
// import Header from "../app/components/Header";
// import FAQ from "../app/components/FAQ";
// import Blog from "../app/components/Blog";
// import Features from "../app/components/Features";
// import Testimonials from "../app/components/Testimonials";
// import PricingPlans from "../app/components/PricingPlans";
// import HowItWorks from "../app/components/HowItWorks";
// import { RecipeCategory } from "../app/types";
// import WhyFitSnap from "../app/components/WhyFitSnap";

// import Footer from "../app/components/Footer";
// import RecipeCategoryButtons from "../app/components/RecipeCategoryButtons";
// import RecipeList from "../app/components/RecipeList";

// export default function Home() {
//   const [activeSection, setActiveSection] = useState<string | false>(false);
//   const [activeCategory, setActiveCategory] = useState<RecipeCategory | null>(
//     null
//   );
//   const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeLogin, setActiveLogin] = useState(false);
//   const [showGetStarted, setShowGetStarted] = useState(false);
//   const [showSignUpForm, setShowSignUpForm] = useState(false);

//   const toggleFAQ = (index: number) => {
//     setActiveFAQIndex(activeFAQIndex === index ? null : index);
//   };

//   const closeLogin = () => {
//     setActiveLogin(false);
//   };

//   const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     if ((event.target as Element).id === "overlay") {
//       closeLogin();
//     }
//   };

//   useEffect(() => {
//     const handleNavClick = function (this: HTMLAnchorElement, event: Event) {
//       event.preventDefault();
//       setActiveSection(this.getAttribute("href")!.substring(1));
//     };

//     document.querySelectorAll("nav a").forEach((link) => {
//       link.addEventListener("click", handleNavClick);
//     });

//     return () => {
//       document.querySelectorAll("nav a").forEach((link) => {
//         link.removeEventListener("click", handleNavClick);
//       });
//     };
//   }, []);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   useEffect(() => {
//     if (showGetStarted) {
//       setTimeout(() => {
//         const section = document.getElementById("get-started");
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100);
//     }
//   }, [showGetStarted]);

//   return (
//     <>
//       <Header
//         isMobileMenuOpen={isMobileMenuOpen}
//         toggleMobileMenu={toggleMobileMenu}
//         setShowGetStarted={setShowGetStarted}
//         showSignUpForm={showSignUpForm}
//         setShowSignUpForm={setShowSignUpForm}
//         setActiveLogin={setActiveLogin}
//         activeLogin={activeLogin}
//         closeLogin={closeLogin}
//         handleOverlayClick={handleOverlayClick}
//         showGetStarted={showGetStarted}
//       />

//       {/* Popular Recipes Section */}
//       {activeSection === "recipes" && (
//         <section id="recipes" className="container mx-auto p-6">
//           <RecipeCategoryButtons
//             categories={Object.keys(recipes)}
//             onSelectCategory={(category) => setActiveCategory(category)}
//           />
//           {activeCategory && <RecipeList recipes={recipes[activeCategory]} />}
//         </section>
//       )}

//       {/* Blog Section */}
//       {activeSection === "blog" && <Blog blogPosts={blogPosts} />}

//       {/* FAQ Section */}
//       {activeSection === "faq" && (
//         <FAQ
//           faqItems={faqItems}
//           activeFAQIndex={activeFAQIndex}
//           toggleFAQ={toggleFAQ}
//         />
//       )}

//       {/* Features Section */}

//       <Features />

//       {/* Why FitSnap Section */}

//       <WhyFitSnap />

//       {/* Testimonials Section */}
//       <Testimonials />

//       {/* How It Works Section */}
//       <HowItWorks />

//       {/* Pricing Plans Section */}
//       <PricingPlans />

//       {/* Footer Section */}
//       <Footer />
//     </>
//   );
// }
import { useState, useEffect } from "react";
import "../styles/index.css";
import { recipes, blogPosts, faqItems } from "../app/constants";
import Header from "../app/components/Header";
import FAQ from "../app/components/FAQ";
import Blog from "../app/components/Blog";
import Features from "../app/components/Features";
import Testimonials from "../app/components/Testimonials";
import PricingPlans from "../app/components/PricingPlans";
import HowItWorks from "../app/components/HowItWorks";
import { RecipeCategory } from "../app/types";
import WhyFitSnap from "../app/components/WhyFitSnap";
import Footer from "../app/components/Footer";
import RecipeCategoryButtons from "../app/components/RecipeCategoryButtons";
import RecipeList from "../app/components/RecipeList";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | false>(false);
  const [activeCategory, setActiveCategory] = useState<RecipeCategory | null>(
    null
  );
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

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
    const handleNavClick = function (this: HTMLAnchorElement, event: Event) {
      event.preventDefault();
      setActiveSection(this.getAttribute("href")!.substring(1));
    };

    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    return () => {
      document.querySelectorAll("nav a").forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
    };
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
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        setShowGetStarted={setShowGetStarted}
        showSignUpForm={showSignUpForm}
        setShowSignUpForm={setShowSignUpForm}
        setActiveLogin={setActiveLogin}
        activeLogin={activeLogin}
        closeLogin={closeLogin}
        handleOverlayClick={handleOverlayClick}
        showGetStarted={showGetStarted}
      />

      {/* Popular Recipes Section */}
      {activeSection === "recipes" && (
        <section id="recipes" className="container mx-auto p-6">
          <RecipeCategoryButtons
            categories={Object.keys(recipes)}
            onSelectCategory={(category) => setActiveCategory(category)}
          />
          {activeCategory && <RecipeList recipes={recipes[activeCategory]} />}
        </section>
      )}

      {/* Blog Section */}
      {activeSection === "blog" && <Blog blogPosts={blogPosts} />}

      {/* FAQ Section */}
      {activeSection === "faq" && (
        <FAQ
          faqItems={faqItems}
          activeFAQIndex={activeFAQIndex}
          toggleFAQ={toggleFAQ}
        />
      )}

      {/* Features Section */}
      <Features />

      {/* Why FitSnap Section */}
      <WhyFitSnap />

      {/* Testimonials Section */}
      <Testimonials />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Pricing Plans Section */}
      <PricingPlans />

      {/* Footer Section */}
      <Footer />
    </>
  );
}
