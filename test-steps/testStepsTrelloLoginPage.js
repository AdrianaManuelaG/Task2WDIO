export async function validateSuccessfullLogin() {
  const memberButton = await $('[data-testid="header-member-menu-button"]');
  expect(await memberButton.isDisplayed());
}