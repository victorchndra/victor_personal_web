'use server'

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
  try {
    const res = await fetch(`${process.env.HOST_API}/blog`, {
      method: "GET",
      cache: "no-cache"
    })

    return res.json()
  } catch (err) {
    return err
  }
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

export async function getBlogPost($category: string, $blog: string) {
  try {
    const res = await fetch(`${process.env.HOST_API}/blog/${$category}/${$blog}`, {
      method: "GET",
      cache: "no-cache"
    })

    return res.json()
  } catch (err) {
    return err
  }
}