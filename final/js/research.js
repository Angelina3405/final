
$(document).ready(function () {
    // Статьи
   
    const articles = [
        { title: "Quantum AI", category: "AI", date: "2025-02-20", description: "Revolutionizing artificial intelligence with quantum computing.", image: "http://127.0.0.1:5500/media/st1.jpg" },
        { title: "BioNanoTech", category: "Biotech", date: "2025-02-15", description: "Developing nanotechnology for medical advancements.", image: "http://127.0.0.1:5500/media/st2.jpg" },
        { title: "EcoEnergy", category: "Space", date: "2025-02-10", description: "Stay updated with the latest trends in science and technology", image: "http://127.0.0.1:5500/media/st3.jpg" }
    ];

    function displayArticles(filteredArticles) {
        $("#blogPosts").html("");
        filteredArticles.forEach(article => {
            $("#blogPosts").append(`
                <div class="blog-card">
                    <img src="${article.image}" alt="Blog Image">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            `);
        });
    }

    // Первоначальная загрузка статей
    displayArticles(articles);

    // Фильтрация статей
    $("#categoryFilter").change(function () {
        const selectedCategory = $(this).val();
        if (selectedCategory === "all") {
            displayArticles(articles);
        } else {
            const filtered = articles.filter(article => article.category === selectedCategory);
            displayArticles(filtered);
        }
    });

    // Поиск статей
    $("#searchInput").on("input", function () {
        const searchText = $(this).val().toLowerCase();
        const filtered = articles.filter(article => article.title.toLowerCase().includes(searchText));
        displayArticles(filtered);
    });
});