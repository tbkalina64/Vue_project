/* eslint-disable no-useless-escape */
import Vue from "vue";

Vue.filter("fixed", function (value, fixTo) {
  if (!value) return "0";
  return value.toFixed(fixTo);
});

Vue.filter("hideCardNumber", function (value) {
  if (!value) return "0";
  const n = value.toString();
  return "*" + n.substring(n.length - 4);
});

Vue.filter("time", function (value) {
  const time = +value;
  if (!time || typeof time === "string") return "0";
  const formatter = new Intl.DateTimeFormat("en", { timeStyle: "short" });
  return formatter.format(new Date(+time * 1000));
});

Vue.filter("date", function (value) {
  const time = +value;
  if (!time || typeof time === "string") return "0";
  const formatter = new Intl.DateTimeFormat("en", { dateStyle: "medium" });
  return formatter.format(new Date(+time * 1000));
});

Vue.filter("date-time", function (value) {
  const time = +value;
  if (!time || typeof time === "string") return "0";
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  });
  return formatter.format(new Date(+time * 1000));
});

Vue.filter("dateMedium", function (value) {
  const time = +value;
  if (!time || typeof time === "string") return "0";
  const formatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatter.format(new Date(+time));
});

Vue.filter("formatCardNumber", function (value) {
  return value ? value.match(/.{1,4}/g).join(" ") : "";
});

Vue.filter("formatExpirationDate", function (value) {
  return value
    ? value
        .replace(
          /^([1-9]\/|[2-9])$/g,
          "0$1/" // 3 > 03/
        )
        .replace(
          /^(0[1-9]|1[0-2])$/g,
          "$1/" // 11 > 11/
        )
        .replace(
          /^([0-1])([3-9])$/g,
          "0$1/$2" // 13 > 01/3
        )
        .replace(
          /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
          "$1/$2" // 141 > 01/41
        )
        .replace(
          /^([0]+)\/|[0]+$/g,
          "0" // 0/ > 0 and 00 > 0
        )
        .replace(
          /[^\d\/]|^[\/]*$/g,
          "" // To allow only digits and `/`
        )
        .replace(
          /\/\//g,
          "/" // Prevent entering more than 1 `/`
        )
    : "";
});
