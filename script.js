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
  "Smile, even a little — it can actually improve your mood.",
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
    day: "numeric",
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
    behavior: "smooth",
  });
}

/* /── Quiz Logic ── */
/* ── Quiz Logic ── */
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
          text: "Low mood symptoms. You're doing well overall — keep maintaining your self-care habits."
        };
      if (score <= 9)
        return {
          icon: "fa-cloud-sun",
          level: "Mild",
          text: "Mild mood symptoms. You're experiencing some difficulties — consider small coping strategies."
        };
      if (score <= 14)
        return {
          icon: "fa-cloud-rain",
          level: "Moderate",
          text: "Moderate mood symptoms. It may help to talk to someone you trust or explore support resources."
        };
      return {
        icon: "fa-bolt",
        level: "High",
        text: "Higher level of distress. Reaching out to a mental health professional is strongly recommended."
      };
    } else {
      if (score <= 5)
        return {
          icon: "fa-bolt",
          level: "Low",
          text: "Low stress level. Your stress levels appear manageable — keep up your routines."
        };
      if (score <= 10)
        return {
          icon: "fa-face-meh",
          level: "Moderate",
          text: "Moderate stress. Try identifying key stressors and introduce small daily stress-relief habits."
        };
      return {
        icon: "fa-face-tired",
        level: "High",
        text: "High stress level. It may help to reassess your workload and seek support or guidance."
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
          const max_score = card.id === "moodQuiz"
            ? total * 3
            : total * 4;

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
