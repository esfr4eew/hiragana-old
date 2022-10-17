import http from "."

export const newOrder = async (data) => {
    await http.post("/api/orders", { data })
}