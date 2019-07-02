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

const Mailchimp = require("mailchimp-api-v3");

const api_key = process.env.MAILCHIMP_API_KEY;
const mailchimp = new Mailchimp(api_key);

const createSegmentToMailChimp = projectName => {
  const mailchimpApiUrl = "https://us3.api.mailchimp.com/3.0";
  const listID = process.env.MAILCHIMP_LIST_ID;

  return mailchimp.post(`/lists/${listID}/segments`, {
    name: projectName,
    static_segment: []
  });
};

exports.handleNewProjectCreation = async (event, context) => {
  const resource = context.resource;

  // log out the resource string that triggered the function
  console.log("Function triggered by change to: " + resource);

  //Save id of new doc
  let docID = context.params.id;

  //Get the name of the project
  let data = event;
  let pName = data.value.fields.projectName.stringValue;
  const res = await createSegmentToMailChimp(pName);
  const projectId = res.id;
  let docRef = firestore.collection("projects").doc(docID);
  await docRef.update({ segmentID: projectId });

  res.status(200).send("ok");
};
