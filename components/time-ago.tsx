"use client";
import ReactTimeAgo from "react-time-ago";
import JsTimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import fr from "javascript-time-ago/locale/fr.json";

JsTimeAgo.addDefaultLocale(en);
JsTimeAgo.addLocale(fr);

type TimeAgoProps = {
  date: Date;
};

export function TimeAgo({ date }: TimeAgoProps) {
  return <ReactTimeAgo date={date} locale="fr" />;
}
