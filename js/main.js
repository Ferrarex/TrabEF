document.addEventListener('DOMContentLoaded', function() {
    const navbar = `
        <nav class="navbar">
            <div class="logo">IFRS Erechim</div>
            <ul class="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="tipos.html">Tipos</a></li>
                <li><a href="provas.html">Provas</a></li>
                <li><a href="mundial.html">Cenário Mundial</a></li>
                <li><a href="rsbr.html">Cenário BR e RS</a></li>
                <li><a href="classificacao.html">Classificação</a></li>
                <li><a href="particularidades.html">Particularidades</a></li>
                <li><a href="curiosidades.html">Curiosidades</a></li>
                <li><a href="referencias.html">Referências</a></li>
            </ul>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbar);
});