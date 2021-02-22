import mrnotifySMS from "mrnotify-sdk";

export const sms = (msg) => {
  const requestData = {
    msisdn: "94768306127",
    name: "musab",
    groups: ["94768306127"],
    message: msg,
  };
  mrnotifySMS.sendSMS(process.env.MR_NOTIFY, requestData);
};
