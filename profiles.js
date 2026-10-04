// Codeforces officially supports JSONP, so it works on static GitHub Pages.
// Other judges remain direct profile links: no API keys or scraping proxy.
(() => {
  const rating = document.getElementById("cf-rating");
  const caption = document.getElementById("cf-caption");
  if (!rating || !caption) return;

  const script = document.createElement("script");
  const cleanup = () => {
    window.clearTimeout(timeout);
    script.remove();
    // Keep a harmless callback for a response already queued when we time out.
    window.prajwalCodeforcesProfile = () => {};
  };
  const timeout = window.setTimeout(cleanup, 8000);

  window.prajwalCodeforcesProfile = (response) => {
    const user = response?.status === "OK" ? response.result?.[0] : null;
    if (user?.handle?.toLowerCase() === "oghostyyy" &&
        Number.isInteger(user.rating) && user.rating >= 0 &&
        Number.isInteger(user.maxRating) && user.maxRating >= user.rating) {
      rating.textContent = String(user.rating);
      caption.textContent = `Current rating\nPeak ${user.maxRating}`;
    }
    cleanup();
  };

  script.onerror = cleanup;
  script.src = "https://codeforces.com/api/user.info?handles=oGhostyyy&jsonp=prajwalCodeforcesProfile";
  document.head.append(script);
})();
