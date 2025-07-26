document.getElementById('convertBtn').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const voice = document.getElementById('voiceSelect').value;

    if (text.length > 6000) {
        alert("Văn bản vượt quá giới hạn 6000 ký tự!");
        return;
    }

    // Gọi API TTS ở đây (giả sử có API)
    // Ví dụ: fetch('/api/tts', { method: 'POST', body: JSON.stringify({ text, voice }) })
    // .then(response => response.blob())
    // .then(blob => {
    //     const url = URL.createObjectURL(blob);
    //     document.getElementById('downloadBtn').style.display = 'block';
    //     document.getElementById('downloadBtn').onclick = function() {
    //         const a = document.createElement('a');
    //         a.href = url;
    //         a.download = 'output.mp3';
    //         document.body.appendChild(a);
    //         a.click();
    //         document.body.removeChild(a);
    //     };
    // });

    alert("Chức năng này đang được phát triển!");
});
