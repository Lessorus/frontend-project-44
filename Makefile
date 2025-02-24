install: 
	npm ci
	
run:
	node bin/brain-games.js

publish: 
	npm publish --dry-run

lint:
	npx eslint .
