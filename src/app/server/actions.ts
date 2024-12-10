'use server'

import axios from "axios";

export async function getAllCategories() {
  try {
    const data = axios.get(`${process.env.HOST_API}/projectCategory`, {
      method: "GET"
    })
      .then(res => res.data)
      .catch(err => console.log(err))

    return data;
  } catch (error) {
    console.error(error)
  }
}