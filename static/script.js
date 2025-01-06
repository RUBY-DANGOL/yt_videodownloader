document.getElementById("downloadForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const url = formData.get("url");

    try {
        const response = await fetch("/download", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            const blob = await response.blob();
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "video.mp4";
            link.click();
        } else {
            const data = await response.json();
            document.getElementById("result").textContent = data.error || "Download failed!";
        }
    } catch (error) {
        document.getElementById("result").textContent = "An error occurred!";
    }
});
