import mrnotifySMS from "mrnotify-sdk";

export const sms = (name = "Lurk customer", msg, contact = "94768306127") => {
  const requestData = {
    msisdn: contact,
    name: name,
    groups: [contact],
    message: msg,
  };
  mrnotifySMS.sendSMS(process.env.MR_NOTIFY, requestData);
};
