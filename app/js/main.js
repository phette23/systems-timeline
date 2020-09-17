// The TL.Timeline constructor takes at least two arguments:
// the id of the Timeline container (no '#'), and
// the URL to your JSON data file or Google spreadsheet.
// the id must refer to an element "above" this code,
// and the element must have CSS styling to give it width and height
// optionally, a third argument with configuration options can be passed.
// Options: https://timeline.knightlab.com/docs/options.html
let options = {
    "hash_bookmark": true
}
let timeline = new TL.Timeline('timeline-embed', 'data/systems.json', options)
