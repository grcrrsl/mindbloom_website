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

// tips for a day
const tips = [
  "Take 5 minutes to breathe slowly and reset your mind.",
  "Go for a short walk and notice your surroundings.",
  "Drink water and give your body what it needs.",
  "Stretch gently to release built-up tension.",
  "Talk to someone you trust, even briefly.",
  "Write one thing you're grateful for today.",
  "Allow yourself to rest without feeling guilty.",
  "Limit screen time before going to sleep.",
  "Pause and take a break from what you're doing.",
  "Remind yourself that rest is productive too.",
  "Try a breathing pattern: inhale 4, exhale 6.",
  "Step outside and get some fresh air.",
  "Listen to music that relaxes you.",
  "Speak to yourself with kindness today.",
  "Avoid comparing your progress to others.",
  "Organize a small part of your space.",
  "Celebrate even the smallest wins.",
  "Notice something simple but beautiful.",
  "Say no when something drains your energy.",
  "Send a message to someone you miss.",
  "Do something today just because you enjoy it.",
  "Let go of things outside your control.",
  "Remind yourself that tough feelings pass.",
  "Take things one step at a time.",
  "Break a big task into smaller steps.",
  "Smile, even if it’s just a little.",
  "Rest your eyes for a few minutes.",
  "Drink something warm and comforting.",
  "Write your thoughts down without filtering.",
  "Sit in silence for a moment.",
  "Stretch your shoulders and relax your neck.",
  "Focus only on your breathing for 1 minute.",
  "Declutter one small area around you.",
  "Pause before reacting to stress.",
  "Be proud of how far you've come.",
  "Focus on completing one task well.",
  "Eat something nourishing today.",
  "Check your posture and adjust it.",
  "Walk mindfully, even for a few steps.",
  "Forgive yourself for past mistakes.",
  "Start your day without rushing.",
  "End your day with a calm reflection.",
  "Don’t pressure yourself to do everything.",
  "Focus on what you *can* control.",
  "Take a break from social media today.",
  "Spend a moment connecting with nature.",
  "Enjoy a quiet moment without distractions.",
  "Replace one negative thought with a positive one.",
  "Practice patience with yourself.",
  "Do something creative, even simple.",
  "Encourage yourself like a friend would.",
  "Relax your shoulders and unclench your jaw.",
  "Stay present instead of overthinking.",
  "Allow yourself to feel without judgment.",
  "Take a few deep breaths right now.",
  "Use gentle words when talking to yourself.",
  "Slow your pace intentionally.",
  "Focus on progress, not perfection.",
  "Make space for yourself today.",
  "Drink water regularly throughout the day.",
  "Stretch your legs after sitting too long.",
  "Take mindful pauses between tasks.",
  "Appreciate small moments more.",
  "Reduce unnecessary pressure on yourself.",
  "Hold onto hope, even a little.",
  "Trust that you're moving forward.",
  "Accept that imperfection is human.",
  "Keep showing up, even if slowly.",
  "Stay grounded in the present.",
  "Practice gratitude again today.",
  "Take a peaceful walk if you can.",
  "Smile at someone or yourself.",
  "Listen to your body’s signals.",
  "Rest when you feel tired.",
  "Do less, but do it well.",
  "Focus only on today.",
  "Be gentle with your thoughts.",
  "Pause before making decisions.",
  "Stay aware of your emotions.",
  "Challenge negative thinking patterns.",
  "Release what no longer helps you.",
  "Keep things simple today.",
  "Choose calm over chaos.",
  "Give yourself enough time.",
  "Respect your own pace.",
  "Allow yourself to pause.",
  "Maintain balance in your day.",
  "Take care of your mental space.",
  "Choose what feels right for you.",
  "Let go of unnecessary pressure.",
  "Stay focused on what matters.",
  "Breathe slowly and steadily.",
  "Create moments of calm.",
  "Relax your thoughts when overwhelmed.",
  "Stay optimistic where possible.",
  "Take care of yourself intentionally.",
  "Recognize your effort today.",
  "Clear your mind for a moment.",
  "Create a peaceful environment.",
  "Keep going at your own pace.",
  "Stay steady and consistent.",
  "Trust your decisions.",
  "Be mindful of your actions.",
  "Relax deeply when needed.",
  "Take things lightly when possible.",
  "Focus inward for clarity.",
  "Stay present in conversations.",
  "Calm your thoughts gently.",
  "Be patient with progress.",
  "Prioritize rest when needed.",
  "Stay grounded in reality.",
  "Be strong, but also soft.",
  "Take breaks without guilt.",
  "Stay calm in small moments.",
  "Breathe deeply and slowly.",
  "Focus clearly on your goals.",
  "Be gentle with your energy.",
  "Take care of your physical body.",
  "Move forward in small steps.",
  "Stay kind to yourself always.",
  "Relax completely for a moment.",
  "Protect your inner peace.",
  "Stay aware of your needs.",
  "Take your time with decisions.",
  "Enjoy moments of stillness.",
  "Center yourself again.",
  "Rest whenever necessary.",
  "Return to calm when stressed.",
  "Keep your balance steady.",
  "Stay mindful again today.",
  "Reconnect with your calm.",
  "Choose peace again.",
  "Take care of your energy again.",
  "Ground yourself again.",
  "Be kind again today.",
  "Rest again if needed.",
  "Stay calm throughout the day.",
  "Focus on what matters most.",
  "Relax your thoughts today.",
  "Stay mindful in your actions.",
  "Be gentle with your expectations.",
  "Allow yourself to rest today.",
  "Stay positive where you can.",
  "Keep calm in challenges.",
  "Balance your energy today.",
  "Relax your mind intentionally.",
  "Take care of your needs.",
  "Stay peaceful in small moments.",
  "Be kind in your thoughts.",
  "Stay grounded emotionally.",
  "Listen to your body’s needs.",
  "Wind down calmly tonight.",
  "Relax your thoughts before bed.",
  "Let your body rest fully.",
  "Stay peaceful as you sleep.",
  "Slow your thoughts at night.",
  "Clear your mind before sleeping.",
  "Release stress from the day.",
  "Take deep breaths before bed.",
  "Unwind slowly and gently.",
  "Allow yourself proper rest.",
  "Let go of worries tonight.",
  "Sleep with a calm mind.",
  "Recharge your energy.",
  "Prepare yourself for tomorrow.",
  "Stay hopeful for a new day.",
  "Start fresh tomorrow.",
  "Take tomorrow one step at a time.",
  "Stay positive about what’s ahead.",
  "Be kind to yourself tomorrow.",
  "Focus on your goals tomorrow.",
  "Stay mindful tomorrow.",
  "Relax into the new day.",
  "Take care of yourself tomorrow.",
  "Stay peaceful tomorrow.",
  "Keep balance tomorrow.",
  "Rest well for tomorrow.",
  "Begin again tomorrow.",
  "Be gentle tomorrow.",
  "Stay grounded tomorrow.",
  "Move forward steadily.",
  "Trust the process.",
  "Stay strong through challenges.",
  "Keep going forward.",
];

// ===================== GENERATOR (NO REPEAT BACKUP) =====================
const actions = [
  "Take time to",
  "Try to",
  "Remember to",
  "Pause and",
  "Allow yourself to",
  "Make space to",
  "Give yourself time to",
  "Focus on",
];

const activities = [
  "breathe deeply",
  "relax your mind",
  "go outside",
  "drink water",
  "slow down",
  "stretch",
  "clear your thoughts",
  "rest your body",
];

const endings = [
  "today.",
  "for your well-being.",
  "you deserve it.",
  "even a little helps.",
  "and notice how you feel.",
  "without pressure.",
  "at your own pace.",
];
function generateExtraTip(day) {
  const a = actions[day % actions.length];
  const b = activities[Math.floor(day / actions.length) % activities.length];
  const c =
    endings[
      Math.floor(day / (actions.length * activities.length)) % endings.length
    ];
  return `${a} ${b} ${c}`;
}
// ===================== GET TIP =====================
function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay); // 1–365
}
function getTipOfTheDay() {
  const today = new Date();
  const day = getDayOfYear(today); // 1–365

  // combine real + generated tips into 365 slots
  if (day <= tips.length) {
    return tips[day - 1];
  }

  // generate based on remaining slots (shifted index)
  return generateExtraTip(day - tips.length);
}
// ===================== DATE FORMAT =====================
function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

// ===================== GREETING =====================
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

// ===================== SAFE UPDATE =====================
function updateTipAndDate() {
  const today = new Date();

  const tipText = document.getElementById("tipText");
  const tipDate = document.getElementById("tipDate");
  const greetingText = document.getElementById("greetingText");

  if (!tipText || !tipDate || !greetingText) return;

  tipText.innerText = getTipOfTheDay();
  tipDate.innerText = formatDate(today);
  greetingText.innerHTML = getGreeting();
}

// ===================== MIDNIGHT TIMER =====================
function msUntilMidnight() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  return midnight - now;
}

// ===================== INIT =====================
document.addEventListener("DOMContentLoaded", () => {
  updateTipAndDate();

  setTimeout(() => {
    document.getElementById("tipText")?.classList.add("show");
    document.getElementById("tipDate")?.classList.add("show");
    document.getElementById("greetingText")?.classList.add("show");
  }, 200);

  // update exactly at midnight
  setTimeout(() => {
    updateTipAndDate();
    setInterval(updateTipAndDate, 86400000);
  }, msUntilMidnight());
});

// ScrollCarousel Video
function scrollCarousel(direction) {
  const container = document.getElementById("videoCarousel");

  const scrollAmount = 320; // width of card

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

/* /── Quiz Logic ── */
document.querySelectorAll(".quiz-card").forEach((card) => {
  let scores = [];
  let currentStep = 1;

  const steps = card.querySelectorAll(".quiz-step");
  const total = steps.length;
  const progressFill = card.querySelector(".quiz-progress-fill");
  const progressLabel = card.querySelector(".quiz-progress-label");
  const resultDiv = card.querySelector(".quiz-result");
  const resultIcon = card.querySelector(".quiz-result-icon");
  const resultText = card.querySelector(".quiz-result-text");
  const progressWrap = card.querySelector(".quiz-progress");
  const restartBtn = card.querySelector(".quiz-restart");
  const scoreEl = card.querySelector(".quiz-score");

  function getResult(cardId, score) {
    if (cardId === "moodQuiz") {
      if (score <= 4)
        return {
          icon: "fa-face-smile",
          level: "Low",
          text: "Low mood symptoms. You're doing well overall — keep maintaining your self-care habits.",
        };
      if (score <= 9)
        return {
          icon: "fa-cloud-sun",
          level: "Mild",
          text: "Mild mood symptoms. You're experiencing some difficulties — consider small coping strategies.",
        };
      if (score <= 14)
        return {
          icon: "fa-cloud-rain",
          level: "Moderate",
          text: "Moderate mood symptoms. It may help to talk to someone you trust or explore support resources.",
        };
      return {
        icon: "fa-bolt",
        level: "High",
        text: "Higher level of distress. Reaching out to a mental health professional is strongly recommended.",
      };
    } else {
      if (score <= 5)
        return {
          icon: "fa-bolt",
          level: "Low",
          text: "Low stress level. Your stress levels appear manageable — keep up your routines.",
        };
      if (score <= 10)
        return {
          icon: "fa-face-meh",
          level: "Moderate",
          text: "Moderate stress. Try identifying key stressors and introduce small daily stress-relief habits.",
        };
      return {
        icon: "fa-face-tired",
        level: "High",
        text: "High stress level. It may help to reassess your workload and seek support or guidance.",
      };
    }
  }

  card.querySelectorAll(".quiz-opt").forEach((btn) => {
    btn.addEventListener("click", () => {
      // highlight selection
      btn
        .closest(".quiz-step")
        .querySelectorAll(".quiz-opt")
        .forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");

      setTimeout(() => {
        // store score properly
        const stepIndex = currentStep - 1;
        scores[stepIndex] = parseInt(btn.dataset.val);

        const nextStep = currentStep + 1;

        if (nextStep <= total) {
          card
            .querySelector(`.quiz-step[data-step="${currentStep}"]`)
            .classList.remove("active");
          card
            .querySelector(`.quiz-step[data-step="${nextStep}"]`)
            .classList.add("active");

          currentStep = nextStep;

          const pct = (currentStep / total) * 100;
          progressFill.style.width = pct + "%";
          progressLabel.textContent = `Question ${currentStep} of ${total}`;
        } else {
          // finish quiz
          card
            .querySelector(`.quiz-step[data-step="${currentStep}"]`)
            .classList.remove("active");

          progressWrap.style.display = "none";

          const total_score = scores.reduce((a, b) => a + b, 0);

          // ✅ correct max score per quiz
          const max_score = card.id === "moodQuiz" ? total * 3 : total * 4;

          const res = getResult(card.id, total_score);

          // icon
          resultIcon.innerHTML = `<i class="fa-solid ${res.icon}"></i>`;

          // text
          resultText.textContent = res.text;

          // ✅ improved score display
          if (scoreEl) {
            scoreEl.textContent = `Score: ${total_score} / ${max_score} • ${res.level}`;
          }

          resultDiv.style.display = "block";
        }
      }, 250);
    });
  });

  // restart
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      scores = [];
      currentStep = 1;

      steps.forEach((s) => s.classList.remove("active"));
      card.querySelector('.quiz-step[data-step="1"]').classList.add("active");

      card
        .querySelectorAll(".quiz-opt")
        .forEach((b) => b.classList.remove("selected"));

      progressFill.style.width = (1 / total) * 100 + "%";
      progressLabel.textContent = `Question 1 of ${total}`;
      progressWrap.style.display = "block";
      resultDiv.style.display = "none";
    });
  }
});

/* ── Wellness Tracker ── */
const wellnessFeedbackMsgs = [
  [
    "Every area is looking great — you're really taking care of yourself today!",
    "You're in a really good place today. Keep doing what’s working for you.",
    "You’ve built strong habits — it really shows in how balanced things feel.",
    "This is a solid day for your well-being. Keep nurturing what’s helping you thrive.",
  ],
  [
    "You're doing well in most areas. Notice which ones feel lower and give them a little extra attention.",
    "Things are generally going well. A small check-in with yourself can make it even better.",
    "You’re maintaining a good balance. A little extra care in one area could go a long way.",
    "You're on track — just fine-tune a few areas and you'll feel even better.",
  ],
  [
    "A mixed day — that's completely normal. Even small acts of care add up.",
    "Some areas feel okay, others not as much — that’s part of being human.",
    "Today has ups and downs. Focus on one small thing that can help you feel better.",
    "Not everything is perfect today, and that’s okay. Small steps still matter.",
  ],
  [
    "Some areas need some love today. Be gentle with yourself and pick just one to nurture.",
    "You might be feeling off in a few areas — start small and be kind to yourself.",
    "It’s okay to slow down today. Focus on one thing that brings you comfort.",
    "You're having a tougher day — give yourself permission to take it easy.",
  ],
  [
    "It looks like today is tough. Remember: rest is also progress. You don't have to do everything at once.",
    "This seems like a heavy day. You don’t have to handle everything alone.",
    "Take things one step at a time today — even small effort is enough.",
    "If things feel overwhelming, reaching out to someone can really help.",
  ],
];

const dimScores = {};
const totalDims = document.querySelectorAll(".wellness-score").length;
const feedbackBox = document.getElementById("wellnessFeedback");
const feedbackText = document.getElementById("wellnessFeedbackText");
const resetBtn = document.querySelector(".wellness-reset");

/* CLICK DOT */
document.querySelectorAll(".wdot").forEach((dot) => {
  dot.addEventListener("click", () => {
    const dim = dot.dataset.dim;
    const val = parseInt(dot.dataset.val);

    dimScores[dim] = val;

    // update dots
    document.querySelectorAll(`.wdot[data-dim="${dim}"]`).forEach((d) => {
      d.classList.toggle("active", parseInt(d.dataset.val) <= val);
    });

    // update score
    document.getElementById(`${dim}-score`).textContent = val;

    updateFeedback();
  });
});

/* UPDATE FEEDBACK */
function updateFeedback() {
  const scored = Object.values(dimScores);

  if (scored.length < totalDims) {
    feedbackBox.style.display = "none";
    return;
  }

  const avg = scored.reduce((a, b) => a + b, 0) / scored.length;

  const msgIndex =
    avg >= 4.5 ? 0 : avg >= 3.5 ? 1 : avg >= 2.5 ? 2 : avg >= 1.5 ? 3 : 4;

  // ✅ RANDOM MESSAGE FIX
  const options = wellnessFeedbackMsgs[msgIndex];
  const randomMsg = options[Math.floor(Math.random() * options.length)];

  feedbackText.textContent = randomMsg;
  feedbackBox.style.display = "flex";
}

/* RESET */
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    // clear scores
    for (let key in dimScores) delete dimScores[key];

    // reset dots
    document.querySelectorAll(".wdot").forEach((dot) => {
      dot.classList.remove("active");
    });

    // reset numbers
    document.querySelectorAll(".wellness-score").forEach((score) => {
      score.textContent = "–";
    });

    // hide feedback
    feedbackBox.style.display = "none";
  });
}
/* ── FAQ Accordion ── */
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    const answer = btn.nextElementSibling;

    // close all others
    document.querySelectorAll(".faq-question").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      b.nextElementSibling.classList.remove("open");
    });

    if (!isOpen) {
      btn.setAttribute("aria-expanded", "true");
      answer.classList.add("open");
    }
  });
});
