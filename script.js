(function () {
  const grid = document.getElementById("grid");
  const modal = document.getElementById("modal");
  const $ = (id) => document.getElementById(id);
  document.getElementById("year").textContent = new Date().getFullYear();

  function gradient(i) {
    const hue = (i * 67 + 200) % 360;
    return `linear-gradient(135deg, hsl(${hue} 55% 22%), hsl(${(hue + 60) % 360} 60% 10%))`;
  }

  function thumb(p, i) {
    const el = document.createElement("div");
    el.className = "thumb";
    if (p.image) {
      el.style.backgroundImage = `url("${p.image}")`;
      if (p.crop) {
        el.style.backgroundSize = p.crop.size;
        el.style.backgroundPosition = p.crop.pos;
        el.style.backgroundRepeat = "no-repeat";
        if (p.crop.bg) el.style.backgroundColor = p.crop.bg;
      }
    }
    else { el.style.background = gradient(i); el.textContent = p.title.charAt(0); }
    return el;
  }

  PROJECTS.forEach((p, i) => {
    const card = document.createElement("button");
    card.className = "card";
    card.appendChild(thumb(p, i));
    const h = document.createElement("h3"); h.textContent = p.title;
    const m = document.createElement("p"); m.className = "meta"; m.textContent = `${p.year} · ${p.tags}`;
    card.append(h, m);
    card.addEventListener("click", () => open(p, i));
    grid.appendChild(card);
  });

  function open(p, i) {
    const media = $("mMedia");
    media.replaceChildren();
    if (p.video) {
      const f = document.createElement("iframe");
      f.referrerPolicy = "strict-origin-when-cross-origin";
      f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      f.src = p.video; f.allowFullscreen = true; f.title = p.title;
      media.appendChild(f);
    } else media.appendChild(thumb(p, i));
    $("mTitle").textContent = p.title;
    $("mMeta").textContent = `${p.year} · ${p.tags}`;
    const bl = $("mBullets"); bl.replaceChildren();
    (p.bullets || []).forEach((t) => {
      const li = document.createElement("li"); li.textContent = t; bl.appendChild(li);
    });
    const links = $("mLinks"); links.replaceChildren();
    (p.links || []).forEach((l) => {
      const a = document.createElement("a");
      a.href = l.url; a.textContent = l.label; a.target = "_blank"; a.rel = "noopener";
      links.appendChild(a);
    });
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function close() {
    modal.hidden = true;
    $("mMedia").replaceChildren(); // stops any playing video
    document.body.style.overflow = "";
  }
  $("close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
})();
