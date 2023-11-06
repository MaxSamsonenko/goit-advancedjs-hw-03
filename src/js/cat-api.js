import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_gKDn3kA07EMhY9XYnx6LYVxXMiOOFfs26E6XTFhhaA4s3IwDwa9OExRibozNaEE3";

export async function fetchBreeds() {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/breeds"
    );
    return response.data;
  }

export async function fetchCatByBreed(breedId){
    const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
      );
      return response.data;
}