// grab our gulp packages
const gulp  = require('gulp'),
      gutil = require('gulp-util'),
      browserify = require("browserify"),
      babel = require('gulp-babel'),
      adventure = require('adventure'),
      del = require('del'),
      fs = require('fs'),
      babelify = require('babelify');

const STORY_PATH = 'node_modules/adventure/examples/thehouse/';

gulp.task('clean', function () {
  return del([
    'dist/*',
    'src/js/story.json'
  ]);
});

gulp.task('copy-static-files', ['clean'], function () {

  fs.mkdirSync('./dist/js');
  fs.mkdirSync('./dist/css');

  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
  
  gulp.src('./src/css/style.css')
    .pipe(gulp.dest('./dist/css/'));
  
  gulp.src('./src/js/speech.js')
    .pipe(gulp.dest('./dist/js/'));
})

gulp.task('transform-react', ['clean'], function() {

  var options = {
    entries: "./src/components/root.jsx",
    extensions: [".js", ".jsx"],
    paths: ["./src/components/"]
  };

  return browserify(options)
      .transform(babelify, {presets: ["env", "react"]})
      .bundle()
      .pipe(gulp.dest("./dist"));
})

// create a default task and just log a message
gulp.task('transform-adventure', ['copy-static-files'], function() {
  
  // Generate the story.json.
  createStoryJson(STORY_PATH, 'src/js/story.json');

  browserify('./src/js/adventure.js')
    .transform("babelify", {presets: ["env", "react"]})
    .bundle()
    .pipe(fs.createWriteStream("./dist/js/adventure.js"));

  // Generate the adventure-bundled.js
 /* gulp.src('src/js/adventure.js')
    .pipe(browserify({
      insertGlobals : true,
      paths: ['./node_modules','./src/js/']
    }))
    .pipe(gulp.dest('dist/js'))*/
});

function createStoryJson(storyDirectory, outputFile)
{
  function writeFile(path, contents) {
    fs.writeFile(path, contents, error => {
      if (error) {
        return console.log(error);
      }
    });
  }

  // Load the story.
  const story = adventure.loadStory(storyDirectory);

  // Store the story as JSON.
  const storyJson = JSON.stringify(story, null, 2);

  // Save the story to a file.
  writeFile(outputFile, storyJson);
}

gulp.task('default', [
  'copy-static-files', 
  'transform-adventure', 
  'transform-react']);