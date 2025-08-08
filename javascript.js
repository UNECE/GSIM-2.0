document.addEventListener("DOMContentLoaded", function () {
  // --- TOC Generator ---
  const content = document.querySelector(".main-content");
  const sidebarNav = document.getElementById("sidebar-nav");

  const headings = content.querySelectorAll("h2, h3, h4");

  headings.forEach((heading) => {
    if (!heading.id) {
      heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    }

    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;

    const listItem = document.createElement("li");
    listItem.appendChild(link);

if (heading.tagName === "H2") {
  listItem.classList.add("indent-h2");
} else if (heading.tagName === "H3") {
  listItem.classList.add("indent-h3");
} else if (heading.tagName === "H4") {
  listItem.classList.add("indent-h4");
}

    sidebarNav.appendChild(listItem);
  });

  // --- Sidebar Resizer ---
  const sidebar = document.getElementById("sidebar");
  const resizer = document.getElementById("resizer");
  let isResizing = false;

  resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    document.body.style.cursor = "ew-resize";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const newWidth = e.clientX;
    if (newWidth > 150 && newWidth < 500) {
      sidebar.style.width = `${newWidth}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isResizing = false;
    document.body.style.cursor = "default";
  });
});
