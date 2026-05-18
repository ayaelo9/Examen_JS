        const citas = [
            { texto: "Lo único imposible es aquello que no intentas.", autor: "Anónimo" },
            { texto: "El éxito es la suma de pequeños esfuerzos diarios.", autor: "Robert" },
            { texto: "No cuentes los días, haz que los días cuenten.", autor: " Ali" },
            { texto: "Haz de cada día tu obra maestra.", autor: "John " },
            { texto: "La paciencia es amarga, pero su fruto es dulce.", autor: "Jean-Jacques" }
        ];

        let posicion = 0;

        function actualizarUI() {
            const elTexto = document.getElementById("textoCita");
            const elAutor = document.getElementById("autorCita");

            elTexto.style.opacity = 0;
            setTimeout(() => {
                elTexto.innerText = citas[posicion].texto;
                elAutor.innerText = `${citas[posicion].autor}`;
                elTexto.style.opacity = 1;
            }, 150);
        }

        document.getElementById("textoCita").style.transition = "opacity 0.3s ease";

        function aumentar() {
            if (posicion < citas.length - 1) {
                posicion++;
                actualizarUI();
            }
            else {
                posicion = 0;
                
            }
            actualizarUI();
        }

        function disminuir() {
            if (posicion > 0) {
                posicion--;
                actualizarUI();
            }
            else {
                posicion = citas.length - 1;
                
            }
            actualizarUI();
        }

        window.onload = actualizarUI;