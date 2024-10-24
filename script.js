// const { link } = require("fs");

// const { NONAME } = require("dns");

const experimentData = {
    'Computer Network': [
        {
            title: 'EXP 1 Basic Networking Commands',
            content:   `Basic Networking Commands
                    ping google.com - Checks if a host is reachable.

                    traceroute google.com - Shows the route packets take to a host.

                    nslookup google.com - Queries DNS for IP/domain information.

                    netstat - Displays network connections and statistics.

                    arp -a - Shows the ARP table (IP to MAC mappings).

                    rarp -a - Displays the RARP table (MAC to IP mappings).

                    ip [options] - Manages network interfaces and routing.

                    ifconfig - Displays network interface parameters.

                    dig google.com - Performs DNS lookups.

                    route -n - Displays the IP routing table.`,
            resources: [
                {name: 'EXP-1-1', link: 'https://www.geeksforgeeks.org/linux-network-commands-cheat-sheet/' },
            ],
            drawioFile: null // No draw.io file for this experiment
            
        },
        {
            title: 'EXP 2 Build a Mesh Network',
            content: `# Build a Mesh network topology and configure it for static routing protocol using packet
tracer. Setup a network and configure IP addressing, subnetting, masking. Use a network
device and configure a network using a 3 pc, 2 switch and 1 router in one local area network
in cisco packet tracer.

*********
cisco packet tracer installer is present in the zip filer
*********

`,

resources: [
                {name: 'Mesh-topology', link: 'https://www.geeksforgeeks.org/implementation-of-mesh-topology-in-cisco/' },
            ],
drawioFile: '/files/Packet_tracer.zip' // No draw.io file for this experiment
            
        },
        {
            title: 'EXP 3 Build a Hybrid Network',
            content: `Build a Hybrid network topology and configure it for static routing protocol using packet
tracer. Setup a network and configure IP addressing, subnetting, masking. Use a network
device and configure a network using a 3 pc, 2 switch and 1 router in one local area network
in cisco packet tracer.

*********
cisco packet tracer installer is present in the zip filer
*********

`,

resources: [
                {name: 'Hybrid-topology', link: 'https://www.geeksforgeeks.org/implementation-of-hybrid-topology-in-cisco/' },
            ],
drawioFile: '/files/Packet_tracer.zip' // No draw.io file for this experiment
        },
        {
            title: 'EXP 4 Bus, Star, and Ring Topologies',
            content: `# Bus, Star, and Ring Network Topologies in Packet Tracer
# Configure using Packet Tracer and setup static routing.

*********
cisco packet tracer installer is present in the zip filer
*********

`,

            resources: [
                {name: 'Bus-topology', link: 'https://www.geeksforgeeks.org/implementation-of-bus-topology-in-cisco/' },
                {name: 'Star-topology', link: 'https://www.geeksforgeeks.org/implementing-star-topology-using-cisco-packet-tracer/' },
                {name: 'Ring-topology', link: 'https://www.geeksforgeeks.org/implementation-of-ring-topology-in-cisco/' },
            ],
            drawioFile: '/files/Packet_tracer.zip' // No draw.io file for this experiment
        },
        {
            title: 'EXP 5 Network Discovery with NMAP',
            content: `# Network Discovery with NMAP
nmap -sn google.com - Performs a ping scan to discover hosts on a network.

nmap -sP google.com - Identifies live hosts without port scanning.

nmap google.com - Scans for open ports on the specified host.

nmap -sL google.com - Lists the target without actually scanning it.

nmap -PR google.com - Uses ARP requests for host discovery (on local networks).

nmap -sU google.com - Scans for open UDP ports on the specified host.

nmap -sS google.com - Performs a stealth SYN scan to find open TCP ports.

nmap -Pn google.com - Skips host discovery; assumes the host is up.

nmap -p [port] google.com - Scans a specific port on the target host.

nmap --traceroute google.com - Combines host discovery with a traceroute to visualize the path.`,

            resources: [
                {name: 'EXP-5-1', link: 'https://www.geeksforgeeks.org/host-discovery-in-nmap-network-scanning/'  },
            ],
            drawioFile: null // No draw.io file for this experiment
        },
        {
            title: 'EXP 6 TCP/IP Layers with Wireshark',
            content: `# Using Wireshark to Understand TCP/IP Layers
Step 1: Install Wireshark
    Download Wireshark from the official website: wireshark.org.
    Follow the installation instructions for your operating system (Windows, macOS, Linux).
Step 2: Launch Wireshark
    Open Wireshark.
    You may need administrative privileges to capture packets.
Step 3: Select the Network Interface
    On the main screen, you’ll see a list of available network interfaces.
    Select the interface you want to monitor (e.g., Wi-Fi, Ethernet).
Step 4: Start Packet Capture
    Click the Start capturing packets button (the shark fin icon).
    Wireshark will begin to capture all network traffic on the selected interface.
Step 5: Generate Network Traffic
    Open a web browser or any application that uses the network (e.g., visit a website).
    This will create TCP/IP traffic for Wireshark to capture.
Step 6: Stop Packet Capture
    Click the Stop capturing packets button (the red square icon) once you have enough data.
    You can also use Ctrl + E (Windows/Linux) or Command + E (macOS).
Step 7: Apply Display Filters
    In the display filter bar at the top, type tcp to filter for TCP packets.
    Press Enter to apply the filter.
Step 8: Analyze TCP Streams
    Locate a TCP packet in the filtered results.
    Right-click on the packet and select Follow > TCP Stream.
    This opens a new window displaying the entire TCP conversation between the source and destination.
Step 9: Examine TCP/IP Details
    Click on individual packets to view detailed information in the middle pane.
    Expand sections such as Transmission Control Protocol and Internet Protocol to see header details.
Step 10: Use Statistics Tools
    Go to the Statistics menu.
    Use options like Protocol Hierarchy, Conversations, and IO Graphs to get insights about traffic patterns and protocols.
Step 11: Save the Capture
    If you want to save your captured data, go to File > Save As.
    Choose a location and file format (default is .pcapng).
Step 12: Stop and Exit
    Once you’re done analyzing, close Wireshark.
    If prompted, you can choose to save your session.
Additional Tips:
    Familiarize yourself with common TCP flags (SYN, ACK, FIN, etc.) for better understanding.
    Use the help resources in Wireshark for more advanced features.
    Experiment with different filters and protocols for deeper analysis.`,

        resources: [
                {name: 'EXP-6-1', link:'https://www.geeksforgeeks.org/tcp-analysis-using-wireshark/'  },
            ],
            drawioFile: null // No draw.io file for this experiment
        },
        {
            title: 'EXP 7 Use Wire shark to understand the operation of TCP/IP layers: ',
            content: `# Use Wire shark to understand the operation of TCP/IP layers: Ethernet Layer: Frame header,
Frame size etc. Data Link Layer: MAC address, ARP (IP and MAC address binding) and set
up multiple IP addresses on a single LAN. b. Using netstat and route commands of Linux, do
the following: View current routing table, Add and delete routes, Change default gateway.
Part 1: Analyzing TCP/IP Layers with Wireshark
    Ethernet Layer
    Open Wireshark and select an interface.
    Capture Packets: Click the shark fin icon.
    Filter: Use eth to view Ethernet frames.
    Analyze Frame: Click on a packet, expand Ethernet II to see MAC addresses and frame size.
Data Link Layer
    Check ARP: Filter by arp to view IP-MAC bindings.
    Multiple IPs: Add IPs with:
        sudo ip addr add [IP]/[netmask] dev [interface]

Part 2: Using netstat and route Commands in Linux
View Routing Table
    netstat -rn
Add a Route
    sudo route add -net 10.0.0.0 netmask 255.0.0.0 gw [gateway]
Delete a Route
    sudo route del -net 10.0.0.0 netmask 255.0.0.0 gw [gateway]
Change Default Gateway
    sudo route add default gw [new_gateway]`,

            resources: [
                {name: 'EXP-7-1', link:'https://www.geeksforgeeks.org/tcp-analysis-using-wireshark/'  },
            ],
            drawioFile: null // No draw.io file for this experiment
        },
        {
            title: 'EXP 8 Set up multiple IP addresses on a single LAN.',
            content: `# Set up multiple IP addresses on a single LAN.
Check Ip Addresses:
    ip a
Add multiple IP addresses:
    sudo ip a add 192.168.1.10/24 dev eth0
    sudo ip a add 192.168.1.11/24 dev eth0
    Explanation: Adds two IP addresses to the eth0 interface.
Check the IP addresses:
    ip a show eth0
Explanation: Shows the IP addresses for the eth0 interface.
Extra Commands: `,

           resources: [
                {name: 'EXP-8-1', link: '..'  },
],
            drawioFile: null // No draw.io file for this experiment
        },
        {
            title: 'EXP 9 Using netstat and route commands of Linux',
            content: `# Using netstat and route commands of Linux, do the following: View current routing table, Add and delete routes, Change default gateway.
View routing table:
    netstat -rn
Add route:
    sudo route add -net 192.168.1.0/24 gw 192.168.1.1
Delete route:
    sudo route del -net 192.168.1.0/24
Change default gateway:
    sudo route add default gw 192.168.1.1`,

    resources: [
        { name: 'EXP-9-1', link: 'https://www.geeksforgeeks.org/route-command-in-linux-with-examples/' },
        { name: 'EXP-9-2', link: 'https://www.cyberciti.biz/faq/linux-route-add/' }
    ],
    drawioFile: null

        },
        {
            title: 'EXP 10 Design VPN and Configure RIP using Packet tracer.',
            content: `# Design VPN and Configure RIP using Packet tracer.
Here’s the RIP configuration for three routers in Cisco Packet Tracer with comments for clarity:

Assign IP addresses to interfaces:

enable
configure terminal

# Configure LAN interface
interface fastethernet 0/0
ip address [LAN_IP] [Subnet_Mask]  # Assign LAN IP and subnet mask
no shutdown  # Activate the interface

# Configure WAN interface
interface serial 0/0/0
ip address [WAN_IP] [Subnet_Mask]  # Assign WAN IP and subnet mask
no shutdown  # Activate the interface

exit
Enable RIP and advertise networks:

router rip  # Start RIP configuration
version 2  # Use RIP version 2 for routing
network [Network_IP]  # Advertise the connected network
no auto-summary  # Disable automatic summarization
exit`,

            resources: [
                {name: 'EXP-10-1', link: 'https://www.geeksforgeeks.org/rip-routing-configuration-using-3-routers-in-cisco-packet-tracer/' },
		{name: 'EXP-10-2', link: 'https://computernetworking747640215.wordpress.com/2018/07/05/rip-configuration-in-packet-tracer/' }
],
            drawioFile: '/files/Packet_tracer/routing information protocol.pkt'
        },
        {
            title: 'EXP 11 Socket programming using TCP or UDP',
            content: `# Socket programming using TCP or UDP

Steps for TCP Socket Programming:
    Create the TCP server:
        Run the TCP server script.
        The server listens on port 8080 and waits for a connection.
    Run the TCP client:
        Execute the TCP client script.
        The client connects to the server, sends a message, and receives a response.
Steps for UDP Socket Programming:
    Create the UDP server:
        Run the UDP server script.
        The server listens on port 8080 for incoming messages.
    Run the UDP client:
        Execute the UDP client script to send a message and receive a response.

-----------------------------------------------
TCP Server:
# Create a TCP socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind the socket to an address and port
server_socket.bind(('localhost', 8080))
server_socket.listen(1)

print("TCP Server is waiting for connection...")
conn, addr = server_socket.accept()
print(f"Connected to {addr}")

# Receive data from the client
data = conn.recv(1024).decode()
print(f"Received: {data}")

# Send a response
conn.send("Hello from the server!".encode())
conn.close()

-----------------------------------------------
TCP Client:
import socket

# Create a TCP socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect to the server
client_socket.connect(('localhost', 8080))

# Send a message
client_socket.send("Hello, server!".encode())

# Receive response
response = client_socket.recv(1024).decode()
print(f"Response: {response}")

client_socket.close()

-----------------------------------------------
UDP Server:

import socket

# Create a UDP socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Bind the socket to an address and port
server_socket.bind(('localhost', 8080))

print("UDP Server is listening...")

# Receive data from the client
data, addr = server_socket.recvfrom(1024)
print(f"Received: {data.decode()} from {addr}")

# Send a response
server_socket.sendto("Hello from UDP server!".encode(), addr)

-----------------------------------------------
UDP Client:
import socket

# Create a UDP socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Send a message to the server
client_socket.sendto("Hello, UDP server!".encode(), ('localhost', 8080))

# Receive response
data, addr = client_socket.recvfrom(1024)
print(f"Response: {data.decode()}")

client_socket.close()
`,
resources: [
                {name: 'EXP-11-1', link: 'https://www.geeksforgeeks.org/sockets-python/' },
		{name: 'EXP-11-2', link: 'https://www.educative.io/answers/socket-programming-in-python' }
],
drawioFile: '/files/ServerFiles.zip' // No draw.io file for this experiment
            
        },
        {
            title: 'EXP 12 Perform File Transfer and Access using FTP.',
            content: `# Perform File Transfer and Access using FTP.

Here’s an updated step-by-step guide to execute FTP in Cisco Packet Tracer, including a **server** connected to the router along with PCs, switches, and routers:

1. **Add Devices:**
   - Place two PCs, one switch, one router, and one FTP **server** in the workspace.

2. **Wiring the Devices:**
   - Connect the PCs to the switch using copper straight-through cables.
   - Connect the server to the router using a copper straight-through cable.
   - Connect the switch to the router with another copper straight-through cable.

3. **IP Configuration:**
   - **PCs**: Set static IPs in the same network, such as:
     - PC1: 192.168.1.10, Subnet Mask: 255.255.255.0, Gateway: 192.168.1.1
     - PC2: 192.168.1.11, Subnet Mask: 255.255.255.0, Gateway: 192.168.1.1
   - **Server**: Assign an IP like 192.168.1.20, Subnet Mask: 255.255.255.0, Gateway: 192.168.1.1.

4. **Router Configuration:**
   - Access the router CLI and configure the **interface** connected to the switch with an IP like 192.168.1.1.
   - Enable the interface with the command:
     no shutdown

   - Configure the **interface** connected to the server (e.g., 192.168.2.1).

5. **Server Configuration:**
   - On the **FTP server**, configure the IP (192.168.2.20) and enable the **FTP service** in the server settings.

6. **Routing Setup:**
   - In the router, configure routing between the two networks (PC and Server network) using static routes or dynamic routing protocols to ensure communication.

7. **PC FTP Connection:**
   - On PC1 or PC2, open the terminal and test the connectivity by pinging the server IP (192.168.2.20).
   - Use the following command to connect to the FTP server:
     ftp 192.168.2.20

   - Log in with the credentials set on the FTP server (e.g., username and password).

8. **File Transfer:**
   - Use FTP commands like:
     - put [filename] to upload files.
     - get [filename] to download files from the server.

This revised guide includes the connection to the server and routing, making it suitable for your Cisco Packet Tracer setup.

    `,

resources: [
                {name: 'EXP-12-1', link: 'https://www.geeksforgeeks.org/file-transfer-protocol-server-configuration-using-cisco-packet-tracer/' },
		{name: 'EXP-12-2', link:'https://medium.com/@20ce070/ftp-server-configuration-in-cisco-packet-tracer-73dae365e078' }
],
    drawioFile : '/files/Packet_tracer/FTPserver.pkt'
            
        },
        {
            title: 'EXP 13 Perform Remote login using Telnet server.',
            content: `# Perform Remote login using Telnet server.


Step 1: Setup Router and End Devices
    -Open Cisco Packet Tracer.
    -Add a Router to the workspace. For this example, use a Cisco 2911 Router.
    -Add a Switch (optional) and a PC.
    -Connect the Router to the PC using a Copper Straight-Through cable:
    -Router Port: Use any GigabitEthernet interface (e.g., GigabitEthernet0/0).
    -PC Port: Connect the cable to the FastEthernet0 port on the PC.

Step 2: Assign IP Address to Router Interface
    Click on the Router and open the CLI (Command Line Interface).
    Enter configuration mode:
        Router> enable
        Router# configure terminal
    
    Assign an IP address to the router’s GigabitEthernet0/0 interface:
        Router(config)# interface gigabitethernet 0/0
        Router(config-if)# ip address 192.168.1.1 255.255.255.0
        Router(config-if)# no shutdown
    Exit the interface configuration:
        Router(config-if)# exit

Step 3: Set Up the PC's IP Address
    Click on the PC.
    Go to the Desktop tab and select IP Configuration.
    Assign an IP address in the same subnet as the router:
        IP Address: 192.168.1.2
        Subnet Mask: 255.255.255.0
        Default Gateway: 192.168.1.1 (Router’s IP)

Step 4: Configure Telnet on the Router
    Go back to the router's CLI and set up Telnet:
        Router(config)# line vty 0 4
        Router(config-line)# password cisco
        Router(config-line)# login
        Router(config-line)# exit
    This configures VTY (Virtual Terminal Lines) for Telnet access. The password is set to cisco.

    Enable privileged EXEC mode password:
        Router(config)# enable password cisco
    To allow remote management via Telnet, configure a hostname for the router (optional):
        Router(config)# hostname MyRouter

Step 5: Test Telnet Connection from the PC
    Go back to the PC.
    Open the Command Prompt from the Desktop tab.
    Ping the router to verify connectivity:
        ping 192.168.1.1
    You should see replies from the router.

    Initiate a Telnet session to the router:
        telnet 192.168.1.1
        You will be prompted to enter the password. Use the password set earlier (cisco).

Step 6: Enter Privileged EXEC Mode via Telnet
    After connecting via Telnet, enter the privileged EXEC mode:
        MyRouter> enable
        Enter the enable password (cisco), and you'll be in privileged mode.

Step 7: Save the Configuration
    Save the configuration to ensure that it persists after a reboot:
        MyRouter# write memory

Final Network Configuration Overview
    Router IP: 192.168.1.1
    PC IP: 192.168.1.2
    Subnet Mask: 255.255.255.0
    Default Gateway (Router): 192.168.1.1
    Telnet Password: cisco
    Enable Password: cisco

            `,

            resources: [
                {name: 'EXP-13-1', link: 'https://www.geeksforgeeks.org/telnet-and-ssh-in-cisco-devices/'},
                {name: 'EXP-13-2', link: 'https://swatispeaks.medium.com/configure-telnet-on-switch-in-cisco-packet-tracer-48b4473da2f8'  }
                ],
            drawioFile: '/files/Packet_tracer/telnet.pkt' // No draw.io file for this experiment
        },
        // Add more experiments as needed
    ],
//     'Software Engineering': [
//         {
//             title: 'EXP-1 Gantt chart for "Ecommerce Fake Product Reviews Monitor and Deletion System"',
//             content: `EXP-1 Create a Gantt chart using notion Software for project title 
//             "Ecommerce Fake Product Reviews Monitor and Deletion System"
            
            
            
//             Link: https://fluoridated-year-29c.notion.site/Ecommerce-Fake-Product-Reviews-Monitor-and-Deletion-System-127e77f708158074b16addd43060281e?pvs=4
            
//             `,
//             resources: [
//                 { name: 'EXP-1', link: 'https://fluoridated-year-29c.notion.site/Ecommerce-Fake-Product-Reviews-Monitor-and-Deletion-System-127e77f708158074b16addd43060281e?pvs=4' },
//             ],
//             drawioFile: null // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-2 Gantt chart for " Child Vaccination Management System"',
//             content: `EXP-2 Create a Gantt chart using notion Software for
//             project title" Child Vaccination Management System"
            
//             Link: https://fluoridated-year-29c.notion.site/Child-Vaccination-Management-System-127e77f708158025bc5cfd60ba9dc4f0?pvs=4
//             `,
//             resources: [
//                 {name: 'EXP-2', link:'https://fluoridated-year-29c.notion.site/Child-Vaccination-Management-System-127e77f708158025bc5cfd60ba9dc4f0?pvs=4' }
//             ],
//             drawioFile: null // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-3 Gantt chart for "Restaurant Employees Tip Calculator System App"',
//             content: `EXP-3 Create a Gantt chart using notion Software for
//             project title "Restaurant Employees Tip Calculator System App"
            
//             Link: https://fluoridated-year-29c.notion.site/Restaurant-Employees-Tip-Calculator-System-App-127e77f7081580a98817ef698ec4123e?pvs=4
//             `,
//             resources: [
//                 {name: 'EXP-3', link:'https://fluoridated-year-29c.notion.site/Restaurant-Employees-Tip-Calculator-System-App-127e77f7081580a98817ef698ec4123e?pvs=4' }
//             ],
//             drawioFile: null // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-4 pert chart for "Online Fashion Stylist Website"',
//             content: `EXP-4 Create a pert chart using notion Software
//             for project title "Online Fashion Stylist Website"
            
//             link: https://fluoridated-year-29c.notion.site/Online-Fashion-Stylist-Website-127e77f708158035a263fafd57fb2de1?pvs=4
            
//             link: https://lucid.app/lucidchart/e0eff41d-6e19-486e-961a-f18d30966cff/edit?viewport_loc=-126%2C-10%2C1707%2C753%2C0_0&invitationId=inv_8d47cae9-e8ed-4d49-8177-8fceb7a5576e
            
//             `,
//             resources: [
//                 {name: 'EXP-4-1', link:'https://fluoridated-year-29c.notion.site/Online-Fashion-Stylist-Website-127e77f708158035a263fafd57fb2de1?pvs=4' },
//                 {name: 'EXP-4-2', link:'https://lucid.app/lucidchart/e0eff41d-6e19-486e-961a-f18d30966cff/edit?viewport_loc=-126%2C-10%2C1707%2C753%2C0_0&invitationId=inv_8d47cae9-e8ed-4d49-8177-8fceb7a5576e' }
//             ],
//             drawioFile: null // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-5 pert chart for "Railway Tracking and Arrival Time Prediction"',
//             content: `EXP-5 Create a pert chart using notion Software for
//             project title "Railway Tracking and Arrival Time Prediction"
            
//             link:'https://fluoridated-year-29c.notion.site/Railway-Tracking-and-Arrival-Time-Prediction-127e77f7081580dc91bce0f8684c7081?pvs=4
            
//             link:'https://lucid.app/lucidchart/2a257d11-800c-4dde-b5d9-20c65f3b56a6/edit?viewport_loc=-2603%2C-1496%2C5929%2C2617%2C0_0&invitationId=inv_1f977478-1b17-478a-8c80-d479f0ba7877
            
//             `,
//             resources: [{name: 'EXP-5-1', link:'https://fluoridated-year-29c.notion.site/Railway-Tracking-and-Arrival-Time-Prediction-127e77f7081580dc91bce0f8684c7081?pvs=4'},
//                         {name: 'EXP-5-2', link:'https://lucid.app/lucidchart/2a257d11-800c-4dde-b5d9-20c65f3b56a6/edit?viewport_loc=-2603%2C-1496%2C5929%2C2617%2C0_0&invitationId=inv_1f977478-1b17-478a-8c80-d479f0ba7877'}],
//             drawioFile: null // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-6 pert chart for "Cursor Movement By Hand Gesture Project"',
//             content: `EXP-6 Create a pert chart using notion Software for
//             project title "Cursor Movement By Hand Gesture Project"
            
//             link:'https://fluoridated-year-29c.notion.site/Cursor-Movement-By-Hand-Gesture-Project-127e77f70815806fbc72c97ae2fd2ff7?pvs=4
            
//             link:'https://lucid.app/lucidchart/0c9c0140-3b33-4a03-b097-73b79820f4b9/edit?viewport_loc=463%2C-87%2C1707%2C753%2C0_0&invitationId=inv_17dd047a-e2f5-4a6d-9d9f-4a8e8d106f26
            
            
//             `,
//             resources: [{name: 'EXP-6-1', link:'https://fluoridated-year-29c.notion.site/Cursor-Movement-By-Hand-Gesture-Project-127e77f70815806fbc72c97ae2fd2ff7?pvs=4'},
//                         {name: 'EXP-6-1', link:'https://lucid.app/lucidchart/0c9c0140-3b33-4a03-b097-73b79820f4b9/edit?viewport_loc=463%2C-87%2C1707%2C753%2C0_0&invitationId=inv_17dd047a-e2f5-4a6d-9d9f-4a8e8d106f26'}],
//             drawioFile: null // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-7 DFD for Online Library Management System',
//             content: `EXP-7 Create a Context and Level 1 Data Flow Diagram (DFD)
//             for an Online Library Management System using draw.io,
//             detailing user interactions and key processes lik registration, book borrowing, and fine calculation.

// Step-by-Step Guide to Create a DFD:

// Step 1: generate PlantUML Code Using ChatGPT or any ai:
//             prompt: Generate a Context and Level 1 Data Flow Diagram (DFD) using Mermaid syntax forOnline Library Management System
//             detailing user interactions and key processes lik registration, book borrowing, and fine calculation.
//             In the Context DFD, represent the entire system as a single process, including all external entities
//             (like users and systems) and show clear data flows between them and the main process.
//             In the Level 1 DFD, break down the main system into key processes, illustrating how external entities
//             interact with these processes and including all relevant data flows. Ensure that the Mermaid code is error-free,
//             with clear labels avoiding special characters, and provide a complete executable code block for visualization in a Mermaid editor

// step 2: Mermaid [https://mermaid.live/]
//         - visit the Mermaid website and paste the code and downlaod the png file

// step 3: Draw.io
//         - open Draw.io and copy/paste the image from mermaid and edit it in draw.io

//             `,
//             resources: [{name: 'chatgpt.com', link:'chatgpt.com'},
//                         {name: 'mermaid', link:'https://mermaid.live/'},
//                         {name: 'draw.io', link: 'https://app.diagrams.net/'}],
//             drawioFile: '/files/Draw.io/EXP7_lib.drawio' // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-8 DFD for CIBIL System Project',
//             content: `EXP-8 Create a Context and Level 1 Data Flow Diagram (DFD) for a CIBIL System Project using draw.io,
//             showing the interaction between users, banks, and credit agencies, and key processes like credit score calculation,
//             loan approval, and credit report generation.

// Step-by-Step Guide to Create a DFD:

// Step 1: generate PlantUML Code Using ChatGPT or any ai:
//             prompt: Generate a Context and Level 1 Data Flow Diagram (DFD) using Mermaid syntax for CIBIL System Project using
//             showing the interaction between users, banks, and credit agencies, and key processes like credit score calculation,
//             loan approval, and credit report generation. In the Context DFD, represent the entire system as a single process,
//             including all external entities (like users and systems) and show clear data flows between them and the main process.
//             In the Level 1 DFD, break down the main system into key processes, illustrating how external entities
//             interact with these processes and including all relevant data flows. Ensure that the Mermaid code is error-free,
//             with clear labels avoiding special characters, and provide a complete executable code block for visualization in a Mermaid editor

// step 2: Mermaid [https://mermaid.live/]
//         - visit the Mermaid website and paste the code and downlaod the png file

// step 3: Draw.io
//         - open Draw.io and copy/paste the image from mermaid and edit it in draw.io

//             `,
//             resources: [{name: 'chatgpt.com', link:'chatgpt.com'},
//                         {name: 'mermaid', link:'https://mermaid.live/'},
//                         {name: 'draw.io', link: 'https://app.diagrams.net/'}],
//             drawioFile: '/files/Draw.io/EXP8_CIBL.drawio'
//         },
//         {
//             title: 'EXP-9 DFD for Online Herbs Shopping Project',
//             content: `EXP-9 Create a Context and Level 1 Data Flow Diagram (DFD) for an Online Herbs Shopping Project using draw.io,
//             detailing interactions between customers, the system, and suppliers, and key processes like product browsing, order placement,
//             payment, and inventory management

// Step-by-Step Guide to Create a DFD:

// Step 1: generate PlantUML Code Using ChatGPT or any ai:
//             prompt: Generate a Context and Level 1 Data Flow Diagram (DFD) using Mermaid syntax for Online Herbs Shopping Project
//             detailing interactions between customers, the system, and suppliers, and key processes like product browsing, order placement,
//             payment, and inventory management. In the Context DFD, represent the entire system as a single process, including all external entities
//             (like users and systems) and show clear data flows between them and the main process.
//             In the Level 1 DFD, break down the main system into key processes, illustrating how external entities
//             interact with these processes and including all relevant data flows. Ensure that the Mermaid code is error-free,
//             with clear labels avoiding special characters, and provide a complete executable code block for visualization in a Mermaid editor

// step 2: Mermaid [https://mermaid.live/]
//         - visit the Mermaid website and paste the code and downlaod the png file

// step 3: Draw.io
//         - open Draw.io and copy/paste the image from mermaid and edit it in draw.io


//         `,
//             resources: [{name: 'chatgpt.com', link:'chatgpt.com'},
//                         {name: 'mermaid', link:'https://mermaid.live/'},
//                         {name: 'draw.io', link: 'https://app.diagrams.net/'}],
//             drawioFile: '/files/Draw.io/EXP9_HERBS.drawio' // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-10 Git and GitHub: ',
//             content: `EXP-10 Git and GitHub: Create a GitHub account, clone a repository from GitHub,
//             initialize it with Git in your local terminal, and push the repository to your own GitHub account.

// Step 1 -> Create a GitHub account if you don't have one by going to the website: www.github.com

// Step 2 -> Check if Git is installed on your system by typing the following command in the terminal:
//         git --version
// If Git is not installed, download and install it by visiting https://git-scm.com/downloads.
// During installation, make sure to tick the option for creating a desktop shortcut so you can easily access Git from your desktop.


// Step 3 -> Open Git Bash either from the desktop shortcut or by searching for it in the Windows search bar.


// Step 4 -> Configure Git with your GitHub username and email by typing these commands in the Git Bash terminal:
//         git config --global user.name "--Your username on GitHub--"
//         git config --global user.email "--Your emailID associated with GitHub--"
// To check whether the configuration is correct, type:
//     git config --list
//     You should see your username and email listed.


// Step 5 -> Now, let’s clone a repository from GitHub to your local machine.
// Go to GitHub and find any public repository you want to clone. For example, search for "octocat/Spoon-Knife".
// On the repository page, click the "Code" button and copy the HTTPS URL (e.g., https://github.com/octocat/Spoon-Knife.git).


// Step 6 -> In Git Bash, navigate to the folder where you want to clone the repository by typing:
//     cd path/to/your/directory
//     For example, if you want to clone it into the desktop folder:
//     cd Desktop


// Step 7 -> Clone the repository by typing the following command in Git Bash:
//     git clone https://github.com/octocat/Spoon-Knife.git
//     This will download the repository to your local machine.


// Step 8 -> Navigate into the cloned repository folder:
//     cd Spoon-Knife
//     Now, you are inside the folder of the cloned repository.


// Step 9 -> Create or edit a file in the repository. For example, create a new README.md file:
//     touch README.md -[if touch is not working use echo,nano]
//     Open the file in a text editor and add some content, such as:
//     ''
//     My First GitHub Project
//     This is a sample project created while learning Git and GitHub.
//     ''

// Step 10 -> Add the new file to the staging area using the git add command:
//     git add README.md


// Step 11 -> Commit the changes to your local repository with a commit message:
//     git commit -m "Added README.md file"


// Step 12 -> Create a new repository on GitHub:
//     Go to GitHub.
//     Click the + icon in the top-right corner and select New Repository.
//     Name your repository (e.g., MyFirstProject).
//     Do not initialize the repository with a README (since you already created one locally).


// Step 13 -> Link your local Git repository to your new GitHub repository by adding it as a remote origin. Copy the repository URL from GitHub (HTTPS URL).
//     In Git Bash, type:
//     git remote add origin https://github.com/your-username/MyFirstProject.git

// Step 14 -> Change the name of the branch by this command -> git branch -M main

// Step 15-> Push the changes from your local repository to GitHub:
//     git push -u origin main #this command if used once then no need to write full afterwards then we can just write "git pust"
//     You will be prompted to log in to GitHub if you are doing it first time. Use your GitHub username and personal access token if required.

// Step 15 -> Go to your GitHub account and check the repository to confirm that the files have been successfully pushed to your GitHub repository.

// link:'https://education.github.com/git-cheat-sheet-education.pdf

// link:'https://www.geeksforgeeks.org/git-cheat-sheet/


// `,
//             resources: [{name: 'cheat Sheet', link:'https://education.github.com/git-cheat-sheet-education.pdf'},
//                         {name: 'geeksforgeeks - Cheat-sheet', link:'https://www.geeksforgeeks.org/git-cheat-sheet/'}],
//             drawioFile: null // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-11 Git and GitHub Collaboration:',
//             content: `EXP-11 Git and GitHub Collaboration: Create a GitHub account, clone a repository,
//             initialize it with Git in your local terminal, add another team member to your GitHub repository,
//             and push changes, ensuring both users can collaborate on the project.

// Q11: Git and GitHub Collaboration Experiment

// Step 1 -> Create a GitHub account (if not done already)
//         Go to www.github.com.
//     --> Click Sign Up and fill in your details (email, password, and username).
//     --> Verify your email by following the link in the confirmation email from GitHub.

// Step 2 -> Install Git and check if it's installed
//     Open your terminal (Git Bash if you're on Windows) and type:
//         git --version
//         If Git is not installed, download it from https://git-scm.com/downloads.
//         During installation, select the option to create a shortcut on the desktop for easy access.

// Step 3 -> Set up Git configuration (username and email)

//     Open Git Bash or your terminal and configure Git with your username and email (used on GitHub):
//         git config --global user.name "--Your GitHub username--"
//         git config --global user.email "--Your emailID on GitHub--"

//     Verify your configuration using:
//         git config --list

// Step 4 -> Create a new repository on GitHub
//     -> Go to GitHub and log into your account.
//     -> Click the + icon in the top-right corner and select New Repository.
//     -> Name the repository (e.g., CollaborativeProject).
//     -> Do not initialize the repository with a README (you will do this locally).
//     -> Choose the visibility (Public or Private), then click Create repository.

// Step 5 -> Clone the repository to your local machine
//     After creating the repository, you will see the repository URL (HTTPS). Copy it (it will look like https://github.com/your-username/CollaborativeProject.git).

//     Open Git Bash or your terminal and navigate to the folder where you want to clone the repository:
//         cd path/to/your/directory

//     Clone the repository to your local machine:
//         git clone https://github.com/your-username/CollaborativeProject.git

// Step 6 -> Initialize Git if creating a new repository locally
//     If you want to initialize Git for an existing project instead of cloning, follow these steps:

//     Create a directory for your project:
//         mkdir CollaborativeProject
//         cd CollaborativeProject

//     Initialize Git:
//         git init

// Step 7 -> Add another team member to your GitHub repository
//     -> Go to your repository on GitHub.
//     -> Click on the "Settings" tab (located at the top of the repository page).
//     -> On the left sidebar, click Collaborators under the "Access" section.
//     -> In the "Manage Access" section, click Invite a collaborator.
//     -> Enter your teammate's GitHub username or email and select them from the dropdown.
//     -> Click Add Collaborator.
//     -> Your teammate will receive an invitation, and once they accept, they can access and collaborate on the repository.

// Step 8 -> Push your changes to the repository
//     Make some changes to your local project, like adding a README.md file.
//         echo "# Collaborative Project" > README.md

//     Add the new file to Git:
//         git add README.md

//     Commit your changes:
//         git commit -m "Added README.md"

//     Push the changes to GitHub:
//         git push origin master  #If you want you can change the name of the branch refer to Q10 txt file

// Step 9 -> Clone the repository (for the team member)
//     The team member you invited will log in to their GitHub account.
//     After accepting the invitation, they will go to the repository on GitHub.

//     They can now clone the repository by copying the HTTPS URL and running the following in Git Bash or their terminal:
//         git clone https://github.com/your-username/CollaborativeProject.git

// Step 10 -> Team member makes changes and pushes to the repository
//     After cloning the repository, the team member can navigate to the cloned folder:
//         cd CollaborativeProject

//     The team member makes changes to the project, like creating another file:
//         echo "This is a file added by the team member" > team_member_file.txt

//     The team member stages the changes:
//         git add team_member_file.txt

//     They commit the changes:
//         git commit -m "Team member added a new file"

//     Push the changes to the GitHub repository:
//         git push origin master

// link:'https://education.github.com/git-cheat-sheet-education.pdf

// link:'https://www.geeksforgeeks.org/git-cheat-sheet/

// `,
//         resources: [{name: 'cheat Sheet', link:'https://education.github.com/git-cheat-sheet-education.pdf'},
//                     {name: 'geeksforgeeks - Cheat-sheet', link:'https://www.geeksforgeeks.org/git-cheat-sheet/'}],
//         drawioFile: null // No draw.io file for this experiment
//         },

//         {
//             title: 'EXP-12 Black  Box Test Cases for a Calculator Application ',
//             content: `EXP-12 Create Black Box Test Cases for a Calculator Application using java and Junit for below functions:
// i) Addition of Two Positive Numbers ii) Multiplication of Two Numbers iii) Division by Zero iv) Square Root of a Positive Number

// Step 1: Install JDK
//     Download JDK:
//         Go to the Oracle JDK download page or AdoptOpenJDK.
//             Install JDK: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html

//     Verify Installation:
//         Open a terminal and run:
//             java -version

// Step 3: Install Maven
//     Download Maven:
//         Go to the Apache Maven download page and download the binary zip file.[https://maven.apache.org/download.cgi]
//     Install Maven:
//         Windows:
//             Unzip the file and move the extracted folder to a location
//             Add the bin folder to your PATH environment variable.
//     Verify Maven Installation:
//         mvn -v

// Step 4: Install VS Code
//     Download and Install VS Code:
//         Go to the VS Code website and download the installer for your operating system.
//         Follow the installation instructions.
// Step 5: Install Java Extensions in VS Code
//     Open VS Code and go to the Extensions view (Ctrl+Shift+X).
//     Search for and install:
//         Java Extension Pack by Microsoft
//         JUnit 5 Test Runner (optional but recommended)

// Step 6: Create the Project Structure
//     Initialize a Maven Project:
//             mvn archetype:generate -DgroupId=com.example -DartifactId=[Name of you project] -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
//     Navigate to the Project Directory:
//         cd Project directory

// tep 7: Write Java and JUnit Classes
//     Create Project name Class:
//         File Path: src/main/java/com/example/App.java
//         Content:
    
//     Create JUnit Test Class:
//         File Path: src/test/java/com/example/AppTest.java
//         Content:

// Step 8: Add JUnit Dependency to pom.xml
//     Open pom.xml and add the JUnit dependency in the <dependencies> section:
//             *****
//             <dependencies>
//                 <dependency>
//                         <groupId>junit</groupId>
//                         <artifactId>junit</artifactId>
//                         <version>4.13.2</version>
//                         <scope>test</scope>
//                     </dependency>
//             </dependencies>
//             *******

// Step 9: Run Tests in VS Code
//     Run Tests:
//         Right-click CalculatorTest.java → Run Test.
//     Using Maven:
//         mvn test


//         `,

//             resources: [{name: '12-No link', link:''},],
//             drawioFile: '/files/Black-White/Black-Calculator.zip' // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-13 Black Box Test Cases for a Unit Converter Application ',
//             content: `EXP-13 Create Black Box Test Cases for a Unit Converter Application using java and Junit for below functions:
//             i) Length Conversion  (Meters to Kilometers) ii) Temperature Conversion (Celsius to Fahrenheit) iii) Invalid Input (Negative Values)
//             iv) Invalid Input (Non-Numeric Values)

// Step 1: Install JDK
//     Download JDK:
//         Go to the Oracle JDK download page or AdoptOpenJDK.
//             Install JDK: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html

//     Verify Installation:
//         Open a terminal and run:
//             java -version

// Step 3: Install Maven
//     Download Maven:
//         Go to the Apache Maven download page and download the binary zip file.[https://maven.apache.org/download.cgi]
//     Install Maven:
//         Windows:
//             Unzip the file and move the extracted folder to a location
//             Add the bin folder to your PATH environment variable.
//     Verify Maven Installation:
//         mvn -v

// Step 4: Install VS Code
//     Download and Install VS Code:
//         Go to the VS Code website and download the installer for your operating system.
//         Follow the installation instructions.
// Step 5: Install Java Extensions in VS Code
//     Open VS Code and go to the Extensions view (Ctrl+Shift+X).
//     Search for and install:
//         Java Extension Pack by Microsoft
//         JUnit 5 Test Runner (optional but recommended)

// Step 6: Create the Project Structure
//     Initialize a Maven Project:
//             mvn archetype:generate -DgroupId=com.example -DartifactId=[Name of you project] -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
//     Navigate to the Project Directory:
//         cd Project directory

// tep 7: Write Java and JUnit Classes
//     Create Project name Class:
//         File Path: src/main/java/com/example/App.java
//         Content:
    
//     Create JUnit Test Class:
//         File Path: src/test/java/com/example/AppTest.java
//         Content:

// Step 8: Add JUnit Dependency to pom.xml
//     Open pom.xml and add the JUnit dependency in the <dependencies> section:
//             *****
//             <dependencies>
//                 <dependency>
//                         <groupId>junit</groupId>
//                         <artifactId>junit</artifactId>
//                         <version>4.13.2</version>
//                         <scope>test</scope>
//                     </dependency>
//             </dependencies>
//             *******

// Step 9: Run Tests in VS Code
//     Run Tests:
//         Right-click CalculatorTest.java → Run Test.
//     Using Maven:
//         mvn test


//         `,

//         resources: [{name: '13-No link', link:''},],
//             drawioFile: '/files/Black-White/Black-unit_convertor.zip' // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-14 Black Box Test Cases for a Recipe Manager Application ',
//             content: `EXP-14 Create Black Box Test Cases for a Recipe Manager Application using java and Junit for below functions:
//             i ) Add a New Recipe ii) Add Recipe with Missing Ingredients iii) Edit an Existing Recipe iv) Delete a Recipe

// Step 1: Install JDK
//     Download JDK:
//         Go to the Oracle JDK download page or AdoptOpenJDK.
//             Install JDK: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html

//     Verify Installation:
//         Open a terminal and run:
//             java -version

// Step 3: Install Maven
//     Download Maven:
//         Go to the Apache Maven download page and download the binary zip file.[https://maven.apache.org/download.cgi]
//     Install Maven:
//         Windows:
//             Unzip the file and move the extracted folder to a location
//             Add the bin folder to your PATH environment variable.
//     Verify Maven Installation:
//         mvn -v

// Step 4: Install VS Code
//     Download and Install VS Code:
//         Go to the VS Code website and download the installer for your operating system.
//         Follow the installation instructions.
// Step 5: Install Java Extensions in VS Code
//     Open VS Code and go to the Extensions view (Ctrl+Shift+X).
//     Search for and install:
//         Java Extension Pack by Microsoft
//         JUnit 5 Test Runner (optional but recommended)

// Step 6: Create the Project Structure
//     Initialize a Maven Project:
//             mvn archetype:generate -DgroupId=com.example -DartifactId=[Name of you project] -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
//     Navigate to the Project Directory:
//         cd Project directory

// tep 7: Write Java and JUnit Classes
//     Create Project name Class:
//         File Path: src/main/java/com/example/App.java
//         Content:
    
//     Create JUnit Test Class:
//         File Path: src/test/java/com/example/AppTest.java
//         Content:

// Step 8: Add JUnit Dependency to pom.xml
//     Open pom.xml and add the JUnit dependency in the <dependencies> section:
//             *****
//             <dependencies>
//                 <dependency>
//                         <groupId>junit</groupId>
//                         <artifactId>junit</artifactId>
//                         <version>4.13.2</version>
//                         <scope>test</scope>
//                     </dependency>
//             </dependencies>
//             *******

// Step 9: Run Tests in VS Code
//     Run Tests:
//         Right-click CalculatorTest.java → Run Test.
//     Using Maven:
//         mvn test


//         `,

//         resources: [{name: '14-No link', link:''},],
//             drawioFile: '/files/Black-White/Black-Recipe_Manager.zip' // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-15 White Box Testing: for a Calculator Application ',
//             content: `EXP-15 White Box Testing: Create a Calculator class with methods for addition,
//             subtraction, multiplication,and division (with exception handling for division by zero),
//             and implement a corresponding Calculator Test class in JUnit to test valid operations and edge cases.

// Step 1: Install JDK
//     Download JDK:
//         Go to the Oracle JDK download page or AdoptOpenJDK.
//             Install JDK: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html

//     Verify Installation:
//         Open a terminal and run:
//             java -version

// Step 3: Install Maven
//     Download Maven:
//         Go to the Apache Maven download page and download the binary zip file.[https://maven.apache.org/download.cgi]
//     Install Maven:
//         Windows:
//             Unzip the file and move the extracted folder to a location
//             Add the bin folder to your PATH environment variable.
//     Verify Maven Installation:
//         mvn -v

// Step 4: Install VS Code
//     Download and Install VS Code:
//         Go to the VS Code website and download the installer for your operating system.
//         Follow the installation instructions.
// Step 5: Install Java Extensions in VS Code
//     Open VS Code and go to the Extensions view (Ctrl+Shift+X).
//     Search for and install:
//         Java Extension Pack by Microsoft
//         JUnit 5 Test Runner (optional but recommended)

// Step 6: Create the Project Structure
//     Initialize a Maven Project:
//             mvn archetype:generate -DgroupId=com.example -DartifactId=[Name of you project] -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
//     Navigate to the Project Directory:
//         cd Project directory

// tep 7: Write Java and JUnit Classes
//     Create Project name Class:
//         File Path: src/main/java/com/example/App.java
//         Content:
    
//     Create JUnit Test Class:
//         File Path: src/test/java/com/example/AppTest.java
//         Content:

// Step 8: Add JUnit Dependency to pom.xml
//     Open pom.xml and add the JUnit dependency in the <dependencies> section:
//             *****
//             <dependencies>
//                 <dependency>
//                         <groupId>junit</groupId>
//                         <artifactId>junit</artifactId>
//                         <version>4.13.2</version>
//                         <scope>test</scope>
//                     </dependency>
//             </dependencies>
//             *******

// Step 9: Run Tests in VS Code
//     Run Tests:
//         Right-click CalculatorTest.java → Run Test.
//     Using Maven:
//         mvn test


//         `,

//             resources: [{name: '15-No link', link:''},],
//             drawioFile: '/files/Black-White/White-Calculator.zip' // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-16 White Box Testing: for a To Do List Manager ',
//             content: `EXP-16 White Box Testing: Develop the ToDoListManager class with methods to add, remove,
//             and view tasks, while the corresponding test class will address valid operations and edge cases.

// Step 1: Install JDK
//     Download JDK:
//         Go to the Oracle JDK download page or AdoptOpenJDK.
//             Install JDK: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html

//     Verify Installation:
//         Open a terminal and run:
//             java -version

// Step 3: Install Maven
//     Download Maven:
//         Go to the Apache Maven download page and download the binary zip file.[https://maven.apache.org/download.cgi]
//     Install Maven:
//         Windows:
//             Unzip the file and move the extracted folder to a location
//             Add the bin folder to your PATH environment variable.
//     Verify Maven Installation:
//         mvn -v

// Step 4: Install VS Code
//     Download and Install VS Code:
//         Go to the VS Code website and download the installer for your operating system.
//         Follow the installation instructions.
// Step 5: Install Java Extensions in VS Code
//     Open VS Code and go to the Extensions view (Ctrl+Shift+X).
//     Search for and install:
//         Java Extension Pack by Microsoft
//         JUnit 5 Test Runner (optional but recommended)

// Step 6: Create the Project Structure
//     Initialize a Maven Project:
//             mvn archetype:generate -DgroupId=com.example -DartifactId=[Name of you project] -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
//     Navigate to the Project Directory:
//         cd Project directory

// tep 7: Write Java and JUnit Classes
//     Create Project name Class:
//         File Path: src/main/java/com/example/App.java
//         Content:
    
//     Create JUnit Test Class:
//         File Path: src/test/java/com/example/AppTest.java
//         Content:

// Step 8: Add JUnit Dependency to pom.xml
//     Open pom.xml and add the JUnit dependency in the <dependencies> section:
//             *****
//             <dependencies>
//                 <dependency>
//                         <groupId>junit</groupId>
//                         <artifactId>junit</artifactId>
//                         <version>4.13.2</version>
//                         <scope>test</scope>
//                     </dependency>
//             </dependencies>
//             *******

// Step 9: Run Tests in VS Code
//     Run Tests:
//         Right-click CalculatorTest.java → Run Test.
//     Using Maven:
//         mvn test


//         `,

//             resources: [{name: '16-No link', link:''},],
//             drawioFile: '/files/Black-White/White-To_do_list.zip' // No draw.io file for this experiment
//         },
//         {
//             title: 'EXP-17 White Box Testing: for a RecipeManager ',
//             content: `EXP-17 White Box Testing: Create the RecipeManager class with methods
//             addRecipe(String recipe), removeRecipe(int index), getRecipes() and implement a
//             RecipeManagerTest class using JUnit to i) Test valid recipe addition and retrieval
//             ii) Verify exceptions for null/empty recipes and invalid removals.

// Step 1: Install JDK
//     Download JDK:
//         Go to the Oracle JDK download page or AdoptOpenJDK.
//             Install JDK: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html

//     Verify Installation:
//         Open a terminal and run:
//             java -version

// Step 3: Install Maven
//     Download Maven:
//         Go to the Apache Maven download page and download the binary zip file.[https://maven.apache.org/download.cgi]
//     Install Maven:
//         Windows:
//             Unzip the file and move the extracted folder to a location
//             Add the bin folder to your PATH environment variable.
//     Verify Maven Installation:
//         mvn -v

// Step 4: Install VS Code
//     Download and Install VS Code:
//         Go to the VS Code website and download the installer for your operating system.
//         Follow the installation instructions.
// Step 5: Install Java Extensions in VS Code
//     Open VS Code and go to the Extensions view (Ctrl+Shift+X).
//     Search for and install:
//         Java Extension Pack by Microsoft
//         JUnit 5 Test Runner (optional but recommended)

// Step 6: Create the Project Structure
//     Initialize a Maven Project:
//             mvn archetype:generate -DgroupId=com.example -DartifactId=[Name of you project] -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
//     Navigate to the Project Directory:
//         cd Project directory

// tep 7: Write Java and JUnit Classes
//     Create Project name Class:
//         File Path: src/main/java/com/example/App.java
//         Content:
    
//     Create JUnit Test Class:
//         File Path: src/test/java/com/example/AppTest.java
//         Content:

// Step 8: Add JUnit Dependency to pom.xml
//     Open pom.xml and add the JUnit dependency in the <dependencies> section:
//             *****
//             <dependencies>
//                 <dependency>
//                         <groupId>junit</groupId>
//                         <artifactId>junit</artifactId>
//                         <version>4.13.2</version>
//                         <scope>test</scope>
//                     </dependency>
//             </dependencies>
//             *******

// Step 9: Run Tests in VS Code
//     Run Tests:
//         Right-click CalculatorTest.java → Run Test.
//     Using Maven:
//         mvn test


//         `,

//             resources: [{name: '17-No link', link:''},],
//             drawioFile: '/files/Black-White/White-Recipe_Manager.zip' // No draw.io file for this experiment
//         },
//         // Add more experiments as needed
//     ]
};



document.getElementById('subject').addEventListener('change', function() {
    const subject = this.value;
    const experimentSelect = document.getElementById('experiment');
    experimentSelect.innerHTML = '<option value="">Select Experiment</option>'; // Reset options

    if (subject) {
        const experiments = experimentData[subject];
        experiments.forEach(exp => {
            const option = document.createElement('option');
            option.value = exp.title;
            option.textContent = exp.title;
            experimentSelect.appendChild(option);
        });
    }
});

document.getElementById('experiment').addEventListener('change', function() {
    const subject = document.getElementById('subject').value;
    const selectedExperimentTitle = this.value;

    if (subject && selectedExperimentTitle) {
        const experiment = experimentData[subject].find(exp => exp.title === selectedExperimentTitle);
        
        document.getElementById('experimentTitle').textContent = experiment.title;
        document.getElementById('experimentContent').textContent = experiment.content;

        // Prepare references
        const referencesHtml = experiment.resources.map(ref => `<a href="${ref.link}" target="_blank">${ref.name}</a>`).join(', ');
        document.getElementById('experimentReferences').innerHTML = referencesHtml;

        // Show or hide elements based on availability of drawioFile
        if (experiment.drawioFile) {
            document.getElementById('drawioLink').href = experiment.drawioFile;
            //document.getElementById('drawioLink').style.display = 'block';
        } else {
            document.getElementById('drawioLink').style.display = 'none';
        }

        // Show download button
        const downloadButton = document.getElementById('downloadButton');
        downloadButton.style.display = 'block';

        // Set up download functionality
        downloadButton.onclick = function() {
            let referencesText = '';
            if (experiment.resources.length > 0) {
                referencesText = '\nReferences:\n' + experiment.resources.map(ref => `${ref.name}: ${ref.link}`).join('\n');
            }

            const fullText = `${experiment.content}${referencesText}`;
            const blob = new Blob([fullText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${experiment.title}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url); // Clean up URL object
        };
        

        // Show resources section
        document.getElementById('resources').style.display = 'block';
    }
});