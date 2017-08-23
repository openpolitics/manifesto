require 'jekyll/test/tasks'
task default: "jekyll:check"

task :spellcheck do
  sh "mdspell *.md constituencies/*.md -c .mdspell"
end