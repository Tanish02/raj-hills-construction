export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  window.history.replaceState(null, "", `/#${id}`);
  el.scrollIntoView({ behavior: "smooth" });
};

export default scrollToSection;

// end code
