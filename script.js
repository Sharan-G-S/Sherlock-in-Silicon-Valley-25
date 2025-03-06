function nextPage(pageId) {
    const currentPage = document.querySelector('.page.active');
    const nextPage = document.getElementById(pageId);

    if (currentPage && nextPage) {
        currentPage.classList.remove('active');
        nextPage.classList.add('active');
    }
}

function prevPage(pageId) {
    const currentPage = document.querySelector('.page.active');
    const prevPage = document.getElementById(pageId);

    if (currentPage && prevPage) {
        currentPage.classList.remove('active');
        prevPage.classList.add('active');
    }
}

// Initialize the first page as active
document.addEventListener('DOMContentLoaded', () => {
    const firstPage = document.getElementById('page1');
    if (firstPage) {
        firstPage.classList.add('active');
    }
});

// Function to handle dataset downloads
function downloadDataset(round) {
    let filePath = '';

    switch (round) {
        case 1:
            filePath = 'assests/round1_logs.csv';
            break;
        case 2:
            filePath = 'assests/round2.zip';
            break;
        case 3:
            filePath = 'assests/round3_logs.csv';
            break;
        default:
            console.error('Invalid round selected.');
            return;
    }

    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop(); // Extracting file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}