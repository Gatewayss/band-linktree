const shareBtns = document.querySelectorAll('.tile-share-btn');

async function copyText(e) {
    e.preventDefault();
    const link = this.getAttribute('link');

    try {
        await navigator.clipboard.writeText(link);

        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = 'Link Copied!';
        document.body.appendChild(tooltip);

        tooltip.offsetHeight;

        tooltip.classList.add('show');

        setTimeout(() => {
            tooltip.classList.remove('show');

            setTimeout(() => {
                document.body.removeChild(tooltip);
            }, 300); 
        }, 2000);

    } catch (err) {
        console.log(err);
    }
}

shareBtns.forEach(shareBtn => shareBtn.addEventListener('click', copyText));
