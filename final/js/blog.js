
$(document).ready(function () {
    // Статьи
   
    const articles = [
        { title: "The Rise of AI in Healthcare", category: "AI", date: "2025-02-20", description: "How artificial intelligence is revolutionizing medical diagnosis and treatment.", image: "http://127.0.0.1:5500/media/im1.jpg" },
        { title: "CRISPR Gene Editing Breakthrough", category: "Biotech", date: "2025-02-15", description: "Scientists discover a new way to modify human genes safely.", image: "http://127.0.0.1:5500/media/im2.jpg" },
        { title: "Elon Musk's Mars Colony Plans", category: "Space", date: "2025-02-10", description: "New updates on SpaceX's mission to colonize Mars.", image: "http://127.0.0.1:5500/media/im3.jpg" }
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
