const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80);
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => io.observe(el));

// immediately show hero
document.querySelector(".hero .reveal").classList.add("visible");
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const tips = [
    "Take 5 minutes today to breathe deeply and reset.",
    "Go for a short walk — even 10 minutes helps your mood.",
    "Drink water and stretch your body.",
    "Talk to someone you trust today.",
    "Write down one thing you're grateful for.",
    "Rest is productive too — don’t feel guilty for it.",
    "Stretch your body and release tension.",
    "Limit your screen time before bed to improve sleep quality.",
    "Take a break — even a few minutes can help reset your mind.",
    "You don’t have to be productive all the time. Rest matters.",
    "Try a simple breathing exercise: inhale 4s, exhale 6s.",
    "Step outside and get some fresh air — it can lift your mood.",
    "Listen to music that makes you feel calm or happy.",
    "Be kind to yourself — you’re doing the best you can.",
    "Avoid comparing yourself to others — your journey is unique.",
    "Spend a few minutes organizing your space.",
    "Celebrate small wins today — they matter.",
    "Take a moment to notice something beautiful around you.",
    "Practice saying 'no' when you need to protect your energy.",
    "Reach out — a simple message can strengthen connections.",
    "Do one thing today that makes you feel good.",
    "Let go of what you can’t control.",
    "Remind yourself: this feeling is temporary.",
    "Stretch your body and release tension.",
    "You are allowed to take things one step at a time.",
    "Break big tasks into smaller steps to reduce overwhelm.",
    "Smile, even a little — it can actually improve your mood."
  ];

  function getTipOfTheDay() {
    const today = new Date();
    const dayNumber = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
    return tips[dayNumber % tips.length];
  }

  function formatDate(date) {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric"
    });
  }

  // ✅ Greeting with icons
  function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return '<i class="fa-solid fa-cloud-sun"></i> Good morning';
  } else if (hour < 18) {
    return '<i class="fa-solid fa-sun"></i> Good afternoon';
  } else {
    return '<i class="fa-solid fa-moon"></i> Good evening';
  }
}

  function updateTipAndDate() {
    const today = new Date();

    document.getElementById("tipText").innerText = getTipOfTheDay();
    document.getElementById("tipDate").innerText = formatDate(today);

    // ⚠️ use innerHTML for icons
    document.getElementById("greetingText").innerHTML = getGreeting();
  }

  function msUntilMidnight() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    return midnight - now;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const tipText = document.getElementById("tipText");
    const tipDate = document.getElementById("tipDate");
    const greetingText = document.getElementById("greetingText");

    // first load
    updateTipAndDate();

    // animation
    setTimeout(() => {
      tipDate.classList.add("show");
      tipText.classList.add("show");
      greetingText.classList.add("show");
    }, 200);

    // update at midnight
    setTimeout(() => {
      updateTipAndDate();

      setInterval(updateTipAndDate, 86400000);
    }, msUntilMidnight());
  });
function scrollCarousel(direction) {
  const container = document.getElementById("videoCarousel");

  const scrollAmount = 320; // width of card

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}