import axios from "axios";
const SERVER_URL = "https://vocabulary-builder-01.herokuapp.com/api/v1/";

export const addWord = async (word) => {
  const { data } = await axios.post(SERVER_URL + 'words', word);
  return data;
};

export const getWord = async (wordId) => {
  const {data} = await axios.get(SERVER_URL + `words/${wordId}`)
  console.log(data);
  return data;
};

export const getAllWords = async () => {
  const res = await fetch(SERVER_URL + 'words');
  return res.json();
};

export const getAllPhrase = async () => {
  const res = await fetch(SERVER_URL + 'phrase');
  return res.json();
}

export const addPhrase = async (phrase) => {
  const {data} = await axios.post(SERVER_URL + 'phrase', phrase);
  return data
}