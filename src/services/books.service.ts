import { IBookData, IBookResponse } from "@/types/book";
import api from "./api";

export async function getBooks() {
  const url = "/api/v1/books";
  const res = await api.get<IBookResponse>(url);
  try {
    if (res.status === 200) {
      return res?.data;
    } else {
      const error = new Error("An error occurred while fetching the data.");

      throw error;
    }
  } catch (error_1) {
    throw error_1;
  }
}
