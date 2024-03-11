<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Akses Kamera HP</title>
</head>
<body>

<h1>Akses Kamera HP</h1>
<video id="videoElement" autoplay></video>
<button id="startButton">Mulai Akses Kamera</button>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("videoElement");

    // Fungsi untuk memulai akses kamera
    function startCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
            })
            .catch(function(err) {
                console.error("Gagal mengakses kamera: ", err);
            });
    }

    // Memulai akses kamera ketika tombol ditekan
    document.getElementById("startButton").addEventListener("click", function() {
        startCamera();
        document.getElementById("startButton").disabled = true; // Menonaktifkan tombol setelah mulai
    });
});
</script>

</body>
</html>
