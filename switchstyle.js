let styleMode = localStorage.getItem('styleMode')

const styleChanger = document.querySelector(".style_changer")



function enableDarkStyle() {
    document.body.classList.toggle("darkstyle")
    localStorage.setItem('styleMode', 'dark')
}

function disableDarkStyle() {
    document.body.classList.toggle("darkstyle")
    localStorage.setItem('styleMode', null)
}

styleChanger.addEventListener('click', () => {
    if(styleMode !== 'dark') {
        enableDarkStyle()
    } else {
        disableDarkStyle()
    }
});


if(styleMode === 'dark') {
    enableDarkStyle()
}