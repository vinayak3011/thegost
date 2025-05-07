const experimentData = {
// 'ICT': [
//     { title: 'EXP 1 Study of OSINT framework.', file: 'files/ict/exp1.txt' },
//     { title: 'EXP 2 Perform Brute Force attack using Burp suite.', file: 'files/ict/exp2.txt' },
//     { title: 'EXP 3 To learn simulation of SQL injection attack.', file: 'files/ict/exp3.txt' },
//     { title: 'EXP 4 Demonstrate cross-site scripting attack.', file: 'files/ict/exp4.txt' },
//     { title: 'EXP 5 Use Metasploit To exploit (Kali Linux)', file: 'files/ict/exp5.txt' },
//     { title: 'EXP 6 Performing a Buffer Overflow attack Using Metasploit', file: 'files/ict/exp6.txt' },
//     { title: 'EXP 7 Use NMap scanner to perform port scanning of various forms – PING SCAN, ACK, SYN, NULL, XMAS', file: 'files/ict/exp7.txt' },
//     { title: 'EXP 8 Study the behavior of protections such as IDF and firewalls when altering headers in network packets.', file: 'files/ict/exp8.txt' },
//     { title: 'EXP 9 Study of steganography tools (Beyond syllabus)', file: 'files/ict/exp9.txt' }
// ],
'CNS': [
    { title: 'EXP 1 Download, install nmap and use it with different options to scan open ports, perform OS fingerprinting, ping scan, tcp port scan, udp port scan, etc.', file: 'files/cns/Exp_1.txt' },
    { title: 'EXP 2 Study the use of network reconnaissance tools like WHOIS, dig, traceroute, nslookup to gather information about networks and domain registrars.', file: 'files/cns/Exp_2.txt' },
    { title: 'EXP 3 Study of packet sniffer tools Wireshark: a. Observe performance in promiscuous as well as non-promiscuous mode. b. Show packets can be traced using different filters.', file: 'files/cns/Exp_3.txt' },
    { title: 'EXP 4 Breaking the Mono-alphabetic Substitution Cipher using Frequency Analysis Method.', file: 'files/cns/Exp_4.txt' },
    { title: 'EXP 5 Design and implement a product cipher using Substitution ciphers.', file: 'files/cns/Exp_5.txt' },
    { title: 'EXP 6 Encrypt long messages using various modes of operation using AES or DES.', file: 'files/cns/Exp_6.txt' },
    { title: 'EXP 7 Study of malicious software using different tools: a. Keylogger attack using keylogger tool. b. Simulate DoS attack using Hping or other tools. c. Use NESSUS/ISO Kali Linux to scan network for vulnerabilities.', file: 'files/cns/Exp_7.txt' },
    { title: 'EXP 8 Study of Network Security: a. Set up IPSec under Linux. b. Set up Snort and study the logs. c. Explore GPG tool to implement email security.', file: 'files/cns/Exp_8.txt' },
    { title: 'EXP 9 Content Beyond the Syllabus: a. Burp Suite Tool. b. Steghide Tool.', file: 'files/cns/Exp_9.txt' }
],
};

document.getElementById('downloadAllButton').addEventListener('click', function () {
    window.location.href = 'files/cns/files.zip';
});


document.getElementById('subject').addEventListener('change', function () {
    const subject = this.value;
    const experimentContainer = document.getElementById('experimentContainer');
    const experimentSelect = document.getElementById('experiment');
    console.log(experimentSelect);
    
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
    // } else if (experimentSelect == "") {
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

              // Show or hide the "Download All" button based on EXP 4 selection
            const downloadAllButton = document.getElementById('downloadAllButton');
            if (subject === 'CNS' && filePath === 'files/cns/Exp_4.txt') {
                downloadAllButton.style.display = 'inline-block';
            } else {
                downloadAllButton.style.display = 'none';
            }

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
