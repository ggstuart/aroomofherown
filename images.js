document.querySelectorAll('figure').forEach(fig => {
    fig.addEventListener('click', ev => {
        fig.classList.toggle('showing');
    })
}) 