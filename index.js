"use strict";

const btn = document.querySelector(".button-container");
const adviceContainer = document.querySelector(".advice");
const adviceId = document.querySelector("#advice-number");
const adviceText = document.querySelector("#advice-text");

const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error("Failed to fetch advice");
    }
    const data = await response.json();

    adviceId.textContent = `#${data.slip.id}`;
    adviceText.textContent = data.slip.advice;
  } catch (error) {
    console.error(error);
  }
};

btn.addEventListener("click", getAdvice);
