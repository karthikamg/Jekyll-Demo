Jekyll demo site documentation
------------------------------

This is a mere jekyll demo site with the intention to learn jekyll and its implementation in detail. Following are the steps to implement jekyll.

1. Install jekyll as:
	>> gem install jekyll bundler
2. Create a new project as:
	>> jekyll new project-name
3. cd project-name
4. To run: jekyll serve
5. After changes are made, build is taken using: jekyll build
6. To watch the changes made: jekyll build --watch

Created an index.html outside of _site folder, replacing index.md which has jekyll default theme. This index.html file is build inside _site.
**_site folder need not be modified from outside as it contains files as a result of jekyll build.