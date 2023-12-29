const wrapper = document.getElementById("tiles");

var animated_tiles = [];
var timeouts = [];

let columns = 0,
    rows = 0,
    toggled = false;

const toggle = () => {
    toggled = !toggled;

    document.body.classList.toggle("toggled");
};

function removeTimeout(id) {
    for (let i = 0; i < timeouts.length; i++) {
        var subid, timeout = timeouts[i];
        if (subid == id) {
            console.log("found !")
            clearTimeout(timeout);
            timeouts.splice(i, 1)
            break;
        }
    }
}

function animateOpacity(initial, end, element, duration) {
    if (animated_tiles.includes(element.id)) {
        console.log("already there");
        animated_tiles.splice(animated_tiles.indexOf(element.id));
        removeTimeout(element.id);
    }
    animated_tiles.push(element.id);
    element.style.opacity = initial;
    var opacity = initial;
    var wait = 100; //100ms
    var steps = 1000 * duration / wait;
    var ostep = (end - initial) / steps;
    var stopped = false;
    // console.log(animated_tiles);
    function step() {
        steps--;
        // if (!animated_tiles.includes(element.id)) {
        //     stopped = true; 
        //     removeTimeout(element.id);
        //     return;
        // }
        if (steps > 0) {
            // console.log(animated_tiles)
            opacity = opacity + ostep;
            element.style.opacity = opacity;
            removeTimeout(element.id);
            var timeout = window.setTimeout(step, wait);
            timeouts.push([element.id, timeout]);
        } else {
            element.style.opacity = end;
        }
    };
    step();
    if (!stopped) {
        animated_tiles.splice(animated_tiles.indexOf(element.id), 1);
        removeTimeout(element.id);
    }
}

const handleOnClick = (tile) => {
    toggle();
};

const createTile = (index) => {
    const tile = document.createElement("div");
    tile.id = index;

    tile.classList.add("tile");

    tile.style.opacity = toggled ? 0 : 1;

    tile.onclick = () => handleOnClick(tile);
    tile.onmouseover = () => animateOpacity(0, 1, tile, 3);

    return tile;
};

const createTiles = (quantity) => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    });
};

const createGrid = () => {
    wrapper.innerHTML = "";

    const size = document.body.clientWidth > 800 ? 50 : 50;

    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
};

createGrid();

window.onresize = () => createGrid();