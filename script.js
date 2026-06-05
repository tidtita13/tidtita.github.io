<script>

// ======================
// ข้อความต้อนรับ
// ======================

window.onload = function () {
    alert("🌸 ยินดีต้อนรับสู่ Portfolio ของ Tidtita ✨");
};

// ======================
// เอฟเฟกต์คลิก Project
// ======================

const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    project.addEventListener("click", () => {

        project.style.transform = "scale(1.03)";

        setTimeout(() => {
            project.style.transform = "scale(1)";
        }, 200);

    });
});

// ======================
// ปุ่มเลื่อนขึ้นด้านบน
// ======================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ffb6d5";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ======================
// แสดงเวลาปัจจุบัน
// ======================

const footer = document.querySelector("footer");

setInterval(() => {

    const now = new Date();

    footer.innerHTML =
    `© 2026 Tidtita Portfolio ✨ | ${now.toLocaleTimeString()}`;

}, 1000);

</script>
