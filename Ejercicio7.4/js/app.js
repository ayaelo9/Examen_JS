document.getElementById('btnCheck').addEventListener('click', function() {
    const input = document.getElementById('userNumber');
    const resultBox = document.getElementById('resultBox');
    const resultText = document.getElementById('resultText');
    
    const n = parseInt(input.value);

    // Validación manual extra por si falla la del HTML[cite: 1]
    if (isNaN(n) || n < 2 || n >= 100) {
        resultBox.classList.remove('hidden', 'border-emerald-500/30', 'bg-emerald-500/5', 'text-emerald-400', 'border-amber-500/30', 'bg-amber-500/5', 'text-amber-400');
        resultBox.classList.add('border-rose-500/30', 'bg-rose-500/5', 'text-rose-400');
        resultText.innerText = "Error: Introduce un número válido entre 2 y 99[cite: 1].";
        return;
    }

    let primerDivisor = 0;
    // Un número es primo si es divisible solo por 1 y por sí mismo[cite: 1]
    // Revisamos divisores desde 2 hasta n-1 usando el operador módulo %[cite: 1]
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            primerDivisor = i; // Encontramos el primer divisor[cite: 1]
            break;
        }
    }

    // Limpieza de clases previas
    resultBox.classList.remove('hidden', 'border-emerald-500/30', 'bg-emerald-500/5', 'text-emerald-400', 'border-amber-500/30', 'bg-amber-500/5', 'text-amber-400', 'border-rose-500/30');

    if (primerDivisor === 0) {
        // Es primo: No tiene divisores[cite: 1]
        resultBox.classList.add('border-emerald-500/30', 'bg-emerald-500/5', 'text-emerald-400');
        resultText.innerText = `El número ${n} es primo. No tiene divisores[cite: 1].`;
    } else {
        // No es primo: Es divisible por su primer divisor[cite: 1]
        resultBox.classList.add('border-amber-500/30', 'bg-amber-500/5', 'text-amber-400');
        resultText.innerText = `El número ${n} no es primo. Es divisible por ${primerDivisor}. (su primer divisor)[cite: 1]`;
    }
});