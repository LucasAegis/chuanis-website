// assets/nav.js - CHUANIS 全局导航组件
document.addEventListener("DOMContentLoaded", () => {

    // 1. 当前路径
    const currentPath = window.location.pathname.toLowerCase();

    // 是否位于需要 ../../ 的目录
    const isDeepFolder =
        currentPath.includes('/portfolio/') ||
        currentPath.includes('/blueprints/');

    // 是否属于 Portfolio 的说明书详情页
    const isPortfolioDetail =
        currentPath.includes('/portfolio/');

    // 前缀
    const prefix = isDeepFolder ? '../../' : './';

    // 2. 导航栏
    const navHTML = `
    <header class="global-navbar">
        <style>
            .nav-center a { font-size: 18px !important; }
            .nav-btn-signup { font-size: 18px !important; }
        </style>
        <a href="${prefix}index.html" class="nav-logo">CHUANIS</a>
        <nav class="nav-center">
            <a href="${prefix}index.html" data-page="index">INNOVATION</a>
            <a href="${prefix}portfolio.html" data-page="portfolio">PORTFOLIO</a>
            <a href="${prefix}blueprints/index.html" data-page="blueprints">BLUEPRINTS</a>
            <a href="${prefix}Contact.html" data-page="contact">CONTACT</a>
        </nav>
        <div class="nav-right">
            <a href="https://github.com/chuanis" target="_blank" class="nav-btn-signup">GITHUB</a>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 3. 智能高亮
    const navLinks = document.querySelectorAll('.nav-center a');

    navLinks.forEach(link => {
        const pageName = link.getAttribute('data-page');
        link.classList.remove('active');

        if (
            pageName === 'index' &&
            (currentPath === '/' ||
                (currentPath.endsWith('index.html') && !isDeepFolder))
        ) {
            link.classList.add('active');
        } else if (
            pageName === 'portfolio' &&
            currentPath.includes('portfolio.html')
        ) {
            link.classList.add('active');
        } else if (
            pageName === 'blueprints' &&
            currentPath.includes('/blueprints/')
        ) {
            link.classList.add('active');
        } else if (
            pageName === 'contact' &&
            currentPath.includes('contact.html')
        ) {
            link.classList.add('active');
        }
    });

    // 4. 只有 Portfolio 详情页才强制亮 Portfolio
    if (isPortfolioDetail) {
        document.querySelectorAll('.nav-center a').forEach(a => a.classList.remove('active'));

        const pBtn = document.querySelector('.nav-center a[data-page="portfolio"]');

        if (pBtn) {
            pBtn.classList.add('active');
        }
    }
});
