(() => {
  const rating = document.getElementById("cf-rating");
  const caption = document.getElementById("cf-caption");
  if (!rating || !caption) return;

  const script = document.createElement("script");
  const timeout = window.setTimeout(() => {
    script.remove();
    delete window.prajwalCodeforcesProfile;
  }, 8000);

  window.prajwalCodeforcesProfile = (response) => {
    window.clearTimeout(timeout);
    const user = response?.status === "OK" ? response.result?.[0] : null;
    if (user && Number.isFinite(user.rating)) {
      rating.textContent = String(user.rating);
      const peak = Number.isFinite(user.maxRating) ? user.maxRating : user.rating;
      caption.textContent = `Current rating · peak ${peak}`;
    }
    delete window.prajwalCodeforcesProfile;
    script.remove();
  };

  script.onerror = () => {
    window.clearTimeout(timeout);
    delete window.prajwalCodeforcesProfile;
  };
  script.src =
    "https://codeforces.com/api/user.info?handles=oGhostyyy&jsonp=prajwalCodeforcesProfile";
  document.head.append(script);
})();
