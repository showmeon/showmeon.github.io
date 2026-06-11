/* ---------- i18n ---------- */
const I18N = {
  zh: {
    "meta.title": "夏鸣远 | Mingyuan Xia",

    "hero.name": '夏鸣远 <span class="nickname">(showmeon)</span>',
    "hero.intro":
      '我即将进入<a href="https://www.ustc.edu.cn/" target="_blank" rel="noopener">中国科学技术大学</a>信息科学学院攻读硕士学位，本科毕业于<a href="https://www.jlu.edu.cn/" target="_blank" rel="noopener">吉林大学</a>计算机科学与技术学院。目前在形界智能实习，从事流式视频生成方向的研究。',
    "hero.email": "邮箱",
    "hero.scholar": "学术主页",

    "research.title": "研究方向",
    "research.desc":
      "我的研究兴趣包括时间序列预测（Time Series Forecasting）、多模态文档理解（Multimodal Document Understanding）、视频 Agent 以及视频生成 / 数字人（Video Generation, Avatar）。",

    "news.title": "动态",
    "news.item1": "将进入中国科学技术大学信息科学学院攻读硕士学位。",
    "news.item2": "加入形界智能，研究方向为流式视频生成。",
    "news.item3": "加入元石创新科技担任算法实习生，方向为视频 Agent 与实时视频生成。",
    "news.item4": "论文 TimeEmb 被 NeurIPS 2025 接收（Poster）。",

    "pub.title": "论文",
    "pub1.code": "代码",
    "pub1.desc":
      "针对时间序列预测中的分布偏移问题，提出静态-动态解耦范式：以时间步为索引的 embedding bank 存储数据集尺度的时不变信息，并使用频域滤波重塑时变分量的频谱。模型性能优于先进 baseline，且计算资源需求更低。",

    "exp.title": "实习经历",
    "exp1.date": "2026.06 – 至今",
    "exp1.org": "形界智能",
    "exp1.role": "算法实习生",
    "exp1.desc": "流式视频生成",
    "exp2.date": "2026.02 – 2026.05",
    "exp2.org": "元石创新科技",
    "exp2.role": "算法实习生",
    "exp2.desc": "视频 Agent、实时视频生成",

    "edu.title": "教育经历",
    "edu1.date": "2026 – 2029",
    "edu1.school": "中国科学技术大学",
    "edu1.degree": "信息科学学院 · 硕士研究生",
    "edu2.date": "2022.08 – 2026.06",
    "edu2.school": "吉林大学",
    "edu2.degree": "计算机科学与技术学院 · 计算机科学与技术专业 · 本科",

    "footer.name": "夏鸣远",
  },

  en: {
    "meta.title": "Mingyuan Xia",

    "hero.name": 'Mingyuan Xia <span class="nickname">(showmeon)</span>',
    "hero.intro":
      'I am an incoming M.S. student at the School of Information Science and Technology, <a href="https://en.ustc.edu.cn/" target="_blank" rel="noopener">University of Science and Technology of China</a> (USTC). I received my B.E. from the College of Computer Science and Technology, <a href="https://www.jlu.edu.cn/" target="_blank" rel="noopener">Jilin University</a>. I am currently an intern at Xingjie Intelligence, working on streaming video generation.',
    "hero.email": "Email",
    "hero.scholar": "Scholar",

    "research.title": "Research",
    "research.desc":
      "My research interests include time series forecasting, multimodal document understanding, video agents, and video generation (avatars).",

    "news.title": "News",
    "news.item1": "Will start my M.S. at the School of Information Science and Technology, USTC.",
    "news.item2": "Joined Xingjie Intelligence, working on streaming video generation.",
    "news.item3": "Joined Yuanshi Innovation Technology as an algorithm intern, working on video agents and real-time video generation.",
    "news.item4": "TimeEmb was accepted to NeurIPS 2025 (Poster).",

    "pub.title": "Publications",
    "pub1.code": "code",
    "pub1.desc":
      "To address distribution shift in time series forecasting, we propose a static–dynamic disentanglement paradigm: a timestep-indexed embedding bank stores dataset-level time-invariant information, while frequency-domain filtering reshapes the spectrum of time-varying components. TimeEmb outperforms strong baselines with lower computational cost.",

    "exp.title": "Internships",
    "exp1.date": "Jun 2026 – Present",
    "exp1.org": "Xingjie Intelligence",
    "exp1.role": "Algorithm Intern",
    "exp1.desc": "Streaming video generation",
    "exp2.date": "Feb 2026 – May 2026",
    "exp2.org": "Yuanshi Innovation Technology",
    "exp2.role": "Algorithm Intern",
    "exp2.desc": "Video agents and real-time video generation",

    "edu.title": "Education",
    "edu1.date": "2026 – 2029",
    "edu1.school": "University of Science and Technology of China",
    "edu1.degree": "School of Information Science and Technology · M.S.",
    "edu2.date": "Aug 2022 – Jun 2026",
    "edu2.school": "Jilin University",
    "edu2.degree": "College of Computer Science and Technology · B.E. in Computer Science and Technology",

    "footer.name": "Mingyuan Xia",
  },
};

const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");

function applyLang(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = dict["meta.title"];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  langToggle.textContent = lang === "zh" ? "EN" : "中";
  localStorage.setItem("lang", lang);
}

langToggle.addEventListener("click", () => {
  const next = localStorage.getItem("lang") === "en" ? "zh" : "en";
  applyLang(next);
});

applyLang(localStorage.getItem("lang") || "zh");

/* ---------- Theme ---------- */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
});

applyTheme(
  localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
);

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
