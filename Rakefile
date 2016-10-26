require 'html-proofer'

task :rebuild do
  sh "rm -rf _site"
  sh "bundle exec jekyll build"
end

task :htmlproofer => :rebuild do
  ignored = [
    "http://githubeditor.herokuapp.com"
  ]
  HTMLProofer.check_directory("./_site",
    typhoeus: {ssl_verifypeer: false, timeout: 30},
    url_ignore: ignored,
    check_html: true,
    assume_extension: ".html").run
end

task :spellcheck do
  sh "mdspell *.md constituencies/*.md -c .mdspell"
end

task :default => [:htmlproofer, :spellcheck]