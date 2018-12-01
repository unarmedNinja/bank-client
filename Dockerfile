FROM httpd:2.4-alpine
COPY ./dist/bank-client/ /usr/local/apache2/htdocs/