const shareBtns = document.querySelectorAll('.tile-share-btn');

async function copyText(e) { 
    e.preventDefault()
    const link = this.getAttribute('link')
    try {
       await navigator.clipboard.writeText(link)
       
       console.log(e.style.visibility);
    } catch (err) {
        console.log(err);
    }
 }

shareBtns.forEach(shareBtn => shareBtn.addEventListener('click', copyText));
