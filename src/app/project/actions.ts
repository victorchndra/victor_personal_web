'use server'

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

export async function getAllProjectPosts() {
  try {
    const res = await fetch(`${process.env.HOST_API}/project`, {
      method: "GET",
      cache: "no-cache"
    })

    return res.json()
  } catch (err) {
    return err
  }
}

export async function getFilteredProjectPosts($params: string) {
  try {
    const res = await fetch(`${process.env.HOST_API}/project/${$params}`, {
      method: "GET",
      cache: "no-cache"
    })

    return res.json()
  } catch (err) {
    return err
  }
}

export async function getProjectPost($category: string, $project: string) {
  try {
    const res = await fetch(`${process.env.HOST_API}/project/${$category}/${$project}`, {
      method: "GET",
      cache: "no-cache"
    })

    return res.json()
  } catch (err) {
    return err
  }
}