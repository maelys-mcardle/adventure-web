// grab our gulp packages
const gulp  = require('gulp'),
      gutil = require('gulp-util');
const browserify = require('gulp-browserify');
var del = require('del');

const STORY_PATH = 'node_modules/adventure/examples/thehouse/';

gulp.task('clean', function () {
  return del([
    'dist/*',
    'story.json'
  ]);
});

// create a default task and just log a message
gulp.task('scripts', ['clean'], function() {
  
  // Generate the story.json.
  createStoryJson(STORY_PATH, 'story.json');

  // Generate the adventure-bundled.js
  gulp.src('adventure.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest('dist'))

  return gutil.log('Gulp is running!');
});

gulp.task('default', ['scripts']);

function createStoryJson(storyDirectory, outputFile)
{
  // Load the adventure engine.
  const adventure = require('adventure');

  // Load the story.
  const story = adventure.loadStory(storyDirectory);

  // Save the story to a file.
  writeFile(outputFile, toJson(story));
}


/**
 * Writes a file.
 * @param {string} path The path to the file.
 * @param {string} contents The contents of the file.
 * @returns {undefined}
 */
function writeFile(path, contents) {
  const fs = require('fs');
  fs.writeFile(path, contents, error => {
    if (error) {
      return console.log(error);
    }
  });
}

/**
 * Serializes a JavaScript object.
 * @param {Object} object The JavaScript object.
 * @returns {string} The serialized object.
 */
function toJson(object) {
  return JSON.stringify(object, null, 2);
}
