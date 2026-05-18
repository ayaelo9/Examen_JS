const citas = [
            { t: "La paciencia es la raíz de toda sabiduría.", a: "Proverbio Árabe" },
            { t: "El chocolate es la respuesta, no importa la pregunta.", a: "Anónimo" },
            { t: "La mejor forma de predecir el futuro es creándolo.", a: "Peter Drucker" },
            { t: "La suerte es lo que sucede cuando la preparación encuentra la oportunidad.", a: "Séneca" },
            { t: "Haz de cada día tu obra maestra.", a: "John Wooden" },
            { t: "No busques los errores, busca un remedio.", a: "Henry Ford" }
        ];

        function lanzarAccion() {
            const num = Math.floor(Math.random() * 6) + 1;
            const img = document.getElementById("imagenDado");
            
            img.style.transform = "scale(0.8) rotate(-10deg)";
            
            setTimeout(() => {
                img.src = "dado" + num + ".png";
                img.style.transform = "scale(1) rotate(0deg)";
                
                const cita = citas[num - 1];
                document.getElementById("textoFrase").innerText = `"${cita.t}"`;
                document.getElementById("autorFrase").innerText = `${cita.a}`;
            }, 150);
        }