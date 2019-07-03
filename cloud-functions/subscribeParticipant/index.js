/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

var functions = require('firebase-functions');

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

exports.subscribeUserToProject = functions.https.onCall((data, context) => {

  //Get the user email
  let email = data.email;

  //Get the user first name
  let firstName = data.firstName;

  //Get the user last name
  let lastName = data.lastName;

  //Get the segment id of the project
  let segmentID = data.segmentID;

  try {
    //Check if user exists
    const res = checkUserExiststMailChimp(email);
    console.log("user exists");
    console.log(res);
  } catch (e) {
    console.log("user does not exist");
    console.log(e.status);

    if (e.status === "404" || e.status === 404) {
      console.log("trying to subscribe...");
      subscribeUserToListMailChimp(email, firstName, lastName);
      console.log("subscribed successfully...");
    }
  }
  console.log({ segmentID });
  addTagUserMailChimp(email, segmentID);
  console.log("success");
  return res.send(200);


});