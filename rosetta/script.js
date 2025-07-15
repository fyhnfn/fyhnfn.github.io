// Dictionary article with multiple content sections
const article = {
  word: "Concomitant",
  pronunciation: "/kənˈkɒm.ɪ.tənt/",
  partOfSpeech: "adjective & noun",
  sections: [
    {
      type: "definition",
      content: "Naturally accompanying or associated; occurring with something else."
    },
    {
      type: "example",
      content: "He enjoyed the privileges and the concomitant responsibilities of leadership."
    },
    {
      type: "etymology",
      content: "From Latin *concomitari*, meaning ‘to accompany’."
    },
    {
      type: "note",
      content: "Often used in formal or academic contexts to indicate a parallel condition or phenomenon."
    }
  ]
};

// When DOM is ready, display a random section
window.addEventListener("DOMContentLoaded", () => {
  const section = article.sections[Math.floor(Math.random() * article.sections.length)];

  document.getElementById("section-label").textContent =
    `Today's Focus: ${capitalize(section.type)}`;

  document.getElementById("entry").innerHTML = `
    <div class="word">${article.word}</div>
    <div class="pronunciation">${article.pronunciation}</div>
    <div class="part-of-speech">${article.partOfSpeech}</div>

    <div class="section ${section.type}">
      <strong>${capitalize(section.type)}:</strong>
      <p>${section.content}</p>
    </div>
  `;
});

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
