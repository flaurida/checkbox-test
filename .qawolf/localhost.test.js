const qawolf = require("qawolf");
const selectors = require("./selectors/localhost.json");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test('localhost', async () => {
  await page.goto("http://localhost:3000/");
  await page.click(selectors["0_button"]);
  await page.click(selectors["1_checkbox_65_ew_08_input"]);
  await page.click(selectors["2_button"]);
  await page.click(selectors["3_button"]);
  await page.click(selectors["4_checkbox_dp_6_ozv_input"]);
});