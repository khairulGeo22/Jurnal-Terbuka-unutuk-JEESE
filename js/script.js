const OJS = "https://ejournal.edukhatulistiwa.com/index.php/JEESE";

/* NAVIGATION */
function goSubmit(){ window.location.href = OJS + "/submissions"; }
function goLogin(){ window.location.href = OJS + "/login"; }
function goGuidelines(){ window.location.href = OJS + "/about/submissions"; }
function goCurrent(){ window.location.href = OJS + "/issue/current"; }
function goArchives(){ window.location.href = OJS + "/issue/archive"; }
function goArticles(){ window.location.href = OJS + "/issue/current"; }

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

/* MOBILE MENU */
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

/* HIGHLIGHT LOAD */
fetch("data/highlights.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("highlightContainer");

    data.forEach(item => {
      container.innerHTML += `
        <div class="highlight-card">
          <h4>${item.title}</h4>
          <p>${item.summary}</p>
          <button onclick="window.open('${item.link}','_blank')">
            Read More
          </button>
        </div>
      `;
    });
  });
