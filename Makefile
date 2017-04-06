install:
	npm install

start:
	npm start

dev:
	npm run dev

mac:
	rm -Rf out/
	npm run package:mac

win:
	rm -Rf out/
	npm run package:win

ubuntu:
	rm -Rf out/
	npm run package:ubuntu
