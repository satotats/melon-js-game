// a melonJS data manifest
// note : this is note a webpack manifest
const DataManifest = [

    /* Bitmap Text */
    {
        name: "PressStart2P",
        type: "image",
        src: "./data/fnt/PressStart2P.png"
    },
    {
        name: "PressStart2P",
        type: "binary",
        src: "./data/fnt/PressStart2P.fnt"
    },

    {
        name: "area01",
        type: "tmx",
        src: "./data/map/area01.tmx"
    },
    {
        name: "area01_level_tiles.tsx",
        type: "tmx",
        src: "./data/map/area01_level_tiles.tsx"
    },
    {
        name: "area01_image",
        type: "image",
        src: 'data/img/map/area01_level_tiles.png',
    },
];

export default DataManifest;
