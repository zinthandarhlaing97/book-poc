import moment from "moment";

export function formatDate(date: Date | null): string {
  try {
    if (date) {
      return moment(date).format("DD/MM/YYYY");
    } else {
      return "";
    }
  } catch (error) {
    return "";
  }
}
