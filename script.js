const button = document.querySelector('span');

button.addEventListener('click', () => {
    document.execCommand("copy");
})

button.addEventListener("copy", (event) => {
    event.preventDefault();

    if (event.clipboardData) {
        let link = document.querySelector('.link').innerHTML;
        event.clipboardData.setData("text/plain", link);
        
        alert('Link has been copied to the clipboard')
    }
    
});