# exam-student

## Pre Command
```
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm install --registry https://registry.npm.taobao.org  
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Ngix gzip
```
gzip on;
gzip_min_length 1k;
gzip_comp_level 1;
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/bmp application/x-bmp image/x-ms-bmp application/vnd.ms-fontobject font/ttf font/opentype font/x-woff;
gzip_vary on;
gzip_disable "MSIE [1-6]\.";
gzip_buffers 32 4k;
gzip_http_version 1.0;
```

## Ngix config
```
server {
    listen       80;
    server_name  student;
    root         /usr/local/exam/student;
    index        index.html;
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
    location /api/ {
       proxy_pass  http://localhost:8001;
    }
}
```


## Ngix Https config
```
server {
    listen 85;
    listen 8085 ssl;
    server_name  www.alvisu.com;
    root         /usr/local/exam/link/exam-student;
    index        index.html;
    error_page   500 502 503 504  /50x.html;
    ssl_certificate /usr/local/exam/ssl/nginx.crt;
    ssl_certificate_key /usr/local/exam/ssl/nginx.key;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ALL:!DH:!EXPORT:!RC4:+HIGH:+MEDIUM:!eNULL;
    ssl_prefer_server_ciphers on;
    location = /50x.html {
        root   html;
    }
    location /api/ {
       proxy_pass  https://www.alvisu.com:8001;
    }
}
```
