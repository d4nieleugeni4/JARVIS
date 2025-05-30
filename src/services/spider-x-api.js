/**
 * Funções de comunicação
 * com a API do Spider X.
 */
const axios = require("axios");

const { SPIDER_API_TOKEN, SPIDER_API_BASE_URL } = require("../config");

exports.playAudio = async (search) => {
  if (!search) {
    throw new Error("Você precisa informar o que deseja buscar!");
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    throw new Error("Token da API do Spider X não configurado");
  }

  const { data } = await axios.get(
    `${SPIDER_API_BASE_URL}/downloads/play-audio?search=${encodeURIComponent(
      search
    )}&api_key=${SPIDER_API_TOKEN}`
  );

  return data;
};

exports.playVideo = async (search) => {
  if (!search) {
    throw new Error("Você precisa informar o que deseja buscar!");
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    throw new Error("Token da API do Spider X não configurado");
  }

  const { data } = await axios.get(
    `${SPIDER_API_BASE_URL}/downloads/play-video?search=${encodeURIComponent(
      search
    )}&api_key=${SPIDER_API_TOKEN}`
  );

  return data;
};

exports.gpt4 = async (text) => {
  if (!text) {
    throw new Error("Você precisa informar o parâmetro de texto!");
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    throw new Error("Token da API do Spider X não configurado");
  }

  const { data } = await axios.post(
    `${SPIDER_API_BASE_URL}/ai/gpt-4?api_key=${SPIDER_API_TOKEN}`,
    {
      text,
    }
  );

  return data.response;
};

exports.attp = async (text) => {
  if (!text) {
    throw new Error("Você precisa informar o parâmetro de texto!");
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    throw new Error("Token da API do Spider X não configurado");
  }

  return `${SPIDER_API_BASE_URL}/stickers/attp?text=${encodeURIComponent(
    text
  )}&api_key=${SPIDER_API_TOKEN}`;
};

exports.welcome = async (text, description, imageURL) => {
  if (!text || !description || !imageURL) {
    throw new Error(
      "Você precisa informar o texto, descrição e URL da imagem!"
    );
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    throw new Error("Token da API do Spider X não configurado");
  }

  return `${SPIDER_API_BASE_URL}/canvas/welcome?text=${encodeURIComponent(
    text
  )}&description=${encodeURIComponent(
    description
  )}&image_url=${encodeURIComponent(imageURL)}&api_key=${SPIDER_API_TOKEN}`;
};

exports.stableDiffusion = async (description) => {
  if (!description) {
    throw new Error("Você precisa informar a descrição da imagem!");
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    throw new Error("Token da API do Spider X não configurado");
  }

  const { data } = await axios.get(
    `${SPIDER_API_BASE_URL}/ai/stable-diffusion-turbo?search=${encodeURIComponent(
      description
    )}&api_key=${SPIDER_API_TOKEN}`
  );

  return data;
};

exports.download = async (service, url) => {
  if (!url) {
    throw new Error("Você precisa informar a URL!");
  }

  if (!SPIDER_API_TOKEN || SPIDER_API_TOKEN === "seu_token_aqui") {
    throw new Error("Token da API do Spider X não configurado");
  }

  const { data } = await axios.get(
    `${SPIDER_API_BASE_URL}/downloads/${service}?url=${encodeURIComponent(
      url
    )}&api_key=${SPIDER_API_TOKEN}`
  );

  return data;
};
