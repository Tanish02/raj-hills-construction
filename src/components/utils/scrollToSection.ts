export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  window.history.pushState(null, "", `/${id}`);
  element.scrollIntoView({ behavior: "smooth" });
};

export default scrollToSection;
