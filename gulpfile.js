const gulp  = require('gulp'),
      adventure = require('adventure'),
      browserify = require('browserify'),
      babelify = require('babelify'),
      del = require('del'),
      fs = require('fs'),
      express = require('express'),
      mkdirp = require('mkdirp');

const STORY_PATH = 'node_modules/adventure/examples/thehouse/';
const SERVER_PORT = 8080;

// Delete previous files.
gulp.task('clean', () => {
  return del([
    'dist'
  ]);
});

// Copy static files.
gulp.task('copy-static-files', ['clean'], () => {

  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
  
  gulp.src('./src/css/style.css')
    .pipe(gulp.dest('./dist/css/'));
});

// Create the components file.
gulp.task('transform-react', ['copy-static-files'], () => {

  // Create the output directory.
  createDirectory('dist/js');

  // Generate the story.json.
  createStoryJson(STORY_PATH, 'dist/story.json');

  browserify('./src/components/root.jsx')
    .transform(babelify, {presets: ["env", "react"]})
    .bundle()
    .pipe(fs.createWriteStream("dist/js/components.js"));
});

gulp.task('run-server', ['transform-react'], () => {
  const app = express();
  app.use(express.static('dist'));
  app.listen(SERVER_PORT, 
    () => console.log(`Server listening on ${SERVER_PORT}`));
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
  mkdirp.sync(path);
}

gulp.task('default', [
  'run-server']);