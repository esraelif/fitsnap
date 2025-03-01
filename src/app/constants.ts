import { BlogPost, FAQItem, Recipe } from "./types";
export const blogPosts: BlogPost[] = [
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
export const faqItems: FAQItem[] = [
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
export const recipes: { [key: string]: Recipe[] } = {
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
