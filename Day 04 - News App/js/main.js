const start_date = moment().format("YYYY-MM-DD"),
  end_date = moment()
    .subtract(7, "days")
    .format("YYYY-MM-DD");

const url = "https://newsapi.org/v2/everything?sortBy=publishedAt&language=en";

const query = document.getElementById("query"),
  error = document.querySelector(".error"),
  btn = document.getElementById("submit"),
  news = document.querySelector(".news");

document.getElementById("search").addEventListener("submit", function(e) {
  e.preventDefault();

  if (query.value === "") {
    error.innerHTML = "The term should not be blank";
  } else {
    getNews();
  }
});

function getNews() {
  btn.innerHTML = "Searching...";
  fetch(`${url}&q=${query.value}&from=${start_date}&to=${end_date}`, {
    headers: {
      "x-api-key": "a260fe2a7799406b933e809e7fc7add2"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === "ok") {
        showArticles(data);
      } else {
        console.log(`${data.status} : ${data.message}`);

        error.innerHTML = `${data.status} : ${data.message}`;
      }
    })
    .catch(err => console.error(err));
}

function showArticles(data) {
  news.innerHTML = "";
  error.innerHTML = "";

  news.innerHTML = `<span class="news-meta">We have found ${data.articles.length} headline(s) for your query.</span>`;

  if (data.totalResults > 0) {
    data.articles.forEach(article => {
      let card = `
    
            <div class="card">
              <div class="card-img">
                <img
                  src="${article.urlToImage}"
                />
              </div>
              <div class="card-body">
                <h2><a href="${article.url}" target="_blank">${
        article.title
      }</a></h2>
                <p class="meta"> 
                  <span class="source">${article.source.name}</span>
                  at <span class="date">${moment(article.publishedAt).format(
                    "MMM Do YYYY"
                  )}</span> by <span class="author">${article.author}</span>,
                </p>
                <p class="content">
                  ${article.description}
                </p>
              </div>
            </div>
            
            `;

      news.innerHTML += card;
    });
  } else {
    news.innerHTML = "No news found for your query";
  }
  btn.innerHTML = "Search";
}
