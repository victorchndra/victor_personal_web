'use server'

import axios from "axios";

export async function getAllBlogCategories() {
  try {
    const res = await fetch(`${process.env.HOST_API}/blogCategory`, {
      method: "GET",
      cache: "no-cache"
    })

    return res.json()
  } catch (err) {
    return err
  }
}

export async function getAllBlogPosts() {
  const data = axios.get(`${process.env.HOST_API}/blog`)
    .then(res => res.data)
    .catch(err => console.error(err))

  return data
}

export async function getFilteredBlogPosts($params: string) {
  try {
    const res = await fetch(`${process.env.HOST_API}/blog/${$params}`, {
      method: "GET",
      cache: "no-cache"
    })

    return res.json()
  } catch (err) {
    return err
  }
}