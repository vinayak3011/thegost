const experimentData = {
'ICT': [
    { title: 'EXP 1 Study of OSINT framework.', file: 'files/ict/exp1.txt' },
    { title: 'EXP 2 Perform Brute Force attack using Burp suite.', file: 'files/ict/exp2.txt' },
    { title: 'EXP 3 To learn simulation of SQL injection attack.', file: 'files/ict/exp3.txt' },
    { title: 'EXP 4 Demonstrate cross-site scripting attack.', file: 'files/ict/exp4.txt' },
    { title: 'EXP 5 Use Metasploit To exploit (Kali Linux)', file: 'files/ict/exp5.txt' },
    { title: 'EXP 6 Performing a Buffer Overflow attack Using Metasploit', file: 'files/ict/exp6.txt' },
    { title: 'EXP 7 Use NMap scanner to perform port scanning of various forms – PING SCAN, ACK, SYN, NULL, XMAS', file: 'files/ict/exp7.txt' },
    { title: 'EXP 8 Study the behavior of protections such as IDF and firewalls when altering headers in network packets.', file: 'files/ict/exp8.txt' },
    { title: 'EXP 9 Study of steganography tools (Beyond syllabus)', file: 'files/ict/exp9.txt' }
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

            // // Show Copy Button (if not already added)
            // if (!document.getElementById('copyButton')) {
            //     const copyBtn = document.createElement('button');
            //     copyBtn.id = 'copyButton';
            //     copyBtn.textContent = 'Copy to Clipboard';
            //     copyBtn.style.marginLeft = '10px';
            //     copyBtn.onclick = function () {
            //         navigator.clipboard.writeText(data).then(() => {
            //             alert('Copied to clipboard!');
            //         }).catch(err => {
            //             alert('Failed to copy!');
            //         });
            //     };
            //     downloadButton.parentNode.appendChild(copyBtn);
            // }

            let copyBtn = document.getElementById('copyButton');
            if (!copyBtn) {
                copyBtn = document.createElement('button');
                copyBtn.id = 'copyButton';
                copyBtn.textContent = 'Copy to Clipboard';
                copyBtn.style.marginLeft = '10px';
                downloadButton.parentNode.appendChild(copyBtn);
            }
            // Always update the onclick handler
            copyBtn.onclick = function () {
                navigator.clipboard.writeText(data).then(() => {
                    alert('Copied to clipboard!');
                }).catch(err => {
                    alert('Failed to copy!');
                });
            };

        });
});
