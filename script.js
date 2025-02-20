document.getElementById("upload").addEventListener("change", function(event) {
   const file = event.target.files[0];
   if (!file) return;

   const reader = new FileReader();
   reader.onload = function(e) {
       const img = document.createElement("img");
       img.src = e.target.result;

       const polaroid = document.createElement("div");
       polaroid.classList.add("polaroid");

       const caption = document.createElement("div");
       caption.classList.add("caption");
       caption.innerText = "My Photo"; // Pwede palitan ng custom text

       polaroid.appendChild(img);
       polaroid.appendChild(caption);

       document.getElementById("photostrip").appendChild(polaroid);
   };
   reader.readAsDataURL(file);
});

document.getElementById("bgPicker").addEventListener("change", function(event) {
    const selectedBg = event.target.value;
    const photostrip = document.getElementById("photostrip");

    if (selectedBg === "none") {
        photostrip.style.backgroundImage = "none";
    } else {
        photostrip.style.backgroundImage = `url('${selectedBg}')`;
    }
});



// Download photostrip as image
document.getElementById("download").addEventListener("click", function() {
   html2canvas(document.getElementById("photostrip")).then(canvas => {
       const link = document.createElement("a");
       link.href = canvas.toDataURL("image/png");
       link.download = "photostrip.png";
       link.click();
   });
});
