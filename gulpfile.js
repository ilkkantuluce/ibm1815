const  gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

function publishToGitHubPreview(){
  return gulp.src("./dist/**/*").pipe(ghPages());
}
module.exports = {
  ghPreview: publishToGitHubPreview,
};
