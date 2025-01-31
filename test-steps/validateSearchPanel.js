export async function validateSearchPanel(searchQuery) {
  await SearchPage.search(searchQuery);
  const isSearchDialogDisplayed = await SearchPage.isSearchDialogDisplayed();
  expect(isSearchDialogDisplayed).toBe(true);
}