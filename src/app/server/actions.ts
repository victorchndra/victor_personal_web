'use server'

import axios from "axios";

export async function getAllProjectCategories() {
  try {
    const res = await fetch(`${process.env.HOST_API}/projectCategory`, {
      method: "GET",
      cache: "no-cache"
    })

    return res.json()
  } catch (err) {
    return err
  }
}

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

export async function getAllProjectPosts() {
  const data = axios.get(`${process.env.HOST_API}/project`)
    .then(res => res.data)
    .catch(err => console.error(err))

  return data
}

export async function getFilteredBlogPosts($params: string) {
  const data = axios.get(`${process.env.HOST_API}/blog/${$params}`)
    .then(res => res.data)
    .catch(err => console.error(err))

  return data
}