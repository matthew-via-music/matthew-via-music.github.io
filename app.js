const wrapper = document.getElementById("wrapper")

// prettier-ignore
const result = data.map(
  (d,i) => `<div 
  class="item" 
  key=${i}>
  <h2>${d.headline}</h2>
  <p>${d.lead}</p>
  <img src=${d.image ? d.image : null} alt=${d.image ? (d.alt).split(" ").join("-") : "" } />
  </div>`
)

wrapper.innerHTML = result.join(" ")
