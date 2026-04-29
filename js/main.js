document.addEventListener("DOMContentLoaded", () => {
    console.log("REPHNEWS initialized");

    const articles = {
        "article-1": {
            title: "New Economic Policy targets 7% GDP Growth by 2027",
            image: "assets/images/reph1.jpg",
            content: "The National Economic Development Authority unveiled a comprehensive roadmap aimed at pushing the country's GDP growth to 7% by 2027. The plan focuses on infrastructure modernization, expanding digital services, boosting agricultural productivity, and incentivizing foreign investment in renewable energy. Economists say the targets are ambitious but achievable if reforms in tax collection and regulatory streamlining are sustained over the next two years."
        },
        "article-2": {
            title: "Philippines to launch local satellite constellation by late 2026",
            image: "assets/images/tech.jpg",
            content: "The Department of Science and Technology has confirmed that the Philippines will launch its first locally-built satellite constellation by the fourth quarter of 2026. The constellation will provide nationwide high-speed internet coverage, improved weather monitoring, and disaster response capabilities. Local engineers, in collaboration with universities and private aerospace startups, are leading the project."
        },
        "article-3": {
            title: "Pasig River Ferry adds 5 new air-conditioned stations",
            image: "assets/images/metro.jpg",
            content: "Commuters along the Pasig River corridor can now enjoy faster, more comfortable rides as the Metropolitan Manila Development Authority opened five new air-conditioned ferry stations this week. The expansion is part of a broader push to decongest Metro Manila's roads by promoting waterway transport. Ridership has already increased by 30% since the soft launch."
        }
    };

    const homePage = document.getElementById("home-page");
    const articlePage = document.getElementById("article-page");

    function showArticle(id) {
        const article = articles[id];
        if (!article) return;

        document.getElementById("article-title").textContent = article.title;
        document.getElementById("article-image").src = article.image;
        document.getElementById("article-content").textContent = article.content;

        homePage.classList.add("hidden");
        articlePage.classList.remove("hidden");

        if (window.location.hash !== "#" + id) {
            window.location.hash = id;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function showHome() {
        articlePage.classList.add("hidden");
        homePage.classList.remove("hidden");
        if (window.location.hash) {
            history.replaceState(null, "", window.location.pathname + window.location.search);
        }
    }

    document.querySelectorAll("[data-article]").forEach(el => {
        el.addEventListener("click", () => {
            const id = el.getAttribute("data-article");
            showArticle(id);
        });
    });

    document.getElementById("back-btn").addEventListener("click", showHome);

    window.addEventListener("hashchange", () => {
        const id = window.location.hash.replace("#", "");
        if (articles[id]) {
            showArticle(id);
        } else {
            showHome();
        }
    });

    const initialId = window.location.hash.replace("#", "");
    if (articles[initialId]) {
        showArticle(initialId);
    }
});
