export async function getHomeData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('http://124.70.211.101:8001/api/v1/nocheck/home')
    return res.json()
}