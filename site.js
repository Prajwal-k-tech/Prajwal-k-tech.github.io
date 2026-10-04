// Navigation follows the section the reader is in. Content works without JS.
(() => {
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll(".site-header nav a")];
  const sections = [...document.querySelectorAll("main > .section")];
  const visible = new Set();

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    }
    const current = sections.slice().reverse().find((section) => visible.has(section));
    for (const link of links) {
      const currentId = current?.id === "group-work" ? "work" : current?.id;
      if (currentId === link.hash.slice(1)) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  // A band in the upper half handles both anchor offsets and short final sections.
  }, { rootMargin: "-25% 0px -50% 0px", threshold: 0 });

  for (const section of sections) {
    if (section) observer.observe(section);
  }
})();
