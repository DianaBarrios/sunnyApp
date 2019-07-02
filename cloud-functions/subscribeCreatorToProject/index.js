/**
 * Triggered by a change to a Firestore document.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */

const Firestore = require("@google-cloud/firestore");
const firestore = new Firestore({
  projectId: "smiles-ai",
  timestampInSnapshots: true
});

const md5 = require("md5");
const Mailchimp = require("mailchimp-api-v3");
const api_key = process.env.MAILCHIMP_API_KEY;
const mailchimp = new Mailchimp(api_key);
const mailchimpApiUrl = "https://us3.api.mailchimp.com/3.0";
const listID = process.env.MAILCHIMP_LIST_ID;

const checkUserExiststMailChimp = email => {
  const userHash = md5(email);

  return mailchimp.get(`lists/${listID}/members/${userHash}`, {});
};

const subscribeUserToListMailChimp = (email, firstName, lastName) => {
  return mailchimp.post(`/lists/${listID}/members`, {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName
    }
  });
};

const addTagUserMailChimp = (email, segmentID) => {
  const mailchimpApiUrl = "https://us3.api.mailchimp.com/3.0";
  const listID = "e106c50323";

  return mailchimp.post(`/lists/e106c50323/segments/${segmentID}`, {
    members_to_add: [email],
    members_to_remove: []
  });
};

exports.subscribeCreatorToProject = async (event, context) => {
  const resource = context.resource;
  // log out the resource string that triggered the function
  console.log("Function triggered by change to: " + resource);

  //Save id of the doc updated
  let docID = context.params.id;

  let data = event;

  //Get the user email
  let email = data.value.fields.email.stringValue;

  //Get the user first name
  let firstName = data.value.fields.firstName.stringValue;

  //Get the user last name
  let lastName = data.value.fields.lastName.stringValue;

  //Get the segment id of the project
  let segmentID = data.value.fields.segmentID.integerValue;

  try {
    //Check if user exists
    const res = await checkUserExiststMailChimp(email);
    console.log("user exists");
    console.log(res);
  } catch (e) {
    console.log("user does not exist");
    console.log(e.status);

    if (e.status === "404" || e.status === 404) {
      console.log("trying to subscribe...");
      await subscribeUserToListMailChimp(email, firstName, lastName);
      console.log("subscribed successfully...");
    }
  }
  console.log({ segmentID });
  await addTagUserMailChimp(email, segmentID);
  console.log("success");
  return res.send(200);
};
