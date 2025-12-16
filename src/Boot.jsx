import { useState } from 'react';


export default function Boot() {
    const art = `   _           _     _
  (_)         | |   (_)
   _ _ __ ___ | |    _ _ __  _   ___  __
  | | '_ \` _ \\| |   | | '_ \\| | | \\ \\/ /
  | | | | | | | |___| | | | | |_| |>  < 
  | |_| |_| |_\\_____/_|_| |_|\\__,_/_/\\_\\
 _/ |
|__/
    `;

    const lines = [
        { text: art, delay: 150 },
        { text: 'Award BIOS v6.0 - Initializing...', delay: 50 },
        { text: 'Detecting Primary Master.... Western Digital WD800JB 80GB', delay: 100 },
        { text: 'Detecting Primary Slave..... None', delay: 50 },
        { text: 'Detecting Secondary Master.. SAMSUNG CD-ROM SC-148C', delay: 100 },
        { text: 'Memory Test: 512MB OK', delay: 100, class: 'success' },
        { text: 'CPU: Intel Pentium 4 @ 2.4GHz', delay: 50 },
        { text: ' ' },
        { text: 'Loading kernel modules...', delay: 150 },
        { text: 'Initializing USB subsystem...', delay: 100 },
        { text: 'usb.c: registered new driver usbdevfs', delay: 50, class: 'success' },
        { text: 'usb.c: registered new driver hub', delay: 50, class: 'success' },
        { text: 'usb-uhci.c: USB UHCI at I/O 0xd800, IRQ 11', delay: 100 },
        { text: '[  OK  ] Started udev Kernel Device Manager', delay: 100, class: 'success' },
        { text: '[  OK  ] Started Network Service', delay: 50, class: 'success' },
        { text: '[  OK  ] Mounted /dev/hda1', delay: 75, class: 'success' },
        { text: '[  OK  ] Started System Logging Service', delay: 50, class: 'success' },
        { text: '[ WARN ] eth0: Link is Down', delay: 100, class: 'warning' },
        { text: '[  OK  ] Started Telnet Server', delay: 50, class: 'success' },
        { text: ' ' },
        { text: 'Initializing parallel port...', delay: 100 },
        { text: 'parport0: PC-style at 0x378 [PCSPP,TRISTATE]', delay: 50, class: 'success' },
        { text: 'lp0: using parport0 (polling).', delay: 50, class: 'success' },
        { text: ' ' },
        { text: 'Initializing security protocols...', delay: 150 },
        { text: 'Loading firewall rules..................... OK', delay: 250, class: 'success' },
        { text: 'Starting authentication service............ OK', delay: 200, class: 'success' },
        { text: 'Starting system cron daemon................ OK', delay: 100, class: 'success' },
        { text: 'Enabling encryption layer.................. OK', delay: 150, class: 'success' },
        { text: ' ' },
        { text: 'Scanning hardware devices...', delay: 150 },
        { text: 'Found: Graphics Controller [ATI Radeon 9800 Pro]', delay: 100 },
        { text: 'Found: Network Controller [3Com 3C905]', delay: 50 },
        { text: 'Found: Storage Controller [Western Digital 80GB]', delay: 50 },
        { text: 'Starting database services...', delay: 150 },
        { text: 'MySQL 4.0.18............................... OK', delay: 200, class: 'success' },
        { text: 'Initializing web services...', delay: 150 },
        { text: 'Apache 2.0.54.............................. OK', delay: 200, class: 'success' },
        { text: 'PHP 4.3.10................................. OK', delay: 150, class: 'success' },
        { text: 'Running system diagnostics...', delay: 250 },
        { text: 'Disk usage: 23GB / 80GB (29%)', delay: 100, class: 'success' },
        { text: 'Memory usage: 142MB / 512MB (28%)', delay: 50, class: 'success' },
        { text: 'CPU temperature: 58°C', delay: 50, class: 'success' },
        { text: 'Network latency: 87ms', delay: 50, class: 'success' },
        { text: 'Load average: 0.24, 0.18, 0.12', delay: 50, class: 'success' },
        { text: '========================================', delay: 50 },
        { text: 'SYSTEM READY', delay: 150, class: 'warning' },
        { text: 'Uptime: 0 days, 0:00:03' }
    ];

    const [lineElements, setLineElements] = useState([]);
    const [ran, setRan] = useState(false);

    async function readLines() {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        let key = 0;
        for (const line of lines) {
            let lineClass;
            switch (line.class) {
                case 'success':
                    lineClass = 'text-green-100';
                    break;
                case 'warning':
                    lineClass = 'text-amber-200';
                    break;
                default:
                    lineClass = '';
            };

            const element = <pre className={lineClass} key={key}>{line.text}</pre>;

            if (line.delay) {
                await delay(line.delay);
            };

            setLineElements(prev => [...prev, element]);
            key = key + 1;
        };
    };

    if (!ran) {
        readLines();
        setRan(true);
    };

    return (
        <div
            className='m-4 absolute top-0 text-[9px] opacity-30 animate-fadeOut min-[430px]:text-xs min-[500px]:text-sm'
            style={{ animationDelay: '5.4s', fontFamily: 'monospace' }}
        >
            <>
                {lineElements}
            </>
        </div>
    );
};
