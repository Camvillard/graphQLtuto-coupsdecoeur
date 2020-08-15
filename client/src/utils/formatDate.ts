import moment from "moment";

export const formatDate = (date: Date) => {
  return moment(date).locale("fr").format("dddd, MMMM Do").toLocaleLowerCase();
};
