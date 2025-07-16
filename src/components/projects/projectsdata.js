import coolimations from "../../assets/projects_imgs/Coolimations.png"
import academic from "../../assets/projects_imgs/Academic-project.png"
import music from "../../assets/projects_imgs/music-player.png"
import file from "../../assets/projects_imgs/file-folder.png"

const projects=[
    {   
        title:"Academic-Project-Portal",
        description:"Academic-Project-Portal is a Flask-App is a web portal that streamlines academic project collaboration. It enables teachers to post and manage projects, while students can take up tasks, submit work, and receive feedback.",
        stack:["HTML","BootStrap","Flask","SQLAlchemy","SQLite"],
        link:"https://github.com/HutanshSharma/Academic-Project-Portal",
        image:academic
    },
    {
        title:"Music Player",
        description:"A console-based music player built in C++ using SDL3 for audio playback. It supports playlist management using a doubly circular linked list, song history with a stack, and a song queue with a deque.",
        stack:["C++","DSA","SDL3"],
        link:"https://github.com/HutanshSharma/Music_Player",
        image:music
    },
    {
        title:"File/Folder Compressor",
        description:"A Qt-based file and folder compression tool with custom chunked compression, metadata handling, and robust decompression — supports recursive directory processing and binary-safe operations.",
        stack:["C++","Qt6"],
        link:"https://github.com/HutanshSharma/File-Folder-Compression-tool",
        image:file
    },
    {
        title:"Coolimations",
        description:"Interactive JavaScript Canvas animations with physics, motion, and collisions — built with Tailwind CSS and responsive UI.",
        stack:["JavaScript","Canvas API","HMTL","Tailwind"],
        live:"https://coolimations.vercel.app",
        link:"https://github.com/HutanshSharma/Coolimations",
        image:coolimations
    },
]

export default projects