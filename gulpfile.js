const gulp  = require('gulp'),
      adventure = require('adventure'),
      browserify = require('browserify'),
      babelify = require('babelify'),
      del = require('del'),
      fs = require('fs');

const STORY_PATH = 'node_modules/adventure/examples/thehouse/';

gulp.task('clean', function () {
  return del([
    'dist/*',
    'src/js/story.json'
  ]);
});

gulp.task('copy-static-files', ['clean'], function () {

  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
  
  gulp.src('./src/css/style.css')
    .pipe(gulp.dest('./dist/css/'));
  
  gulp.src('./src/js/speech.js')
    .pipe(gulp.dest('./dist/js/'));
})

gulp.task('transform-react', ['copy-static-files'], function() {

  // Create the output directory.
  createDirectory('dist/js');

  browserify('./src/components/root.jsx')
    .transform(babelify, {presets: ["env", "react"]})
    .bundle()
    .pipe(fs.createWriteStream("dist/js/root.js"));
})

// create a default task and just log a message
gulp.task('transform-adventure', ['clean'], function() {
  
  // Create the output directory.
  createDirectory('dist/js');

  // Generate the story.json.
  createStoryJson(STORY_PATH, 'src/js/story.json');

  browserify('src/js/adventure.js')
    .transform(babelify, {presets: ["env", "react"]})
    .bundle()
    .pipe(fs.createWriteStream('dist/js/adventure.js'));
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

function createDirectory(path)
{
  try {
    fs.mkdirSync(path);
  } catch (err) {
  }
}

gulp.task('default', [
  'copy-static-files', 
  'transform-adventure', 
  'transform-react']);