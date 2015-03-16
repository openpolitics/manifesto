require 'html/proofer'

task :test do
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./_site", {typhoeus: { ssl_verifypeer: false }}).run
end

task :default => :test
