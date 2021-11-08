all:
	npm start -c

deploy:
	npm run build && gcloud app deploy