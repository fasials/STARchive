const navHTML = `
<nav>
        <div class="menu">
            <a href="index.html"><span style="color: #12bbe0; font-style: italic; font-size: 25px;">STAR</span>chive</a>
            <div class="judul_menu">
            <a href="constellation.html">ENCYCLOPEDIA</a>
            <a href="about.html">OTHER</a>
            </div>
        </div>

        </nav>`;

const footerHTML =`
<footer class="footer">
    <div class="footer_content">

        <div class="footer_nav_group">

            <div class="footer_nav">
                <h3>ENCYCLOPEDIA</h3>
                <ul>
                    <li><a href="constellation.html">Constellations</a></li>
                    <li><a href="#">Nebulae</a></li>
                    <li><a href="#">Galaxies</a></li>
                    <li><a href="#">Other Themes</a></li>
                </ul>
            </div>

            <div class="footer_nav">
                <h3>OTHER</h3>
                <ul>
                    <li><a href="about.html">About</a></li>
                </ul>
            </div>

        </div>

        <div class="footer_social">
            <h3><a href="https://github.com/fasials/STARchive">Github Repository</a></h3>
        </div>

    </div>
        <p>©2026 or something like that</p>
    </footer>
`;

document.body.insertAdjacentHTML('afterbegin', navHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);