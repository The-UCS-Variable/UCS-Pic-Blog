console.log("version: 2.0.0-alpha");
/*
colors: #39ff14 , #ff1439 , hsl(51, 100%, 59%)

To-do list:
- Add a Hover Tips popup at a fixed position
- Ability for users to change the accent color (Maybe)
- check out lit / web components stuff
*/

(async () => {
  const AboutTabs = document.getElementsByClassName("abouttab");
  const AboutContent = <HTMLDivElement>document.getElementById("main-content");
  const ACTIVE_TAB = "activetab";

  for (let i = 0; i < AboutTabs.length; i++) {
    const tab = <HTMLButtonElement>AboutTabs[i];
    const templ = <HTMLTemplateElement>document.getElementById(`templ-${tab.dataset.tempid}`);

    tab.addEventListener("click", () => {
      if (!tab.classList.contains(ACTIVE_TAB)) {
        change_active_tab_color(tab);
        let x = templ.content.cloneNode(true);
        AboutContent.innerHTML = "";
        AboutContent.appendChild(x);
      }
    });

    if (tab.dataset.defopen) {
      tab.click();
    }
  }

  function change_active_tab_color(tab: HTMLButtonElement) {
    document.getElementsByClassName(ACTIVE_TAB)[0]?.classList.remove(ACTIVE_TAB);
    tab.classList.add(ACTIVE_TAB);
  }
})();

// (async () => {
//   const username = "u-c-s";
//   let github_api_url = new URL(`https://api.github.com/users/${username}/events/public`);
//   github_api_url.searchParams.append("per_page", "5");

//   let fetchRes = await fetch(github_api_url.toString());
//   let ResponseJson = await fetchRes.json();
// })();

const x = document.getElementById("The-Pro-Button");
const thisPage = new URL(window.location.toString());

x?.addEventListener("click", () => {
  thisPage.searchParams.set("pro", "1");
  window.history.pushState({}, "", thisPage.toString());
});
