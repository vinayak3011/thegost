const experimentData = {
    'WEBX': [
        { title: 'EXP 2 Perform full fledged code snippets for programs like Calculator using TypeScript.', file: 'files/webx/EXP2_WEBX.txt' },
        { title: 'EXP 3 Modules in Node.js using File system (CRUD).', file: 'files/webx/EXP3_WEBX.txt' },
        { title: 'EXP 4 Connect MongoDB with Node.js and perform CRUD operations.', file: 'files/webx/EXP4_WEBX.txt' },
        { title: 'EXP 5 Create an Express application to implement sessions.', file: 'files/webx/EXP5_WEBX.txt' },
        { title: 'EXP 6 Create a simple HTML “Hello World” Project using AngularJS Framework.', file: 'files/webx/EXP6_WEBX.txt' },
    ],
};

document.getElementById('subject').addEventListener('change', function () {
    const subject = this.value;
    const experimentContainer = document.getElementById('experimentContainer');
    const experimentSelect = document.getElementById('experiment');
    
    // Clear previous content
    experimentSelect.innerHTML = '<option value="">Select Experiment</option>';
    document.getElementById('experimentTitle').textContent = '';
    document.getElementById('experimentContent').textContent = '';
    document.getElementById('downloadButton').style.display = 'none';

    // Hide copy button if it exists
    const existingCopyBtn = document.getElementById('copyButton');
    if (existingCopyBtn) {
        existingCopyBtn.remove();
    }

    // Show dropdown and populate if valid subject
    if (subject && experimentData[subject]) {
        experimentContainer.style.display = 'block';
        
        experimentData[subject].forEach(exp => {
            const option = document.createElement('option');
            option.value = exp.file;
            option.textContent = exp.title;
            experimentSelect.appendChild(option);
        });
    } else {
        experimentContainer.style.display = 'none';
    }
});

document.getElementById('experiment').addEventListener('change', function () {
    const subject = document.getElementById('subject').value;
    const filePath = this.value;
    const experiment = experimentData[subject].find(e => e.file === filePath);

    if (!filePath || !experiment) return;

    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('experimentTitle').textContent = experiment.title;
            document.getElementById('experimentContent').textContent = data;

            // Show Download Button
            const downloadButton = document.getElementById('downloadButton');
            downloadButton.style.display = 'inline-block';
            downloadButton.onclick = function () {
                const blob = new Blob([data], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${experiment.title}.txt`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            };

            // Show Copy Button (if not already added)
            if (!document.getElementById('copyButton')) {
                const copyBtn = document.createElement('button');
                copyBtn.id = 'copyButton';
                copyBtn.textContent = 'Copy to Clipboard';
                copyBtn.style.marginLeft = '10px';
                copyBtn.onclick = function () {
                    navigator.clipboard.writeText(data).then(() => {
                        alert('Copied to clipboard!');
                    }).catch(err => {
                        alert('Failed to copy!');
                    });
                };
                downloadButton.parentNode.appendChild(copyBtn);
            }
        });
});
