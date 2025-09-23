document.querySelectorAll('.command').forEach(command => {
    command.addEventListener('click', () => {
        const details = command.querySelector('.details');
        if (details) {
            details.classList.toggle('active');
            
            // Lukk andre åpne detaljer
            document.querySelectorAll('.details.active').forEach(otherDetails => {
                if (otherDetails !== details) {
                    otherDetails.classList.remove('active');
                }
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("pre").forEach(function(pre) {
        const copyButton = document.createElement("button");
        copyButton.className = "copy-btn";
        copyButton.textContent = "Kopier";

        copyButton.addEventListener("click", function(event) {
            event.stopPropagation();
            let code = "";
            for (let i = 1; i < pre.childNodes.length; i++) {
                code += pre.childNodes[i].textContent;
            }
            navigator.clipboard.writeText(code).then(function() {
                copyButton.textContent = "Kopiert!";
                setTimeout(function() {
                    copyButton.textContent = "Kopier";
                }, 2000);
            }).catch(function(err) {
                copyButton.textContent = "Feil!";
            });
        });

        pre.insertBefore(copyButton, pre.firstChild);
    });
});