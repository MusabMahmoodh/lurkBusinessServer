import mrnotifySMS from "mrnotify-sdk";

const requestData = {
  msisdn: "94768306127",
  name: "musab",
  groups: ["94768306127"],
  message: "Hi 765",
};
export const sms = () => {
  mrnotifySMS.sendSMS(process.env.MR_NOTIFY, requestData);
};
