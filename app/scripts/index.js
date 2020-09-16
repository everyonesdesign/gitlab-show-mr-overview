const isGitlab = Boolean(document.querySelector('.navbar-gitlab'));

if (isGitlab) {
  const tabs = [...document.querySelectorAll('.merge-request .merge-request-tabs a')];
  if (tabs.length) {
    const activeTab = tabs.find((i) => i.parentNode.classList.contains('active'));
    const notesTab = tabs.find((i) => i.getAttribute('data-target') === '#notes');

    // This interaction fetches MR actions and pipelines details
    if (activeTab !== notesTab) {
      notesTab.click();
      setTimeout(() => activeTab.click());
    }
  }
}
