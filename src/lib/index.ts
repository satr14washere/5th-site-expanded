export function getTimeIn(timezone: string): string {
    const options = { timeZone: timezone, hour12: true, hour: 'numeric', minute: 'numeric' };
    // @ts-ignore
    const time = new Date().toLocaleString("en-US", options);
    return time;
}

export function timeAgo(unixTimestamp: number): string {
    const date = new Date(unixTimestamp);
    // @ts-ignore
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}

export function randomStr(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'.toUpperCase();
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export default {
    title: "satr14's site",
    quote: "sometimes you just gotta implement it yourself",
    name: "satr14",
    roles: ["Web Developer", "Sysadmin", "Hobbyist", "Student"],
    description: "I'm Satria, Im a self-taught hobbyist web developer and homelaber sysadmin from Indonesia. I've been programming since 2021 and spend my free time working on personal projects and experimenting with new technologies.",
    skills: ["Tailwind", "SvelteKit", "TypeScript", "Bun", "Express", "PocketBase", "Linux", "Nginx", "Docker", "Git", "Bash", "Proxmox", "Nix"],
    timezone: "Asia/Jakarta",
    location: "Indonesia",
    links: {
        "git": "https://git.satr14.my.id",
        "fetch.sh": "https://fetch.satr14.my.id",
        "flake.nix": "https://flake.satr14.my.id",
    },
    communities: {
        "part-of.my.id": {
            icon: "https://avatars.githubusercontent.com/u/184933425?s=200&v=4",
            role: "Founder",
            url: "https://part-of.my.id/",  
        },
        "is-a.dev": {
            icon: "https://avatars.githubusercontent.com/u/72358814?s=200&v=4",
            role: "Maintainer",
            url: "https://is-a.dev/",
        },
        "Hack Club": {
            icon: "https://assets.hackclub.com/icon-square.png",
            role: "Former Event Organizer",
            url: "https://hackclub.com/",
        },
    },
    socials: {
        protonmail: "mailto:admin@satr14.my.id",
        github: "https://github.com/satr14washere",
        discord: "https://discord.com/users/882595027132493864",
        namemc: "https://namemc.com/profile/satr14.1"
    },
}