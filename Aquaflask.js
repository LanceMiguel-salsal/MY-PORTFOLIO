function searchPage() {

    let search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    if (search === "") {

        alert("Please enter something to search.");

        return;
    }


    if (
        search.includes("home") ||
        search.includes("portfolio")
    ) {

        window.location.href = "Index.html";

        return;
    }


    if (
        search.includes("about") ||
        search.includes("mission") ||
        search.includes("me")
    ) {

        window.location.href = "About.html";

        return;
    }


    if (
        search.includes("skill") ||
        search.includes("computer") ||
        search.includes("guitar") ||
        search.includes("learn")
    ) {

        window.location.href = "Skills.html";

        return;
    }


    if (
        search.includes("project") ||
        search.includes("website") ||
        search.includes("laboratory")
    ) {

        window.location.href = "Projects.html";

        return;
    }


    if (
        search.includes("contact") ||
        search.includes("email") ||
        search.includes("phone")
    ) {

        window.location.href = "Contact.html";

        return;
    }


    if (
        search.includes("resume") ||
        search.includes("cv")
    ) {

        window.location.href = "Resume.pdf";

        return;
    }


    alert(
        "No result found. Try searching for Home, About, Skills, Projects, Contact, or Resume."
    );
}