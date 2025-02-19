export const formatCardNumber = (value) =>
  value ? value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ") : "";
export const formatCvv = (value) => (value ? value.replace(/\D/g, "") : "");
export const formatExpirationDate = (value) =>
  value ? value.replace(/(\d{2})(?=\d{2})/, "$1/") : "";

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
