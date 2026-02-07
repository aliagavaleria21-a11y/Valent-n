const startDate = new Date(2022, 8, 14); // Septiembre = 8
const today = new Date();

const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const years = Math.floor(diffDays / 365);
const months = Math.floor((diffDays % 365) / 30);

document.getElementById("days").innerText =
  `${diffDays} días juntos`;
