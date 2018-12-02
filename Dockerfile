FROM node:9.11.2-alpine as nodebase

#get dependencies to build node-gyp
RUN apk add --update alpine-sdk python-dev

# set registry for npm packages. need to figure out directory to use for root. for now copy npmrc to all directories.
#RUN npm config set registry http://w3central.eportal.cibc.com:9008/repository/npm-proxy/

COPY .npmrc ./
COPY .npmrc ~/
RUN cp .npmrc $(npm root -g)/npm/.npmrc
RUN cp .npmrc $(npm root -g)/.npmrc

ENV $$NPM_CONF_GLOBALCONFIG $(npm root -g)/.npmrc

# Fix bug https://github.com/npm/npm/issues/9863
RUN cd $(npm root -g)/npm \
&& npm install fs-extra --verbose 

#&& sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js
 
RUN npm install node-gyp -g --verbose
RUN node-gyp install --verbose

RUN npm install -g sass && sass --version && npm install @angular/cli -g --verbose

#level 2
FROM nodebase
WORKDIR /usr/src/app
COPY package.json ./
COPY .npmrc ./
COPY tsconfig.json .
COPY angular.json .
COPY tslint.json .
COPY src src

RUN npm install --verbose
RUN npm run build


#level3
FROM httpd:2.4-alpine
COPY --from=1 ./dist/bank-client/ /usr/local/apache2/htdocs/