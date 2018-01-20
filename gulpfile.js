// grab our gulp packages
const gulp  = require('gulp'),
      gutil = require('gulp-util');
const browserify = require('gulp-browserify');
const babel = require('gulp-babel');
const adventure = require('adventure');
const del = require('del');

const STORY_PATH = 'node_modules/adventure/examples/thehouse/';

gulp.task('clean', function () {
  return del([
    'dist/*',
    'src/js/story.json'
  ]);
});

gulp.task('copy', ['clean'], function () {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
  
  gulp.src('./src/css/style.css')
    .pipe(gulp.dest('./dist/css/'));
  
  gulp.src('./src/js/speech.js')
    .pipe(gulp.dest('./dist/js/'));
})

gulp.task('generate-react', ['clean'], function() {
  return gulp.src('./src/**/*.jsx')
      .pipe(babel({
          presets: ["react", "es2015"]
      }))
      .pipe(browserify({
        insertGlobals : true,
        debug : !gulp.env.production,
        paths: ['./node_modules']
      }))
      .pipe(gulp.dest('./dist/'));
})

// create a default task and just log a message
gulp.task('generate-adventure', ['copy'], function() {
  
  // Generate the story.json.
  createStoryJson(STORY_PATH, 'src/js/story.json');

  // Generate the adventure-bundled.js
  gulp.src('src/js/adventure.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production,
      paths: ['./node_modules','./src/js/']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['copy', 'generate-adventure', 'generate-react']);

function createStoryJson(storyDirectory, outputFile)
{
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
