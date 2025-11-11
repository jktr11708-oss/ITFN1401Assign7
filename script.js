function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').innerHTML = 'Last updated: ' + lastModified;
}