document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("hogwartsForm");
    const avatarImg = document.getElementById("avatarImg");
    const linajeSelect = document.getElementById("linaje");

    
    linajeSelect.addEventListener("change", function () {
        const selectedLinaje = linajeSelect.value;
        cambiarAvatar(selectedLinaje);
    });


    function cambiarAvatar(linaje) {
        let avatarSrc = "";

        switch (linaje) {
            case "mestizo":
                avatarSrc = "mestizo.png";
                break;
            case "muggle":
                avatarSrc = "muggle.png";
                break;
            case "sangrePura":
                avatarSrc = "sangre_pura.png";
                break;
            default:
                avatarSrc = "imagen.png";
        }

        avatarImg.src = avatarSrc;
    }
});
