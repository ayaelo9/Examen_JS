const datos = [
    { 
        nombre: "Paella Valenciana", 
        descripcion: "España", 
        imagen: "https://imag.bonviveur.com/paella-valenciana-tradicional.jpg?w=800", 
        caracteristicas: ["Arroz bomba", "Azafrán", "Marisco y verdura"] 
    },
    { 
        nombre: "Sushi Variado", 
        descripcion: "Japón", 
        imagen: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800", 
        caracteristicas: ["Pescado crudo", "Arroz avinagrado", "Alga Nori"] 
    },
    { 
        nombre: "Tacos al Pastor", 
        descripcion: "México", 
        imagen: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800", 
        caracteristicas: ["Tortilla de maíz", "Carne adobada", "Piña y cilantro"] 
    },
    { 
        nombre: "Pizza Margherita", 
        descripcion: "Italia", 
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800", 
        caracteristicas: ["Masa artesanal", "Mozzarella de búfala", "Albahaca fresca"] 
    },
    { 
        nombre: "Ramen Tonkotsu", 
        descripcion: "Japón", 
        imagen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800", 
        caracteristicas: ["Fideos de trigo", "Caldo de cerdo", "Huevo marinado"] 
    },
    { 
        nombre: "Hamburguesa Gourmet", 
        descripcion: "EE.UU.", 
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", 
        caracteristicas: ["Carne de ternera", "Queso cheddar", "Pan brioche"] 
    },
    { 
        nombre: "Dim Sum", 
        descripcion: "China", 
        imagen: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800", 
        caracteristicas: ["Masa al vapor", "Relleno de gambas", "Salsa de soja"] 
    },
    { 
        nombre: "Croissants", 
        descripcion: "Francia", 
        imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800", 
        caracteristicas: ["Masa de hojaldre", "Mantequilla pura", "Dorado al horno"] 
    },
    { 
        nombre: "Chicken Tikka Masala", 
        descripcion: "India", 
        imagen: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800", 
        caracteristicas: ["Pollo marinado", "Salsa de especias", "Crema de coco"] 
    },
    { 
    nombre: "Couscous Real", 
    descripcion: "Marruecos", 
    imagen: "https://img.cuisineaz.com/660x495/2022/02/23/i183013-couscous-marocain.jpeg", 
    caracteristicas: ["Sémola de trigo", "Siete verduras", "Cordero o pollo"] 
    }
];

let index = 0;

function render() {
    const actual = datos[index];
    document.getElementById('foto-comida').src = actual.imagen;
    document.getElementById('nombre-plato').innerText = actual.nombre;
    document.getElementById('desc-plato').innerText = actual.descripcion;
    
    const lista = document.getElementById('lista-caract');
    lista.innerHTML = actual.caracteristicas.map(c => `<li>• ${c}</li>`).join('');
}

function cambiarSlide(dir) {
    index = (index + dir + datos.length) % datos.length;
    render();
}

// Ejecutar render al cargar
window.onload = render;